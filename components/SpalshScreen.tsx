import LottieView from 'lottie-react-native';
import React from "react";

interface Props {
    onFinish: (param: boolean) => void;
}

export default function SplashScreen({ onFinish }: Props) {
    return (
        <LottieView 
            source={require('../assets/images/lottie-animation.json')}
            style={{ width: '100%', height: '100%', backgroundColor: '#02929A'}}
            autoPlay
            loop={false}
            onAnimationFinish={() => onFinish(true)}
        />
    );
}