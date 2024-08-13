import {View, Text, Image, ScrollView} from "react-native";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import {useEffect, useState} from "react";
import Button from "@/components/customButton";
import {signProvider} from "@/constants/data";

const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const isNameValid = form.name.trim().length > 0;
  const isPhoneNumberValid = form.phoneNumber.length >= 8 && form.phoneNumber.length <= 11;

  useEffect(() => {
    if (isNameValid && isPhoneNumberValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [form]);

  const handleContinue = () => {
    if(!isNameValid && !isPhoneNumberValid) return;


  }

  return (
    <ScrollView contentContainerStyle={{height: "100%"}}>
      <View className="flex relative h-full">
        <Image
          source={images.coffeeBeans}
          className="w-full h-[500px]"
          resizeMode="cover"
        />
        <View className="bg-white p-4 rounded-t-3xl min-h-[55vh] w-full absolute bottom-0">
          <View className="relative flex justify-center items-center mt-2">
            <View className="w-full border border-slate-300"/>
            <Text className="absolute overflow-auto bg-white px-4 text-lg">Login or Sign Up</Text>
          </View>
          <FormField
            title="text"
            inputValue={form.name}
            handleChangeText={(e) => setForm({...form, name: e})}
            inputPlaceholder="Enter your full name"
          />
          <FormField
            title="phoneNumber"
            inputValue={form.phoneNumber}
            handleChangeText={(e) => setForm({...form, phoneNumber: e})}
            inputPlaceholder="Enter your Phone number"
          />

          <View className="mx-auto w-[75%] my-8">
            <Text className="font-psemibold text-gray-500 text-center">
              By tapping "Continue" you agree to our {" "}
              <Text className="text-blue-600">Terms of Use</Text>
              {" "}and{" "}
              <Text className="text-blue-600">Privacy Policy</Text>
            </Text>
          </View>

          <Button
            title="Continue"
            handlePress={handleContinue}
            disabled={isDisabled}
            />

          <Text className="text-[#646982] font-pbold mt-5 text-center text-xl">Or</Text>

          <View className="flex-row justify-evenly items-center">
            {signProvider.map((provider, index) => (
              <View
                key={index}
                className="border border-transparent p-4 mt-2 rounded-full"
                style={{
                  backgroundColor: provider.backgroundColor,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
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
    </ScrollView>
  )
}

export default SignIn;