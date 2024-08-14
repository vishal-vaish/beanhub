import {View, Text, Image} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {onBoardingData} from "@/constants/data";
import {useEffect, useState} from "react";
import Button from "../components/customButton";
import {Link, router} from "expo-router";
import icons from "../constants/icons";
import {StatusBar} from "expo-status-bar";
import {useAuth} from "@/context/AuthProvider";

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {accessToken} = useAuth();

  useEffect(() => {
    if(accessToken) {
      router.replace("/home")
    }
  }, [accessToken]);

  const Dot = ({active}: { active: boolean }) => (
    <View
      className={`h-4 rounded-full ${active ? 'bg-primary w-8' : 'bg-gray-400 w-4'} mx-1`}
    />
  );

  const handleNext = () => {
    if (currentIndex === 2) {
      router.push("/sign-in");
      return;
    }
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <View className="flex justify-end items-end mt-5">
        <Link
          className="text-2xl"
          href={"/sign-in"}
        >
          Skip
        </Link>
      </View>
        <View className="flex-1 items-center mt-8">
          <Image
            source={onBoardingData[currentIndex].icon}
            className="w-[300px] h-[300px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold mt-4 text-heading">
            {onBoardingData[currentIndex].title}
          </Text>
          <Text className="text-center mt-2 px-6 text-sm text-paragraph">
            {onBoardingData[currentIndex].description}
          </Text>
        </View>
        <View className="flex-row justify-between mb-5">
          <View className="flex-row justify-center items-center">
            {onBoardingData.map((_, index) => (
              <Dot key={index} active={index === currentIndex}/>
            ))}
          </View>
          <Button
            buttonText={currentIndex === 2 ? "Login/Register" : "Next"}
            handlePress={handleNext}
            containerStyles="px-10"
            icon={icons.arrowRight}
          />
        </View>
      <StatusBar style="dark"/>
    </SafeAreaView>
  );
};

export default OnBoarding