import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import React, { useEffect, useState } from "react";
import images from "@/utils/images";
import Button from "@/components/Button";
import { StatusBar } from "expo-status-bar";
import Colors from "@/utils/Colors";
import { FontFamily } from "@/utils/FontFamily";
import FormField from "@/components/FormField";
import { useRouter } from "expo-router";
import icons from "@/utils/icons";
import { useAuth } from "@/context/AuthContext";

const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState<any>();
  const isPhoneNumberValid =
    phoneNumber.length >= 8 && phoneNumber.length <= 11;
  const router = useRouter();
  const { saveAccessToken } = useAuth();

  const configureGoogleSign = () => {
    GoogleSignin.configure({
      webClientId:
        "785823932685-dg3ta11fc6cg3m4uk6ormi8saun44ooq.apps.googleusercontent.com",
      offlineAccess: true,
    });
  };

  useEffect(() => {
    configureGoogleSign();
  }, []);

  useEffect(() => {
    if (isPhoneNumberValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [phoneNumber]);

  const googleSignIn = async () => {
    console.log("Pressed sign in");

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo?.idToken) {
        saveAccessToken(userInfo?.idToken);
      }
      router.replace("/(tabs)/home");
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Sign in is in progress already");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play services not available or outdated");
      } else {
        console.log("Some other error happened:", error.toString());
      }
    }
  };
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const handleContinue = () => {};

  return (
    <ScrollView contentContainerStyle={{ height: "100%" }}>
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
          <FormField
            type="number"
            inputValue={phoneNumber}
            handleChangeText={(e) => setPhoneNumber(e)}
            inputPlaceholder="Enter your Phone number"
            containerStyle={styles.formFieldContainer}
          />

          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
              By tapping "Continue" you agree to our{" "}
              <Text style={styles.linkText}>Terms of Use</Text> and{" "}
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Text>
          </View>

          <Button
            buttonText="Continue"
            handlePress={handleContinue}
            disabled={isDisabled}
          />

          <Text style={styles.orText}>Or</Text>
          <View style={styles.providersContainer}>
            <TouchableOpacity
              style={[
                styles.provider,
                {
                  backgroundColor:
                    Platform.OS === "android" ? "#F0F5FA" : "#1B1F2F",
                },
              ]}
              onPress={googleSignIn}
            >
              <Image
                source={Platform.OS === "android" ? icons.google : icons.apple}
                style={styles.providerIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
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
    height: 500,
  },
  bottomContainer: {
    backgroundColor: Colors.white,
    padding: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    minHeight: "50%",
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
    marginVertical: 25,
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
  orText: {
    color: "#646982",
    fontFamily: FontFamily.medium,
    marginVertical: 15,
    textAlign: "center",
    fontSize: 20,
  },
  providersContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  provider: {
    padding: 16,
    marginTop: 8,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 5,
  },
  providerIcon: {
    width: 40,
    height: 40,
  },
});

export default Page;
