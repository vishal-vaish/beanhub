import {View, Text, ScrollView} from "react-native";
import Button from "@/components/customButton";
import {useEffect, useState} from "react";
import {OtpInput} from "react-native-otp-entry";
import {useAuth} from "@/context/AuthProvider";
import {router} from "expo-router";

const ConfirmOTP = () => {
  const [otpText, setOtpText] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const {login} = useAuth();

  useEffect(() => {
    if (otpText.length === 4) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [otpText]);

  const handlePress = async () => {
    //WIP. to integrate the otp api
    // try {
    //   const response = await fetch('https://your-api.com/validate-otp', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ otp: otpText }),
    //   });
    //   const data = await response.json();
    //
    //   if (data.success) {
    //     const accessToken = data.accessToken;

        await login();
        router.push("/home");
    //
    //     console.log('Token stored and context updated!');
    //   } else {
    //     console.log('OTP validation failed.');
    //   }
    // } catch (error) {
    //   console.error('Error validating OTP:', error);
    // }
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{flexGrow: 1, height: "100%"}}>
        <View className="flex-1 p-4">
          <Text className="mt-8 text-2xl text-center font-psemibold">+91 123456789</Text>
          <Text className="mt-4 mb-6 text-base text-center text-black font-pregular">
            Enter the 4-digit OTP code that has been sent from SMS to complete your account registration
          </Text>
          <View className="items-center mb-6">
            <OtpInput
              numberOfDigits={5}
              focusColor="#000000"
              focusStickBlinkingDuration={500}
              onTextChange={(text) => setOtpText(text)}
              theme={{
                containerStyle: {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                },
                pinCodeContainerStyle: {
                  backgroundColor: "#F0F0F0",
                  width: 58,
                  height: 58,
                  borderRadius: 20,
                },
                focusedPinCodeContainerStyle: {
                  backgroundColor: "#FFFFFF",
                },
                filledPinCodeContainerStyle: {
                  backgroundColor: "#FFFFFF",
                },
              }}
            />
            <Text className="mt-6 text-base text-center">
              Haven't got the confirmation code yet{" "}
              <Text className="font-semibold text-info">Resend</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View className="p-4 mb-5">
        <Button
          buttonText={"Confirm"}
          handlePress={handlePress}
          disabled={isButtonDisabled}
          containerStyles="mx-4"
        />
      </View>
    </View>
  )
}

export default ConfirmOTP;