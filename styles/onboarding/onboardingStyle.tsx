import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";



export const styles = StyleSheet.create({

    firstContainer: {
        alignItems: "center",
        marginTop: 50,
    },
    Logo:{
        width: wp('23%'),
        height: hp('10%'),
    },
    titleWrapper:{
        flexDirection: 'row',
    },
    titleTextShape1:{
        position: 'absolute',
        left: -28,
        top: 20,
    },
    titleText:{
        fontSize: hp('4%'),
        textAlign: 'center',
        color: 'white',
    },
    titleTextShape2:{
        position: 'absolute',
        right: -28,
        top: -20,
    },
    titleShape3:{
        position: 'absolute',
        left: 68,
    },
    dscpWrapper:{
        marginTop: 30,
    },
    dscpText:{
        fontSize: hp('2%'),
        textAlign: 'center',
        color: '#bfbfbf',
    },
    buttonWrapper:{
        marginTop: 30,
        marginBottom: 30,
        width: wp('80%'),
        height: hp('6%'),
        borderRadius: 10,
        backgroundColor: '#2F95DC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: hp('2.5%'),
        textAlign: 'center',
        color: '#FFFFFF',
    },
    welcomeButtonStyle:{
        marginTop: 30,
        marginBottom: 30,
        width: wp('90%'),
        height: hp('6%'),
        borderRadius: 10,
        backgroundColor: '#2467EC',
        justifyContent: 'center',
        alignItems: 'center',
    }
});