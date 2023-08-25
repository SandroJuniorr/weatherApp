// import {  } from "@gluestack-ui/react";
import { Image, StyleSheet, Text, View } from "react-native";

export function CardWeather() {
    return (
        <View style={styles.container}>
            <View style={styles.card} >
                <View style={styles.header}>
                    <Text style={styles.headerText}>Hoje</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.containerTemperature}>
                        <View style={styles.containerTemperatureCurrent}>
                            <Text style={styles.contentTemperature}>30</Text>
                            <Text style={styles.contentTemperatureType}>°c</Text>
                        </View>
                        <View style={styles.containerTemperatureCurrent}>
                            <Text style={styles.contentTemperatureMinAndMax}>30°c / 28°c</Text>
                        </View>


                    </View>

                    <Image style={styles.img} resizeMode="contain" source={require('../../assets/images/fewcloudsnight.png')} />

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

    },
    card: {
        marginTop: 15,
        alignItems: 'center',

        height: 190,
        width: "100%",
        padding: 16,

        borderRadius: 20,
        backgroundColor: 'rgba(101, 102, 201, 0.626)',
    },
    header: {
        width: '100%',
        justifyContent: "space-between",
        flexDirection: 'column',
    },
    headerText: {
        fontSize: 16,
        fontWeight: "700",
        color: "white"
    },
    content: {
        width: '100%',
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: 'row',

        marginLeft: 16,
        marginRight: 16,

    },
    containerTemperature: {
        flexDirection: 'column',
    },
    containerTemperatureCurrent: {
        flexDirection: 'row',
    },
    contentTemperatureMinAndMax:{
        color: "white",
        fontSize: 20,
        fontWeight: "500"
    },
    contentTemperature: {
        color: "white",
        fontSize: 60,
        fontWeight: "700"
    },
    contentTemperatureType: {
        color: '#F5C311',
        fontSize: 30,
        fontWeight: "700"
    },
    img: {
        width: 130,
        height: 130,
    }
})