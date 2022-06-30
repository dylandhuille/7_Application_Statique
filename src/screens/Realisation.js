import { View, StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'

//Nous importons notre componsant personnel créer pour afficher une card
import CardItem from '../components/CardItem'

export default function Realisation() {
    return (

        <View style={styles.container}>
            <Text style={styles.titre}>Nos réalisations</Text>
            <View>
                <ScrollView>
                    <CardItem />
                </ScrollView>
            </View>

        </View >
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
});
