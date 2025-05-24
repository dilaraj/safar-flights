import { useFonts } from "expo-font";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SplashScreen from "../../components/SpalshScreen";
import { Link } from "expo-router";



export default function Index() {
    // Navigating to homescreen ones animation is finished
    const [animationCompleted, setAnimationComplete] = useState<boolean>(false);

    const changeAnimationStatus = (param: boolean) => {
        setAnimationComplete(param);
    };

    // Global Fonts
    const [fontsLoaded] = useFonts({
        JakartaMed: require('../../assets/fonts/Jakarta-Medium.ttf'),
        JakartaLight: require('../../assets/fonts/Jakarta-Light.ttf'),
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
                    <Text style={styles.text}>
                        Home Screen
                    </Text>
                    <Link href={'/search'} style={styles.button}>
                        Go to search screen
                    </Link>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
  });