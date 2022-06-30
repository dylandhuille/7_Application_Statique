import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

export default function Contact() {

    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Contact</Text>
            <ScrollView>
                <TextInput style={styles.input} placeholder="Nom" />
                <TextInput style={styles.input} placeholder="Prénom" />
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Téléphone" keyboardType="numeric" />
                <TextInput style={styles.input} placeholder="Vous êtes" />
                <TextInput style={styles.input} placeholder="Sujet" />
                <TextInput style={styles.inputmessage} placeholder="Message" />
                <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
                    Envoyer
                </Button>
            </ScrollView>
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
    input: {
        height: 45,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    inputmessage: {
        height: 120,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: '#D60C67',
    }
});