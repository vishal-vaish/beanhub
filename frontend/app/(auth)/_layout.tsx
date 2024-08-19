import { router, Stack } from "expo-router";
import { useAuth } from "@/context/AuthProvider";
import { useEffect } from "react";

const AuthLayout = () => {
  const { accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) {
      router.replace("/home");
    }
  }, [accessToken]);

  return (
    <>
      <Stack>
        <Stack.Screen
          name="landingPage"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboarding"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="confirmOTP"
          options={{
            headerShown: true,
            headerTitle: "Confirm OTP",
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;
