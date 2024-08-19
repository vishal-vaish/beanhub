import {router, Tabs} from "expo-router";
import {View, Text, Image} from "react-native";
import icons from "../../utils/icons";
import {useEffect} from "react";
import {useAuth} from "@/context/AuthProvider";
import TabBar from "@/components/TabBar";

type tabIconProps = {
  icon:any;
  color:string;
  name:string;
  focused:boolean;
}

const TabIcon = (props:tabIconProps) => {
  const {accessToken} = useAuth();

  useEffect(() => {
    if(!accessToken) {
      router.replace("/sign-in");
    }
  }, [accessToken]);

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
           tabBar={props => <TabBar {...props}/>}
         >
           <Tabs.Screen
              name="home"
              options={{
                title: "Home",
                headerShown: false,
              }}
           />
           <Tabs.Screen
             name="cafe"
             options={{
               title: "Cafe",
               headerShown: false,
             }}
           />
           <Tabs.Screen
              name="profile"
              options={{
                title: "Profile",
                headerShown: false,
              }}
           />
         </Tabs>
       </>
    )
}

export default TabLayout;