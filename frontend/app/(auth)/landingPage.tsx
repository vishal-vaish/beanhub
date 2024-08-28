import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import images from '@/utils/images'
import { router } from 'expo-router'
import {StatusBar} from "expo-status-bar";
import Button from '@/components/Button';
import { FontFamily } from '@/utils/FontFamily';

const Page = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={images.logo}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.title}>Kolkata #1 Cafe Spots</Text>
            <Text style={styles.subtitle}>Enjoy all your favorite dishes in </Text>
            <Text style={styles.subtitle}>one cozy cafe.</Text>
          </View>
        </View>
        <Button
          buttonText="Get Started"
          handlePress={() => router.push("/(auth)/onboarding")}
          // handlePress={() => router.push("/(auth)/profilePage")}
          containerStyles={{width:"90%", marginVertical:50}}
        />
      </View>
      <StatusBar style="light" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    marginVertical: 'auto',
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: FontFamily.semiBold,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default Page