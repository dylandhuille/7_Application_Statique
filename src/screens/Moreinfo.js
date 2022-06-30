import { StyleSheet, View, Text, Alert } from 'react-native';
//Ici nous importons les components Card, Title et Paragraph de react-native-paper
import { Card, Button } from 'react-native-paper';

//import JSON
import data from '../data/data.json'

export default function Moreinfo(index) {

    const AlertSm = () =>
        Alert.alert(
            "Ajouter au panier",
            data[index.route.params.itemId.index].name + " " + data[index.route.params.itemId.index].sm + "€",
            [
                {
                    text: "Non",
                    onPress: () => console.log("Non Pressed"),
                    style: "cancel"
                },
                { text: "Oui", onPress: () => console.log("Oui Pressed") }
            ]
        );
    const AlertMoy = () =>
        Alert.alert(
            "Ajouter au panier",
            data[index.route.params.itemId.index].name + " " + data[index.route.params.itemId.index].moy + "€",
            [
                {
                    text: "Non",
                    onPress: () => console.log("Non Pressed"),
                    style: "cancel"
                },
                { text: "Oui", onPress: () => console.log("Oui Pressed") }
            ]
        );
    const AlertXl = () =>
        Alert.alert(
            "Ajouter au panier",
            data[index.route.params.itemId.index].name + " " + data[index.route.params.itemId.index].xl + "€",
            [
                {
                    text: "Non",
                    onPress: () => console.log("Non Pressed"),
                    style: "cancel"
                },
                { text: "Oui", onPress: () => console.log("Oui Pressed") }
            ]
        );


    return (
        <View style={styles.container}>
            <Text style={styles.titre}>{data[index.route.params.itemId.index].name}</Text>
            <Card.Cover
                source={{ uri: data[index.route.params.itemId.index].img }}
                style={styles.image}
            />
            <Text style={styles.text}>{data[index.route.params.itemId.index].desc}</Text>

            <View style={styles.buttoncontainer} >
                <Button
                    mode="contained"
                    color='#D60C67'
                    onPress={AlertSm} >
                    {data[index.route.params.itemId.index].sm}
                </Button>
                <Button
                    mode="contained"
                    color='#D60C67'
                    onPress={AlertMoy}>
                    {data[index.route.params.itemId.index].moy}
                </Button>
                <Button
                    mode="contained"
                    color='#D60C67'
                    onPress={AlertXl}>
                    {data[index.route.params.itemId.index].xl}
                </Button>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',


    },
    button: {
        flex: 1,
        mode: "contained",
        alignContent: 'space-between',
        alignItems: 'center',
    },
    buttoncontainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    titre: {
        paddingLeft: 20,
        color: '#D60C67',
        fontSize: 30,
        fontWeight: "bold"
    },
    text: {
        padding: 10,
        fontSize: 20,
    },
    image: {
        width: 400,
        height: 300,
        paddingLeft: 10,
    },
});

