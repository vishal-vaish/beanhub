import { Redirect } from "expo-router";
import { View, Text } from "react-native";

export default function Index() {
  const accessToken = false;

  return (
    <Redirect href={!accessToken ? "/(auth)/landingPage" : "/(tabs)/home"} />
  );
}