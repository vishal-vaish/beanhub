import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="landingPage" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="profilePage" options={{ title: "My Profile" }} />
      <Stack.Screen
        name="verify/[phone]"
        options={{
          title: "Confirm OTP",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
