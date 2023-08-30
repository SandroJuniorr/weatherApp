import { StyleSheet, View, Text } from "react-native";
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useWeatherData } from "../hooks/weatherData";

export function WeatherInfo() {
    const {weatherData} = useWeatherData()
    return (
        <View style={styles.container} >
            <View style={styles.section} >
                <FontAwesome name="thermometer-full" size={24} color="#F5C311" style={{margin:5}} />
                <Text style={styles.title} >Sensação Termica</Text>
                <Text style={styles.temperature}>{parseInt(weatherData?.main?.feels_like)}°c</Text>
            </View>
            <View style={styles.section} >
                <Feather name="wind" size={24} color="#F5C311" />
                <Text style={styles.title}>Velocidade do vento</Text>
                <Text style={styles.temperature}>{parseInt(weatherData?.wind?.speed) } km/h</Text>
            </View>
            <View style={styles.section} >
                <Entypo name="drop" size={24} color="#F5C311" />
                <Text style={styles.title}>Umidade do ar</Text>
                <Text style={styles.temperature}>{weatherData?.main?.humidity}%</Text>
            </View>
            <View style={styles.section} >
                  <AntDesign name="cloud" size={24} color="#F5C311" />
                <Text style={styles.title}>Nebulosidade</Text>
                <Text style={styles.temperature}>{weatherData?.clouds?.all}%</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: 'rgba(101, 102, 201, 0.626)',

        marginTop: 15,
        padding: 16,
        width: "100%",


    },
    section: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: "white",

        padding: 8,
        marginBottom: 10
    },
    title: {
        color: "white",
        fontSize: 18,
        marginLeft: 8,
    },
    temperature: {
        color: "white",
        fontSize: 18,
        marginLeft: "auto"
    }
})