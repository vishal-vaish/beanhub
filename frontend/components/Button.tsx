import Colors from "@/utils/Colors";
import { FontFamily } from "@/utils/FontFamily";
import {
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";

type Props = {
  buttonText: string;
  handlePress: () => void;
  isLoading?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<ViewStyle>;
  icon?: number;
  disabled?: boolean;
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={0.7}
      style={[
        styles.buttonContainer,
        props.containerStyles,
        props.isLoading && styles.loading,
        props.disabled && styles.disabledButton,
        {
          shadowColor: props.disabled ? "transparent" : "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: props.disabled ? 0 : 0.3,
          shadowRadius: props.disabled ? 0 : 7,
          elevation: props.disabled ? 0 : 5,
        }
      ]}
      disabled={props.isLoading || props.disabled}
    >
      <Text style={[styles.buttonText, props.textStyles]}>
        {props.buttonText}
      </Text>

      {props.icon && (
        <Image
          source={props.icon}
          style={styles.icon}
        />
      )}

      {props.isLoading && (
        <ActivityIndicator
          animating={props.isLoading}
          color="#fff"
          size="small"
          style={styles.loadingIndicator}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    minHeight: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    opacity: 0.5,
  },
  disabledButton: {
    backgroundColor: Colors.secondary,
  },
  buttonText: {
    color: "white",
    fontFamily: FontFamily.semiBold,
    fontSize: 18,
  },
  icon: {
    marginLeft: 20,
    width: 25,
    height: 25,
  },
  loadingIndicator: {
    marginLeft: 8,
  },
});

export default Button;
