import {TouchableOpacity, View, Text} from "react-native";
import {AntDesign, MaterialIcons, Ionicons} from "@expo/vector-icons";
import {COLOR} from "@/utils/constant";

type Props = {
  state: any,
  descriptors: any,
  navigation: any;
}

const TabBar = (props: Props) => {

  const icons: Record<string, (props: any) => JSX.Element> = {
    home: (props) => <AntDesign name="home" size={26} color={COLOR.iconColor} {...props} />,
    profile: (props) => <MaterialIcons name="favorite-border" size={26} color={COLOR.iconColor} {...props} />,
    cafe: (props) => <Ionicons name="cafe-sharp" size={26} color={COLOR.iconColor} {...props} />,
  };

  return (
    <View
      className="absolute flex-row justify-between py-4 mx-5 rounded-full bottom-5 bg-primary"
      style={{
        borderCurve: "continuous",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 10,
        shadowOpacity: 0.1
      }}
    >
      {props.state.routes.map((route:any, index:any) => {
        const {options} = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="items-center justify-center flex-1 gap-1"
          >
            {
              icons[route.name]({
                color: isFocused ? COLOR.iconColor : COLOR.whiteColor,
              })
            }
            <Text
              style={{color: isFocused ? COLOR.iconColor : COLOR.whiteColor}}
              className="text-base"
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default TabBar;