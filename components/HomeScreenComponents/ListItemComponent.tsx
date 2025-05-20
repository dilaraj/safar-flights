import { ImageSourcePropType, StyleSheet, Text, View, Image } from "react-native";

type Props = {
    image: ImageSourcePropType;
    city: string;
    country: string;
    rating: number;
}

export default function ListItem() {
    return (
        <View style={styles.listItemContainer}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3iceZdrJZJhEc5hf40Zw2NPCwlSUScWLOQ&s'
                    }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.cityText}>Dubai</Text>
                <Text style={styles.countryText}>United Arab Emirates</Text>
            </View>
            <View>
                <Text style={styles.ratingContainer}>⭐ 4.8</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        backgroundColor: '#FFFFFF',
        width: 327,
        height: 90,
        borderRadius: 18,
        padding: 8,
        flex: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    }, 
    imageContainer: {
        width: 70,
        height: 70,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 18,
    }, 
    textContainer: {
        borderWidth: 1,
        width: '55%',
    },
    countryText: {
        fontFamily: 'JakartaLight',
        fontSize: 14,
        color: '#4D4D55',
    },
    cityText: {
        fontFamily: 'JakartaMed',
        fontSize: 18,
        color: '#2D3434',
        paddingBottom: 10,
    }, 
    ratingContainer: {
        fontFamily: 'JakartaMed',
        fontSize: 14,
    }
})