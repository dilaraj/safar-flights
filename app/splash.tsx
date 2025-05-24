import SplashScreen from "@/components/SpalshScreen";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Splash() {
    const router = useRouter();
    const [animationCompleted, setAnimationComplete] = useState(false);
    
    useEffect(() => {
        if (animationCompleted) {
            router.replace('/'); // Goes to tabbed index screen
        }
    }, [animationCompleted]);

    return (
        <SplashScreen onFinish={setAnimationComplete} />
    );
}