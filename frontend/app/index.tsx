import {Text, View, Image} from "react-native";
import images from "../constants/images";
import {StatusBar} from "expo-status-bar";
import Button from "../components/customButton";
import {router} from "expo-router";

export default function Index() {

  return (
    <>
      <View className="w-full flex justify-between items-center h-full">
        <Image
          source={images.logo}
          className="w-full h-full absolute top-0 left-0 right-0 bottom-0"
          resizeMode="cover"
        />
        <View className="my-auto">
          <View>
            <Text className="text-3xl mt-10 font-bold font-pbold text-white text-center">Kolkata #1 Cafe Spots</Text>
            <Text className="text-xl mt-10 text-white">Enjoy all your favorite dishes in </Text>
            <Text className="text-white text-center text-xl">one cozy cafe.</Text>
          </View>
        </View>
        <Button
          buttonText="Get Started"
          handlePress={() => router.push("/onBoarding")}
          containerStyles="w-[90vw] my-10"
        />
      </View>
      <StatusBar style="light"/>
    </>
  );
}
