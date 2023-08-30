import { View,Text,StyleSheet} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useWeatherData } from "../hooks/weatherData";

export function Location(){
    const {weatherData} = useWeatherData()
    return(
        <View style={styles.container}>
        <EvilIcons name="location" size={24} color="#F5C311" />
        <Text style={styles.city}>{weatherData?.name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        marginTop:20

    },
    city:{
        color:'#fff',fontSize: 16 ,marginLeft :8
    }
})