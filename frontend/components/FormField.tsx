import {View, Text, ViewStyle, TextInput, TouchableOpacity, Image} from "react-native";
import {useState} from "react";
import React from "react";

type Props = {
  type: string;
  inputValue: string;
  containerStyle?: string;
  inputPlaceholder: string;
  handleChangeText: (e: any) => void;
  icon?: React.ReactElement;
}

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
    <View className={`space-y-2 mt-7 ${props.containerStyle}`}>
      <View
        className={`w-full h-16 px-4 rounded-2xl border-2 flex flex-row items-center ${isFocused ? "border-primary" : "border-slate-400"}`}
        style={{
          backgroundColor: "#ffffff",
          shadowColor: "#000",
          shadowOffset: {width: -10, height: 10},
          shadowOpacity: isFocused ? 0.7 : 0,
          shadowRadius: isFocused ? 50 : 0,
          elevation: isFocused ? 15 : 0,
        }}
      >
        {props.type === "number" && (
          <Text className="mr-3 font-psemibold font-bold text-lg">+91</Text>
        )}
        {props.icon && (
          <Text className="mr-5">{props.icon}</Text>
        )}
        <TextInput
          className="flex-1 font-psemibold text-base mt-1"
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

export default FormField;