import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import Button from "@/components/Button";
import { FontFamily } from "@/utils/FontFamily";
import Colors from "@/utils/Colors";
import {OtpInput} from "react-native-otp-entry";

const Page = () => {
  const [otp, setOtp] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const {phone} = useLocalSearchParams<{
        phone: string;
    }>();


  useEffect(() => {
    setIsButtonDisabled(otp.length !== 4);
  }, [otp]);

  const handlePress = async () => {
    // WIP. To integrate the OTP API
    // await login();
    router.push("/home");
  };

//   console.log(phoneNumber);
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.innerContainer}>
          <Text style={styles.phoneNumber}>+91 {phone}</Text>
          <Text style={styles.instructionText}>
            Enter the 4-digit OTP code that has been sent from SMS to complete your account registration
          </Text>
          <View style={styles.otpContainer}>
            <OtpInput
              numberOfDigits={4}
              focusColor="#000000"
              focusStickBlinkingDuration={500}
              onTextChange={(text) => setOtp(text)}
              theme={{
                containerStyle: styles.otpInputContainer,
                pinCodeContainerStyle: styles.pinCodeContainer,
                focusedPinCodeContainerStyle: styles.focusedPinCodeContainer,
                filledPinCodeContainerStyle: styles.filledPinCodeContainer,
              }}
            />
            <Text style={styles.resendText}>
              Haven't got the confirmation code yet? {" "}
              <Text style={styles.resendLink}>Resend</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          buttonText={"Confirm"}
          handlePress={handlePress}
          disabled={isButtonDisabled}
          containerStyles={styles.confirmButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    flexGrow: 1,
    height: "100%",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
  },
  phoneNumber: {
    marginTop: 32,
    fontSize: 24,
    textAlign: "center",
    fontFamily: FontFamily.semiBold,
  },
  instructionText: {
    marginTop: 16,
    marginBottom: 24,
    fontSize: 16,
    textAlign: "center",
    color: Colors.heading,
    fontFamily: FontFamily.regular,
    marginHorizontal: 5
  },
  otpContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  pinCodeContainer: {
    backgroundColor: "#F0F0F0",
    width: 58,
    height: 58,
    borderRadius: 20,
  },
  focusedPinCodeContainer: {
    backgroundColor: "#FFFFFF",
  },
  filledPinCodeContainer: {
    backgroundColor: "#FFFFFF",
  },
  resendText: {
    marginTop: 35,
    fontSize: 16,
    textAlign: "center",
  },
  resendLink: {
    fontFamily: FontFamily.semiBold,
    color: Colors.blue,
  },
  buttonContainer: {
    padding: 16,
    marginBottom: 20,
  },
  confirmButton: {
    marginHorizontal: 16,
  },
});

export default Page;
