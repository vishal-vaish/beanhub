import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" />
    </Stack>
  );
}

export default AuthLayout;