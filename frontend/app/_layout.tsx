import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useAppFonts } from "@/utils/FontFamily";
import { AuthProvider } from "@/context/AuthContext";

const RootLayout = () => {
  const { fontsLoaded, error } = useAppFonts();

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

const AppRoot = () => (
  <AuthProvider>
    <RootLayout />
  </AuthProvider>
);

export default AppRoot;
