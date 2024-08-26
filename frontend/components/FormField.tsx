import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { useState } from "react";
import React from "react";
import Colors from "@/utils/Colors";
import { FontFamily } from "@/utils/FontFamily";

type Props = {
  type: string;
  inputValue: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputPlaceholder: string;
  handleChangeText: (e: any) => void;
  icon?: React.ReactElement;
};

const FormField = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = (text: string) => {
    if (props.type === "number") {
      const numericText = text.replace(/[^0-9]/g, "");
      props.handleChangeText(numericText);
    } else {
      props.handleChangeText(text);
    }
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      <View
        style={[
          styles.inputContainer,
          isFocused ? styles.inputContainerFocused : styles.inputContainerUnfocused,
          isFocused && styles.shadow,
        ]}
      >
        {props.type === "number" && (
          <Text style={styles.prefix}>+91</Text>
        )}
        {props.icon && (
          <Text style={styles.icon}>{props.icon}</Text>
        )}
        <TextInput
          style={styles.textInput}
          value={props.inputValue}
          placeholder={props.inputPlaceholder}
          placeholderTextColor="#7B7B8B"
          keyboardType={props.type === "number" ? "phone-pad" : "default"}
          onChangeText={handleTextChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },
  inputContainer: {
    width: '100%',
    height: 64,
    paddingHorizontal: 16,
    borderRadius: 24,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  inputContainerFocused: {
    borderColor: Colors.primary,
  },
  inputContainerUnfocused: {
    borderColor: Colors.secondary,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 50,
    elevation: 15,
  },
  prefix: {
    marginRight: 12,
    fontFamily: FontFamily.semiBold,
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {
    marginRight: 20,
  },
  textInput: {
    flex: 1,
    fontFamily: FontFamily.semiBold,
    fontSize: 16,
    marginTop: 4,
  },
});

export default FormField;
