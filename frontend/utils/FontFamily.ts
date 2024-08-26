import { useFonts } from 'expo-font';

export const useAppFonts = () => {
  const [fontsLoaded, error] = useFonts({
    "PBlack": require("../assets/fonts/Poppins-Black.ttf"),
    "PBold": require("../assets/fonts/Poppins-Bold.ttf"),
    "PExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "PExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "PLight": require("../assets/fonts/Poppins-Light.ttf"),
    "PMedium": require("../assets/fonts/Poppins-Medium.ttf"),
    "PRegular": require("../assets/fonts/Poppins-Regular.ttf"),
    "PSemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "PThin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  return { fontsLoaded, error };
};

export const FontFamily = {
  black: "PBlack",
  bold: "PBold",
  extraBold: "PExtraBold",
  extraLight: "PExtraLight",
  light: "PLight",
  medium: "PMedium",
  regular: "PRegular",
  semiBold: "PSemiBold",
  thin: "PThin",
};
