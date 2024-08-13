import {Stack} from "expo-router";

const AuthLayout = () => {
  return (
    <>
      <Stack>
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
            headerTitle: "Confirm OTP code"
          }}
        />
      </Stack>
    </>
  )
}

export default AuthLayout;