import {View, Text, Image, ScrollView} from "react-native";
import images from "@/utils/images";
import FormField from "@/components/FormField";
import {useEffect, useState} from "react";
import Button from "@/components/customButton";
import {signProvider} from "@/utils/constant";
import {StatusBar} from "expo-status-bar";
import {useRouter} from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    phoneNumber: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const isPhoneNumberValid = form.phoneNumber.length >= 8 && form.phoneNumber.length <= 11;
  const router = useRouter();

  useEffect(() => {
    if (isPhoneNumberValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [form]);

  const handleContinue = () => {
    if (!isPhoneNumberValid) return;
    //WIP. Integrating a api
    //when response coming navigate to
    // @ts-ignore
    router.push("/confirmOTP");
  }

  return (
    <ScrollView contentContainerStyle={{height: "100%"}}>
      <View className="relative flex h-full">
        <Image
          source={images.coffeeBeans}
          className="w-full h-[500px]"
          resizeMode="cover"
        />
        <View className="bg-white p-4 rounded-t-3xl min-h-[55vh] w-full absolute bottom-0">
          <View className="relative flex items-center justify-center mt-2">
            <View className="w-full border border-slate-300"/>
            <Text className="absolute px-4 overflow-auto text-lg bg-white">Login or Sign Up</Text>
          </View>
          <FormField
            type="number"
            inputValue={form.phoneNumber}
            handleChangeText={(e) => setForm({...form, phoneNumber: e})}
            inputPlaceholder="Enter your Phone number"
            containerStyle={"mt-10"}
          />

          <View className="mx-auto w-[75%] my-8">
            <Text className="text-center text-gray-500 font-psemibold">
              By tapping "Continue" you agree to our {" "}
              <Text className="text-info">Terms of Use</Text>
              {" "}and{" "}
              <Text className="text-info">Privacy Policy</Text>
            </Text>
          </View>

          <Button
            buttonText="Continue"
            handlePress={handleContinue}
            disabled={isDisabled}
          />

          <Text className="text-[#646982] font-pbold mt-5 text-center text-xl">Or</Text>

          <View className="flex-row items-center justify-evenly mt-5">
            {signProvider.map((provider, index) => (
              <View
                key={index}
                className="p-4 mt-2 border border-transparent rounded-full"
                style={{
                  backgroundColor: provider.backgroundColor,
                  shadowColor: "#000",
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.3,
                  shadowRadius: 7,
                  elevation: 5,
                }}
              >
                <Image
                  source={provider.icon}
                  className="w-[40px] h-[40px]"
                  resizeMode="contain"
                />
              </View>
            ))}
          </View>
        </View>
      </View>
      <StatusBar style="light"/>
    </ScrollView>
  )
}

export default SignIn;