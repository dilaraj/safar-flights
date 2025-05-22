import { ScrollView, StyleSheet, View, Text } from "react-native";
import DestinationCard from "./DestinationCardComponent";

type Props = {
    listHeading?: string;
}

export default function ListCarousel({ listHeading }: Props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.carouselText}>{listHeading}</Text>
            </View>
            <View style={{ flex: 1}}>
                <ScrollView style={styles.carouselContainer}>
                    <View style={styles.carouselItem}>
                        <DestinationCard listComponent={true} />
                    </View>
                    <View style={styles.carouselItem}>
                        <DestinationCard listComponent={true} />
                    </View>
                    <View style={styles.carouselItem}>
                        <DestinationCard listComponent={true} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: 10,
    }, 
    carouselText: {
        fontFamily: 'Jakarta',
        fontSize: 18,
        color: '#2D3434',
        paddingBottom: 5,
    },
    carouselContainer: {
        flex: 1,
    },
    carouselItem: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingBottom: 15,
    }
})