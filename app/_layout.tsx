import SplashScreen from "@/components/SpalshScreen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {

    const [animationCompleted, setAnimationComplete] = useState(false);

    const [fontsLoaded] = useFonts({
        JakartaMed: require('../assets/fonts/Jakarta-Medium.ttf'),
        JakartaLight: require('../assets/fonts/Jakarta-Light.ttf'),
    });

    if (!fontsLoaded || !animationCompleted) {
        return (
            <SplashScreen onFinish={setAnimationComplete} />
        );
    }

    return (
        <Stack screenOptions={{ headerShown: false}}>
            <Stack.Screen name="(tabs)" options={{}} />
        </Stack>
    );
}