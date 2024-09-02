import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetalhesPersonagem({ route, navigation }) {
    const { character } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>{character.name}</Text>
                <View style={styles.infos}>
                    <Text style={styles.text}>Altura: {character.height} cm</Text>
                    <Text style={styles.text}>Peso: {character.mass} kg</Text>
                    <Text style={styles.text}>Cor do Cabelo: {character.hair_color}</Text>
                    <Text style={styles.text}>Cor da Pele: {character.skin_color}</Text>
                    <Text style={styles.text}>Cor dos Olhos: {character.eye_color}</Text>
                    <Text style={styles.text}>Gênero: {character.gender}</Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Naves', { character })}>
                        <Text style={styles.buttonText}>Naves</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Filmes', { character })}>
                        <Text style={styles.buttonText}>Filmes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFF8E8'
    },
    box: {
        borderWidth: 2,
        borderColor: '#000',
        padding: 15,
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 100,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
        textAlign: 'center',
    },
    infos: {
        padding: 3,
        margin: 10,
         width: '100%',
    },
    text: {
        fontSize: 20,
        margin: 5,
    },
    buttonsContainer: {
        marginTop: 15,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    buttons: {
        backgroundColor: '#48CFCB',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        padding: 15,
        shadowOffset: { // adicionando sombras
            width: 4,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        elevation: 5
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#F5F5F5'
    }

})
