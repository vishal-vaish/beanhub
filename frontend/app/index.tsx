import { Redirect } from "expo-router";

export default function Index() {
  const accessToken = false;

  return (
    <Redirect href={!accessToken ? "/(auth)/landingPage" : "/(tabs)/home"} />
  );
}