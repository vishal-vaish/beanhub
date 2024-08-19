import {Text, View, Image} from "react-native";
import images from "../constants/images";
import {StatusBar} from "expo-status-bar";
import {Redirect, router} from "expo-router";
import {useEffect, useState} from "react";
import {useAuth} from "@/context/AuthProvider";

export default function Index() {
  const {accessToken} = useAuth();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  
return (
  <Redirect href={!accessToken ? "/(auth)/landingPage" : "/(tabs)/home"} />
)
}
