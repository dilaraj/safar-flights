import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

type Props = {
    image: ImageSourcePropType;
    city: string;
    country: string;
    rating: number;
}

export default function DestinationCard() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3iceZdrJZJhEc5hf40Zw2NPCwlSUScWLOQ&s'
                    }}
                />
                <View style={styles.ratingContainer}>
                    <Text>⭐ 4.8</Text>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.cityText}>Dubai</Text>
                <Text style={styles.countryText}>United Arab Emirates</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        width: 200,
        height: 323,
        borderRadius: 18,
        padding: 10,
        gap: 15,
    },
    imageContainer: {
        width: 180,
        height: 220,
        display: 'flex',
        alignItems: 'flex-end',
    },
    ratingContainer: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderBottomLeftRadius: 10,
        fontFamily: 'JakartaMed',
        fontSize: 14,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 18,
    },
    textContainer: {
        paddingLeft: 10,
    },
    cityText: {
        fontFamily: 'JakartaMed',
        fontSize: 18,
        color: '#2D3434',
        paddingBottom: 10,
    },
    countryText: {
        fontFamily: 'JakartaLight',
        fontSize: 14,
        color: '#4D4D55',
    },
})