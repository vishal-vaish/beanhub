import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
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
    <View style={[
      styles.container,
       props.containerStyle,
       isFocused ? styles.inputContainerFocused : styles.inputContainerUnfocused,
          isFocused && styles.shadow,
       ]}>
      {props.type === "number" && <Text style={styles.prefix}>+91</Text>}
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
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 2,
    borderRadius: 24,
    height: 64,
    backgroundColor: Colors.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  prefix: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    marginHorizontal: 10
  },
  textInput: {
    fontSize: 20,
    width: "85%",
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
});

export default FormField;
