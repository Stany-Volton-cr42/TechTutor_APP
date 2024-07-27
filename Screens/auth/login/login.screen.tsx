import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import OnBoardingScreen from "@/Screens/onboarding/onboardingScreen";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

import {
    Entypo,
    FontAwesome,
    Fontisto,
    Ionicons,
    SimpleLineIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
    useFonts,
    Raleway_700Bold,
    Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import axios from "axios";
import { SERVER_URI } from "@/Utils/uri";
import { useState } from 'react';
import { commonStyles } from '@/styles/common/common.style';
import { router } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-notifications";

// import { Image } from 'react-native-elements'; // Import from react-native-elements




export default function LoginScreen() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [required, setRequired] = useState("");
    const [error, setError] = useState({
        password: "",
    });

    let [fontsLoaded, fontError] = useFonts({
        Raleway_600SemiBold,
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_700Bold,
        Nunito_600SemiBold,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const handlePasswordValidation = (value: string) => {
        const password = value;
        const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
        const passwordOneNumber = /(?=.*[0-9])/;
        const passwordSixValue = /(?=.{6,})/;

        if (!passwordSpecialCharacter.test(password)) {
            setError({
                ...error,
                password: "Write at least one special character",
            });
            setUserInfo({ ...userInfo, password: "" });
        } else if (!passwordOneNumber.test(password)) {
            setError({
                ...error,
                password: "Write at least one number",
            });
            setUserInfo({ ...userInfo, password: "" });
        } else if (!passwordSixValue.test(password)) {
            setError({
                ...error,
                password: "Write at least 6 characters",
            });
            setUserInfo({ ...userInfo, password: "" });
        } else {
            setError({
                ...error,
                password: "",
            });
            setUserInfo({ ...userInfo, password: value });
        }
    };

    const handleSignIn = async () => {
        await axios
            .post(`${SERVER_URI}/login`, {
                email: userInfo.email,
                password: userInfo.password,
            })
            .then(async (res) => {
                await AsyncStorage.setItem("access_token", res.data.accessToken);
                await AsyncStorage.setItem("refresh_token", res.data.refreshToken);
                router.push("/(tabs)");
            })
            .catch((error) => {
                console.log(error);
                Toast.show("Email or password is not correct!", {
                    type: "danger",
                });
            });
    };



    return (
        <LinearGradient
            colors={["#E5ECF9", "#F6F7F9"]}
            style={{ flex: 1, paddingTop: 20 }}
        >
            <ScrollView>
                <Image
                    style={styles.signInImage}
                    source={require("@/assets/sign-in/sign_in.png")}
                />
                <Text style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
                    Welcome Back!
                </Text>
                <Text style={styles.learningText}>
                    Login to your existing account of Becodemy
                </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputFieldContainer}>
                        <Entypo name="mail" size={24} color="#575757" style={styles.icon} />
                        <TextInput
                            style={styles.inputField}
                            placeholder="Email"
                            placeholderTextColor="#575757"
                            value={userInfo.email}
                            onChangeText={text => setUserInfo({ ...userInfo, email: text })}
                        />
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <Entypo name="key" size={24} color="#575757" style={styles.icon} />
                        <TextInput
                            style={styles.inputField}
                            placeholder="Password"
                            placeholderTextColor="#575757"
                            value={userInfo.password}
                            secureTextEntry={!isPasswordVisible}
                            onChangeText={text => setUserInfo({ ...userInfo, password: text })}
                        />
                        <TouchableOpacity
                            style={styles.passwordVisibilityButton}
                            onPress={() => setPasswordVisible(!isPasswordVisible)}
                        >
                            <Entypo name={isPasswordVisible ? "eye-with-line" : "eye"} size={24} color="#575757" />
                        </TouchableOpacity>
                        {error.password && (
                            <View style={[commonStyles.errorContainer, { top: 145 }]}>
                                <Entypo name="cross" size={18} color={"red"} />
                                <Text style={{ color: "red", fontSize: 11, marginTop: -1 }}>
                                    {error.password}
                                </Text>
                            </View>
                        )}

                    </View>
                    <TouchableOpacity
                        onPress={() => router.push("/(routes)/forgot-password")}
                    >
                        <Text
                            style={[
                                styles.forgotSection,
                                { fontFamily: "Nunito_600SemiBold" },
                            ]}
                        >
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{
                            marginTop: 40,
                            marginBottom: 0,
                            width: wp('90%'),
                            height: hp('6%'),
                            borderRadius: 10,
                            backgroundColor: '#2467EC',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={handleSignIn}
                    >
                        {buttonSpinner ? (
                            <ActivityIndicator size="small" color={"white"} />
                        ) : (
                            <Text
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 16,
                                    fontFamily: "Raleway_700Bold",
                                }}
                            >
                                Sign In
                            </Text>
                        )}
                    </TouchableOpacity>


                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 20,
                            gap: 10,
                        }}
                    >
                        <TouchableOpacity>
                            <FontAwesome name="google" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="github" size={30} />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.signupRedirect}>
                        <Text style={{ fontSize: 15, fontFamily: "Raleway_600SemiBold" }}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => router.push("/(routes)/sign-up")}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontFamily: "Raleway_600SemiBold",
                                    color: "#2467EC",
                                    marginLeft: 5,
                                }}
                            >
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    signInImage: {
        width: "60%",
        height: 250,
        alignSelf: "center",
        marginTop: 0,
    },
    welcomeText: {
        fontSize: 28,
        textAlign: "center",
        color: "#575757",
        marginBottom: 20,
    },
    learningText: {
        fontSize: 18,
        textAlign: "center",
        color: "#575757",
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 30,
        alignItems: "center",
    },
    inputFieldContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        marginBottom: 10,
        backgroundColor: "#F6F7F9",
        borderRadius: 10,
    },
    icon: {
        position: "absolute",
        left: 10,
    },
    inputField: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        fontSize: 16,
        color: "#575757",
        width: "100%",
    },
    passwordVisibilityButton: {
        position: "absolute",
        right: 10,
        top: 10,
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: "transparent",
        borderRadius: 50,
        overflow: "hidden",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    forgotSection: {
        marginTop: 0,
        marginLeft: 180,

        textAlign: "center",
        color: "#575757",
        textDecorationLine: "underline",
        fontFamily: "Nunito_600SemiBold",
    },
    signupRedirect: {
        marginTop: 10,
        marginBottom: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});

