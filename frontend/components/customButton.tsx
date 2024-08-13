import {ActivityIndicator, TouchableOpacity, Text, Image} from "react-native";

type Props = {
  buttonText: string;
  handlePress: () => void;
  isLoading?: boolean;
  containerStyles?: string;
  textStyles?: string;
  icon?: number;
  disabled?: boolean;
}

const Button = (props:Props) => {
  return (
     <TouchableOpacity
        onPress={props.handlePress}
        activeOpacity={0.7}
        className={`bg-primary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${props.containerStyles} ${
           props.isLoading && "opacity-50"
        } ${
          props.disabled && "bg-secondary"
        }`}
        disabled={props.isLoading || props.disabled}
        style={{
          shadowColor: props.disabled ? "transparent" : "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: props.disabled ? 0 : 0.3,
          shadowRadius: props.disabled ? 0 : 7,
          elevation: props.disabled ? 0 : 5,
        }}
     >
       <Text className={`text-white font-psemibold text-lg ${props.textStyles}`}>
         {props.buttonText}
       </Text>
       {props.icon && (
          <Image
             source={props.icon}
             className="ml-6 w-[25px] h-[25px]"
          />
       )}

       {props.isLoading && (
          <ActivityIndicator
             animating={props.isLoading}
             color="#fff"
             size="small"
             className="ml-2"
          />
       )}
     </TouchableOpacity>
  )
}

export default Button;