import { StyleSheet, Text, View, Image } from 'react-native';

export default function Service() {
    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Nos services</Text>
            <Image style={styles.image} source={require('../../assets/click-and-collect.png')} />
            <Text style={styles.subtitre}>Click & Collect:</Text>
            <Text style={styles.text}>
                Click & Collect
                1 - Commandez et Payez en ligne :
                Option "Retrait en Boutique"
                2 - Retirez le bouquet en magasin.</Text>
            <Image style={styles.image} source={require('../../assets/livraison-a-domicile.jpg')} />
            <Text style={styles.subtitre}>Livraison à domicile ou autre lieu:</Text>
            <Text style={styles.text}>
                Click & Collect
                1 - Commandez et Payez en ligne :
                Option "Retrait en Boutique"
                2 - Retirez le bouquet en magasin.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 10,

    },
    titre: {
        paddingLeft: 20,
        color: '#D60C67',
        fontSize: 30,
        fontWeight: "bold"
    },
    subtitre: {
        color: '#D60C67',
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        fontSize: 15,
        padding: 10,
    },
    image: {
        height: 200,
        width: 400,
        paddingRight: 20,
    },
});
