import React, { useState } from "react";
import Dropdown from "react-native-input-select";
import { StyleSheet } from "react-native";
import Colors from "@/utils/Colors";
import { FontFamily } from "@/utils/FontFamily";

type Option = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  option: Option[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};

const Select = (props: Props) => {
  return (
    <Dropdown
      label={props.title}
      placeholder="Select an option..."
      options={props.option}
      selectedValue={props.selectedValue}
      onValueChange={(value: string) => props.onValueChange(value)}
      primaryColor={"green"}
      labelStyle={styles.label}
      dropdownStyle={styles.dropdown}
      selectedItemStyle={styles.selectedItemStyle}
      placeholderStyle={styles.placeholderStyle}
      checkboxControls={{
        checkboxSize: 20,
        checkboxLabelStyle: {
          fontSize: 20,
          fontFamily: FontFamily.medium,
          fontWeight: "400",
          padding: 8,
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  label: {
    color: Colors.gray,
    fontSize: 18,
    paddingLeft: 5,
    paddingTop: 25,
  },
  dropdown: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Colors.secondary,
    width: "100%",
    height: 64,
    backgroundColor: Colors.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 10,
    paddingLeft: 10,
  },
  selectedItemStyle: {
    fontSize: 20,
  },
  placeholderStyle: {
    fontSize: 20,
    color: Colors.gray
  },
});

export default Select;
