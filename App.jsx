import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Platform, SafeAreaView } from "react-native";
import { Location } from "./src/components/Location";
import { CardWeather } from "./src/components/CardWeather";
import { WeatherDuringTheDayCard } from "./src/components/SelectDay";
import { WeatherInfo } from "./src/components/weatherInfo";
import { requestForegroundPermissionsAsync,getCurrentPositionAsync,LocationObject } from "expo-location";
import { WeatherDataProvider } from "./src/hooks/weatherData";
export default function App() {
  
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Weather App</Text>
      </View>
      <WeatherDataProvider>
      <Location/>
      <CardWeather/>
      <WeatherInfo/>
      </WeatherDataProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#2b2c5f",
    padding:24,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  titleContainer: {
    justifyContent:"center",
    alignItems:"center",

    marginTop:25,
    
  },
  title:{
    color:"white",
    fontSize:16
  }

});
