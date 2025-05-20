import DestinationCardCarousel from "@/components/HomeScreenComponents/DestinationCardCarouselComponent";
import { useFonts } from "expo-font";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SplashScreen from "../components/SpalshScreen";


export default function Index() {
    // Navigating to homescreen ones animation is finished
    const [animationCompleted, setAnimationComplete] = useState<boolean>(false);

    const changeAnimationStatus = (param: boolean) => {
        setAnimationComplete(param);
    };

    // Global Fonts
    const [fontsLoaded] = useFonts({
        Jakarta: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaMed: require('../assets/fonts/Jakarta-Medium.ttf'),
        JakartaLight: require('../assets/fonts/Jakarta-Light.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    
    return (
        <>
            {!animationCompleted ? (
                <SplashScreen onFinish={changeAnimationStatus}/>
            ) : (
                <View style={styles.container}>
                    <DestinationCardCarousel heading="Popular Destinations"/>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1F1F1',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });