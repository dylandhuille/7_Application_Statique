import { View, StyleSheet } from 'react-native';
import React from 'react';
//Ici nous importons les components Card, Title et Paragraph de react-native-paper;
import { Card, Title, Paragraph, Button } from 'react-native-paper';


//Nous importons la fonction useNavigation qui est un HOOK permettant d'accèder à tout les props contenu dans la navigation.
import { useNavigation } from '@react-navigation/native'

//import JSON
import data from '../data/data.json'

export default function CardItem() {
    //Nous stockons les props de la navigation (Hooks) dans une variable nommé navigation
    const navigation = useNavigation();
    return (

        data.map(function (item, index) {
            return (
                <Card key={index} elevation={10} style={styles.card}>
                    <Card style={styles.card}>
                        <Card.Content>
                            <Title>{item.name}</Title>
                            <Card.Cover
                                source={{ uri: item.img }}
                                style={styles.image}
                            />
                            <Paragraph>{item.desc}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => navigation.navigate('Moreinfo', {
                                itemId: { index }
                            })}>
                                en savoir plus
                            </Button>
                        </Card.Actions>
                    </Card>

                </Card >
            )
        }
        ))






    {/* return (
      <View style={styles.container}>
        <Card style={styles.card}>
                <Card.Content>
                    <Title>{name}</Title>
                    <Card.Cover
                        source={{ uri: img }}
                        style={styles.image}
                    />
                    <Paragraph>{desc}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={() => navigation.navigate('Moreinfo')}>
                        en savoir plus
                    </Button>
                </Card.Actions>
            </Card> 

        </View >*/}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    image: {
        width: 400,
        height: 300,
        paddingRight: 20,
    },
    text: {
        fontSize: 20,
        padding: 10,
    }
});