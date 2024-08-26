import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { onBoardingData } from '@/utils/constant'
import Button from '@/components/Button'
import { StatusBar } from 'expo-status-bar'
import Colors from '@/utils/Colors'
import icons from '@/utils/icons'

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Dot = ({ active, onPress }: { active: boolean, onPress: () => void; }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.dot, active ? styles.activeDot : styles.inactiveDot]} />
    </TouchableOpacity>
  );

  const handleNext = () => {
    if(currentIndex === 2) {
      router.push("/(auth)/sign-in");
      return;
    }
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.skipContainer}>
        <Link
          style={styles.skipText}
          href={"/sign-in"}
        >
          Skip
        </Link>
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={onBoardingData[currentIndex].icon}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>
          {onBoardingData[currentIndex].title}
        </Text>
        <Text style={styles.description}>
          {onBoardingData[currentIndex].description}
        </Text>
      </View>
      <View style={styles.paginationContainer}>
        <View style={styles.dotContainer}>
          {onBoardingData.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onPress={() => setCurrentIndex(index)}
            />
          ))}
        </View>
        <Button
          buttonText={currentIndex === 2 ? "Login/Register" : "Next"}
          handlePress={handleNext}
          containerStyles={styles.buttonContainer}
          icon={icons.arrowRight}
        />
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
  },
  skipContainer: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
  skipText: {
    fontSize: 24,
    color: Colors.black,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 70
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    textAlign:"center"
  },
  description: {
    marginTop: 8,
    paddingHorizontal: 24,
    fontSize: 18,
    textAlign: 'center',
    color: Colors.gray,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 16,
  },
  inactiveDot: {
    backgroundColor: Colors.secondary,
    width: 8,
  },
  buttonContainer: {
    paddingHorizontal: 40,
  },
});

export default Page