import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/utils/Colors";
import { FontFamily } from "@/utils/FontFamily";
import Input from "@/components/Input";

type Form = {
  firstname: string;
  lastname: string;
  emailaddress: string;
  phoneNumber: string;
  gender: string;
  birthday: string;
};

const Page = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    phoneNumber: "",
    gender: "",
    birthday: "",
  });

  const handleChangeText = (field: keyof Form, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  return (
    <ScrollView contentContainerStyle={{ height: "100%" }}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Create Profile</Text>
        <Text style={styles.headerdescription}>
          Your mobile number has been confirmed. We just need a few more
          details.
        </Text>
        <View style={styles.twoByOne}>
          <Input
            inputValue={form.firstname}
            handleChangeText={(value) => handleChangeText("firstname", value)}
            inputPlaceholder="First Name"
            containerStyle={{ width: "50%" }}
            label="First Name"
          />
          <Input
            inputValue={form.lastname}
            handleChangeText={(value) => handleChangeText("lastname", value)}
            inputPlaceholder="Last Name"
            containerStyle={{ width: "50%" }}
            label="Last Name"
          />
        </View>
        <Input
          inputValue={form.emailaddress}
          handleChangeText={(value) => handleChangeText("emailaddress", value)}
          inputPlaceholder="Email Address"
          label="Email address"
        />

        <Input
          type="number"
          inputValue={form.phoneNumber}
          handleChangeText={(value) => handleChangeText("phoneNumber", value)}
          inputPlaceholder="Enter your Phone number"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 15,
  },
  headerText: {
    color: Colors.black,
    fontFamily: FontFamily.medium,
    fontSize: 25,
  },
  headerdescription: {
    color: Colors.black,
    fontFamily: FontFamily.regular,
    fontSize: 18,
  },
  twoByOne: {
    flexDirection: "row",
    gap: 10,
  },
});

export default Page;
