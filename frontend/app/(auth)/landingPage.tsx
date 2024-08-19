import {Text, View, Image} from "react-native";
import {StatusBar} from "expo-status-bar";
import {router} from "expo-router";
import {useEffect} from "react";
import {useAuth} from "@/context/AuthProvider";
import images from "@/utils/images";
import Button from "@/components/customButton";

export default function Index() {
  const {accessToken} = useAuth();

  // useEffect(() => {
  //   if(accessToken) {
  //     router.replace("/home")
  //   }
  // }, [accessToken]);

  // if(accessToken === null) return ;

  return (
    <>
      <View className="flex items-center justify-between w-full h-full">
        <Image
          source={images.logo}
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
          resizeMode="cover"
        />
        <View className="my-auto">
          <View>
            <Text className="mt-10 text-3xl font-bold text-center text-white font-pbold">Kolkata #1 Cafe Spots</Text>
            <Text className="mt-10 text-xl text-white">Enjoy all your favorite dishes in </Text>
            <Text className="text-xl text-center text-white">one cozy cafe.</Text>
          </View>
        </View>
        <Button
          buttonText="Get Started"
          handlePress={() => router.push("/(auth)/onboarding")}
          containerStyles="w-[90vw] my-10"
        />
      </View>
      <StatusBar style="light"/>
    </>
  );
}
