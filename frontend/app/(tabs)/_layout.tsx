import {Tabs} from "expo-router";
import {View, Text, Image} from "react-native";
import icons from "../../constants/icons";

type tabIconProps = {
  icon:any;
  color:string;
  name:string;
  focused:boolean;
}

const TabIcon = (props:tabIconProps) => {
  return (
     <View className="flex items-center justify-center gap-2">
       <Image
          source={props.icon}
          resizeMode="contain"
          tintColor={props.color}
          className="w-6 h-6"
       />
       <Text
         className={`${props.focused ? "font-psemibold" : "font-pregular"} text-xs`}
          style={{ color: props.color }}
       >
         {props.name}
       </Text>
     </View>
  );
};

const TabLayout = () => {
    return (
       <>
         <Tabs
            screenOptions={{
              tabBarActiveTintColor: "#5D4037",
              tabBarInactiveTintColor: "#CACACA",
              tabBarShowLabel: false,
              tabBarStyle: {
                backgroundColor: "#FFFFFF",
                height: 80,
              },
            }}
         >
           <Tabs.Screen
              name="home"
              options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                   <TabIcon
                      icon={icons.home}
                      color={color}
                      name="Home"
                      focused={focused}
                   />
                ),
              }}
           />
           <Tabs.Screen
              name="cafe"
              options={{
                title: "Cafe",
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                   <TabIcon
                      icon={icons.cafe}
                      color={color}
                      name="Cafe"
                      focused={focused}
                   />
                ),
              }}
           />
           <Tabs.Screen
              name="profile"
              options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                   <TabIcon
                      icon={icons.profile}
                      color={color}
                      name="Profile"
                      focused={focused}
                   />
                ),
              }}
           />
         </Tabs>
       </>
    )
}

export default TabLayout;