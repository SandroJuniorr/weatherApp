import { StyleSheet, View, Text } from "react-native";
import { Entypo, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

export function WeatherInfo() {
    return (
        <View style={styles.container} >
            <View style={styles.section} >
                <FontAwesome name="thermometer-full" size={24} color="#F5C311" style={{margin:5}} />
                <Text style={styles.title} >Sensação Termica</Text>
                <Text style={styles.temperature}>22°c</Text>
            </View>
            <View style={styles.section} >
                <Ionicons name="rainy" size={24} color="#f5c411" />
                <Text style={styles.title}>Probabilidade de chuva</Text>
                <Text style={styles.temperature}>22°c</Text>
            </View>
            <View style={styles.section} >
                <Feather name="wind" size={24} color="#F5C311" />
                <Text style={styles.title}>Velocidade do vento</Text>
                <Text style={styles.temperature}>22°c</Text>
            </View>
            <View style={styles.section} >
                <Entypo name="drop" size={24} color="#F5C311" />
                <Text style={styles.title}>Umidade do ar</Text>
                <Text style={styles.temperature}>22°c</Text>
            </View>
            <View style={styles.section} >
                <Feather name="sun" size={24} color="#F5C311" />
                <Text style={styles.title}>Índice UV</Text>
                <Text style={styles.temperature}>22°c</Text>
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