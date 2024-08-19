import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {onBoardingData} from "@/utils/constant";
import {useEffect, useState} from "react";
import Button from "../../components/customButton";
import {Link, router} from "expo-router";
import icons from "../../utils/icons";
import {StatusBar} from "expo-status-bar";
import {useAuth} from "@/context/AuthProvider";

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {accessToken} = useAuth();

  useEffect(() => {
    if (accessToken) {
      router.replace("/home")
    }
  }, [accessToken]);

  const Dot = ({active, onPress}: { active: boolean, onPress: () => void; }) => (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`h-4 rounded-full ${active ? 'bg-primary w-8' : 'bg-gray-400 w-4'} mx-1`}
      />
    </TouchableOpacity>
  );

  const handleNext = () => {
    if (currentIndex === 2) {
      router.push("/sign-in");
      return;
    }
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <SafeAreaView className="flex-1 p-4 bg-white">
      <View className="flex items-end justify-end mt-2">
        <Link
          className="text-2xl"
          href={"/sign-in"}
        >
          Skip
        </Link>
      </View>
      <View className="items-center flex-1 mt-8">
        <Image
          source={onBoardingData[currentIndex].icon}
          className="w-[300px] h-[300px]"
          resizeMode="contain"
        />
        <Text className="mt-4 text-2xl font-bold text-heading">
          {onBoardingData[currentIndex].title}
        </Text>
        <Text className="px-6 mt-2 text-sm text-center text-paragraph">
          {onBoardingData[currentIndex].description}
        </Text>
      </View>
      <View className="flex-row justify-between mb-5">
        <View className="flex-row items-center justify-center">
          {onBoardingData.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onPress={() => setCurrentIndex(index)}
            />
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