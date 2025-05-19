import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from "react-native";

type Props = {
    greeting: string;
    subtext: string; 
}

export default function Header({ greeting, subtext}: Props) {

    const [loaded] = useFonts({
        PoppinSemiBold: require('../../assets/fonts/Poppins-semiBold.ttf'),
        PoppinReg: require('../../assets/fonts/Poppins.otf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.headerContainer}>
            <View>
                <Text style={styles.headerText}>{greeting}</Text>
                <Text style={styles.headerSubtext}>{subtext}</Text>
            </View>
            <View>
                <Text style={styles.headerIcon}>👋</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '180'
    },
    headerText: {
        fontFamily: 'PoppinSemiBold',
        fontSize: 24,
        color: '#02929A',
        fontWeight: '600',
        paddingBottom: 15,
    },
    headerSubtext: {
        fontFamily: 'PoppinReg',
        fontSize: 16,
        fontWeight: '600',
        color: '#2E2F33',
    },
    headerIcon: {
        fontSize: 50
    },
})