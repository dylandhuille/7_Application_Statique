import { StyleSheet, View, Text } from 'react-native';
//Ici nous importons les components Card, Title et Paragraph de react-native-paper
import { Card, Button } from 'react-native-paper';

//import JSON
import data from '../data/data.json'

export default function Moreinfo(index) {
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
                    color='#D60C67' >
                    {data[index.route.params.itemId.index].sm}
                </Button>
                <Button
                    mode="contained"
                    color='#D60C67'>
                    {data[index.route.params.itemId.index].moy}
                </Button>
                <Button
                    mode="contained"
                    color='#D60C67'>
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
        color: '#D60C67',
        fontSize: 30,
        fontWeight: "bold"
    },
    text: {
        padding: 10,

    }

});
