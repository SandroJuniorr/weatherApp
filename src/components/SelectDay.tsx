import { View, FlatList, StyleSheet, Image, Text } from "react-native";

export function WeatherDuringTheDayCard() {
    return (
        <FlatList style={styles.container} showsHorizontalScrollIndicator={false} horizontal data={[{}, {}, {}, {}, {}, {}]} renderItem={() => {
            return (
                <View style={styles.card}>
                    <Text style={styles.dateText} >Terça</Text>
                    {/* <Image style={styles.img} resizeMode="contain" source={require('../../assets/images/fewcloudsnight.png')} /> */}


                    <View style={styles.containerTemperature}>
                        <Text style={styles.contentTemperature}>22</Text>
                        <Text style={styles.contentTemperatureType}>°C</Text>
                    </View>

                </View>
            )
        }}>

        </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
        borderRadius: 20,
        backgroundColor: 'rgba(101, 102, 201, 0.626)',
        
        marginTop: 15,
        height: 150,
    },
    card: {
        
        marginRight: 10,
        height: 150,
        width: 100,
        padding: 16,

        alignItems:"center",
    },
    header: {
        width: '100%',
        alignItems: "flex-end",
        flexDirection: 'column',
    },
    content: {
        width: '100%',
        alignItems: "flex-start",

    },
    dateText: {
        fontSize: 16,
        fontWeight: "400",
        color: "white"
    },
    containerTemperature: {
        flexDirection: 'row',
    },
    contentTemperature: {
        color: "white",
        fontSize: 24,
        fontWeight: "700"
    },
    contentTemperatureType: {
        color: '#F5C311',
        fontSize: 15,
        fontWeight: "700"
    },
    img: {
        width: 70,
        height: 70,
        marginLeft: 10
    }
})