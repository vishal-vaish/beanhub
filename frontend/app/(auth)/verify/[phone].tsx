import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Colors from "@/utils/Colors";
import RNOtpVerify from "react-native-otp-verify";
import { FontFamily } from "@/utils/FontFamily";
import Button from "@/components/Button";

const CELL_COUNT = 4;

const Page = () => {
  const { phone } = useLocalSearchParams<{
    phone: string;
  }>();
  const [code, setCode] = useState("");
  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    RNOtpVerify.getHash()
      .then((hash) => {
        console.log("Hash:", hash);
        // You can use this hash when requesting the OTP from your server
      })
      .catch(console.log);

    RNOtpVerify.startOtpListener((message) => {
      try {
        const otpRegex = /(\d{4})/g;
        const match = otpRegex.exec(message);
        if (match) {
          const extractedOtp = match[1];
          setCode(extractedOtp);
          verifyOtp(extractedOtp);
          handlePress();
          console.log("extracted Otp", extractedOtp);
        }
      } catch (error) {
        console.log("Error extracting OTP:", error);
      }
    });

    return () => {
      RNOtpVerify.removeListener();
    };
  }, []);

  useEffect(() => {
    setIsButtonDisabled(code.length !== 4);
  }, [code]);

  const verifyOtp = async (otpCode: string) => {
    console.log(otpCode);

    try {
      // Implement your OTP verification logic here
      // For example:
      // const result = await verifyOtpWithServer(otpCode);
      // if (result.success) {
      //   router.push("/home");
      // } else {
      //   console.log("OTP verification failed");
      // }
      // For now, we'll just navigate to the home page
      // router.push("/home");
    } catch (error) {
      console.log("Error verifying OTP:", error);
    }
  };

  const handlePress = () => {
    router.replace("/(auth)/profilePage")
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.phoneNumber}>+91 {phone}</Text>
        <Text style={styles.legal}>
          We have sent you an SMS with a code to the number above.
        </Text>
        <Text style={styles.legal}>
          To complete your phone number verification, please enter the 4-digit
          activation code.
        </Text>

        <CodeField
          ref={ref}
          {...props}
          value={code}
          onChangeText={setCode}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Didn't receive a verification code?
          </Text>
        </View>
      </View>
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
    backgroundColor: Colors.white,
    justifyContent: "space-between"
  },
  innerContainer: {
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  phoneNumber: {
    marginTop: 32,
    fontSize: 24,
    textAlign: "center",
    fontFamily: FontFamily.semiBold,
  },
  legal: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
    fontFamily: FontFamily.regular,
    marginHorizontal: 5,
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.blue,
    fontSize: 18,
    marginTop:10
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 360,
    marginLeft: "auto",
    marginRight: "auto",
    gap: 10,
  },
  cellRoot: {
    width: 58,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    paddingBottom: 4,
    borderColor: Colors.primary,
    borderWidth: 2,
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
