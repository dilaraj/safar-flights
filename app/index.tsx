import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "../components/SpalshScreen";


export default function Index() {
    // Navigating to homescreen ones animation is finished
    const [animationCompleted, setAnimationComplete] = useState<boolean>(false);

    const changeAnimationStatus = (param: boolean) => {
        setAnimationComplete(param);
    };
    
    return (
        <>
            {!animationCompleted ? (
                <SplashScreen onFinish={changeAnimationStatus}/>
            ) : (
                <View style={styles.container}>
                    <Text>
                        Home screen
                    </Text>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });