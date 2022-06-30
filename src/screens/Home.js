import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Notre histoire</Text>
            <Image style={styles.image} source={require('../../assets/image_notre_histoire.png')} />
            <Text style={styles.text}>Jardin d’Ann’Iris Crée en 2009, à l'Isle sur la sorgue , fleuristes-et-fleurs innove en imaginant  l'envoi de fleurs en direct avec un artisan  fleuriste, ainsi nous proposons le meilleur  rapport Qualité/Prix. Notre objectif : "Répondre  à une demande légitime du consommateur  : Des fleurs de qualité au juste prix . Supprimer les intermédiaires, valoriser  l'artisanat et le savoir-faire, humaniser et  personnaliser les transactions, qui restent  sécurisées !</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titre: {
        paddingLeft: 20,
        color: '#D60C67',
        fontSize: 30,
        fontWeight: "bold"
    },
    image: {
        margin: 10
    },
    text: {
        fontSize: 20,
        padding: 10,
    }
});
