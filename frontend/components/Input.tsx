import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useState } from "react";
import React from "react";
import Colors from "@/utils/Colors";
import images from "@/utils/images";

type Props = {
  type?: string;
  inputValue: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputPlaceholder: string;
  handleChangeText: (e: any) => void;
  label?: string;
};

const Input = (props: Props) => {
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
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <View style={styles.buttonContainer}>
        {props.type === "number" && (
          <View style={styles.imageContainer}>
            <Image source={images.flag} style={styles.icon} />
            <Text style={styles.prefix}>+91</Text>
          </View>
        )}
        <View
          style={[
            styles.inputField,
            isFocused
              ? styles.inputContainerFocused
              : styles.inputContainerUnfocused,
            isFocused && styles.shadow,
          ]}
        >
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginTop: 20,
    flexShrink: 1,
    flexGrow: 0
  },
  buttonContainer: {
    width: "100%",
    height: 64,
    backgroundColor: Colors.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputField: {
    borderWidth: 2,
    borderRadius: 15,
    width: "100%",
    height: 64,
    backgroundColor: Colors.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 10,
    paddingLeft: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  label: {
    color: Colors.gray,
    fontSize:18,
    paddingLeft:5
  },
  prefix: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    marginHorizontal: 10,
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
    shadowColor: "#000",
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 50,
    elevation: 15,
  },
  icon: {
    width: 30,
    height: 25,
  },
});

export default Input;
