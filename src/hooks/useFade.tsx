import { useRef } from "react";
import { Animated } from "react-native";

export const useFade = () => {
    const { current: opacity } = useRef(new Animated.Value(0))

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }
        ).start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }
        ).start();
    }

    return {
        opacity,
        fadeIn,
        fadeOut
    }
}
