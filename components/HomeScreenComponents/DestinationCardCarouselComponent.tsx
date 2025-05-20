import { ScrollView, StyleSheet, View, Text } from "react-native";
import DestinationCard from "./DestinationCardComponent";

type Props = {
    heading: string;
}

export default function DestinationCardCarousel({ heading }: Props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.carouselText}>{heading}</Text>
            </View>
            <View style={{ height: 350}}>
                <ScrollView horizontal style={styles.carouselContainer}>
                    <View style={styles.carouselItem}>
                        <DestinationCard />
                    </View>
                    <View style={styles.carouselItem}>
                        <DestinationCard />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: 10,
    },
    carouselText: {
        fontFamily: 'JakartaMed',
        fontSize: 20,
        color: '#2D3434',
        paddingBottom: 7,
        
    },
    carouselContainer: {
        flex: 1,
    },
    carouselItem: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingRight: 20,

    }
})