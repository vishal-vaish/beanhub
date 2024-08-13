import {View, Text, ViewStyle, TextInput, TouchableOpacity} from "react-native";
import {useState} from "react";
import {bgWhite} from "colorette";

type Props = {
  title: string;
  inputValue: string;
  containerStyle?: string;
  inputPlaceholder: string;
  handleChangeText: (e: any) => void;
}

const FormField = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`space-y-2 mt-7 ${props.containerStyle}`}>
      <View
        className={`w-full h-16 px-4 rounded-2xl border-2 flex flex-row items-center ${isFocused ? "border-primary" : "border-slate-400"}`}
        style={{
          backgroundColor: "#ffffff",
          shadowColor: "#000",
          shadowOffset: { width: -10, height: 10 },
          shadowOpacity: isFocused ? 0.7 : 0,
          shadowRadius: isFocused ? 50 : 0,
          elevation: isFocused ? 15 : 0,
        }}
      >
        {props.title === "phoneNumber" && (
          <Text className="mr-3 font-psemibold font-bold text-lg">+91</Text>
        )}
        <TextInput
          className="flex-1 font-psemibold text-base mt-1"
          value={props.inputValue}
          placeholder={props.inputPlaceholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={props.handleChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

export default FormField;