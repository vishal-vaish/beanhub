import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import images from "@/utils/images";
import Button from "@/components/Button";
import { StatusBar } from "expo-status-bar";
import Colors from "@/utils/Colors";
import { FontFamily } from "@/utils/FontFamily";
import { useRouter } from "expo-router";
import Input from "@/components/Input";
import Loading from "@/components/Loading";

const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const isPhoneNumberValid =
    phoneNumber.length >= 8 && phoneNumber.length <= 11;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isPhoneNumberValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [phoneNumber]);

  const handleContinue = () => {
    if(!isPhoneNumberValid) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push(`/(auth)/verify/${phoneNumber}`);
    },2000);
  };

  return (
    <ScrollView contentContainerStyle={{ height: "100%" }}>
      {isLoading && (
        <Loading/>
      )}
      <View style={styles.container}>
        <Image
          source={images.coffeeBeans}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.bottomContainer}>
          <View style={styles.header}>
            <View style={styles.headerLine} />
            <Text style={styles.headerText}>Login or Sign Up</Text>
          </View>
          <Input
            type="number"
            inputValue={phoneNumber}
            handleChangeText={(e) => setPhoneNumber(e)}
            inputPlaceholder="Enter your Phone number"
            containerStyle={styles.formFieldContainer}
          />

          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
              By tapping "Login With OTP" you agree to our{" "}
              <Text style={styles.linkText}>Terms of Use</Text> and{" "}
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Text>
          </View>

          <Button
            buttonText="Login Wih OTP"
            handlePress={handleContinue}
            disabled={isDisabled}
          />
        </View>
      </View>
      <StatusBar style="light" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 600,
  },
  bottomContainer: {
    backgroundColor: Colors.white,
    padding: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    minHeight: "40%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    position: "relative",
  },
  headerLine: {
    width: "100%",
    borderColor: Colors.secondary,
    borderWidth: 1,
  },
  headerText: {
    position: "absolute",
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    fontSize: 18,
  },
  formFieldContainer: {
    marginTop: 40,
  },
  infoTextContainer: {
    alignItems: "center",
    width: "75%",
    margin: "auto",
    marginVertical: 40,
  },
  infoText: {
    textAlign: "center",
    color: Colors.heading,
    fontFamily: FontFamily.semiBold,
    fontSize: 15,
  },
  linkText: {
    color: Colors.muted,
    fontFamily: FontFamily.semiBold,
    fontSize: 15,
  },
  loading: {
    zIndex: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Page;
