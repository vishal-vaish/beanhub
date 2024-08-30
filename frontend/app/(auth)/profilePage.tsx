import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/utils/Colors";
import { FontFamily } from "@/utils/FontFamily";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Picker from "@/components/DatePicker";
import Button from "@/components/Button";
import { StatusBar } from "expo-status-bar";

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

  const handleGenderChange = (value: string) => {
    setForm((p) => ({ ...p, ["gender"]: value }));
  };

  const handleDateChange = (date: Date) => {
    setForm((prevForm) => ({ ...prevForm, birthday: date.toDateString() }));
  };

  const genderOption = [
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
  ];

  const handleCreateAccount = () => {}

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
          label="Email address ()"
        />

        <Input
          type="number"
          inputValue={form.phoneNumber}
          handleChangeText={(value) => handleChangeText("phoneNumber", value)}
          inputPlaceholder="Enter your Phone number"
        />

        <Select
          title="Gender (option)"
          option={genderOption}
          selectedValue={form.gender}
          onValueChange={handleGenderChange}
        />

        <Picker
          value={form.birthday ? new Date(form.birthday) : new Date()}
          setValue={handleDateChange}
        />

        <Button
          buttonText="Get Started"
          handlePress={handleCreateAccount}
          containerStyles={{ marginVertical: 20 }}
        />
      </View>
      <StatusBar style="dark" />
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
