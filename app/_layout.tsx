
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import OnBoarding from '@/app/(routes)/onboarding/index';
// import Colors from '@/constants/Colors';  // impoted the colors.ts for light mode 
import { View } from 'react-native';

import OnBoardingScreen from '@/Screens/onboarding/onboardingScreen';
import { Stack } from 'expo-router';

export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <View>
          {/* <OnBoardingScreen/> */}
        </View>) : (
          <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name='index' />
            <Stack.Screen name='(routes)/Welcome_Intro/index' />
            <Stack.Screen name='(routes)/login/index' />
          </Stack>
        // <OnBoarding />
      )}
    </>
  );
}

