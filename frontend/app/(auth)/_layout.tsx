import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="landingPage" options={{headerShown: false}}/>
      <Stack.Screen name="onboarding" options={{headerShown: false}}/>
    </Stack>
  );
}

export default AuthLayout;