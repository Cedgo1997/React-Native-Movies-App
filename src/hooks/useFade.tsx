import { useRef } from "react";
import { Animated } from "react-native";

export const useFade = () => {
    const { current: opacity } = useRef(new Animated.Value(0))

    const fadeIn = (callback?: Function) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }
        ).start(() => callback ? callback() : null);
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 200,
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
