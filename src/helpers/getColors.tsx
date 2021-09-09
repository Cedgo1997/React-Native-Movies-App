import ImageColors from "react-native-image-colors";

export const getImageColors = async (uri: string) => {
    let primary;
    let secondary;
    const colors = await ImageColors.getColors(uri);
    if (colors.platform === 'android') {
        primary = colors.dominant;
        secondary = colors.average;
    } else if (colors.platform === 'ios') {
        primary = colors.primary;
        secondary = colors.secondary;
    }

    return { primary, secondary };
}