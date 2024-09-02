// src/pages/Naves.js
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Naves({ route }) {
    const { character } = route.params;
    const [naves, setNaves] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNaves() {
            try {
                // Verifica se o personagem possui naves
                if (character.starships.length === 0) {
                    setLoading(false);
                    return;
                }

                // Busca as naves
                const navesPromises = character.starships.map(uri => axios.get(uri));
                const responses = await Promise.all(navesPromises);
                setNaves(responses.map(response => response.data));
            } catch (error) {
                console.error("Erro ao buscar naves:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchNaves();
    }, [character]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                {naves.length > 0 ? (
                    <FlatList style={styles.list}
                        data={naves}
                        keyExtractor={(item) => item.url}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Text style={styles.title}>{item.name}</Text>
                            </View>
                        )}
                    />
                ) : (
                    <Text style={styles.message}>Este personagem não possui naves registradas.</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#FFF8E8'
    },
    box: {
        borderWidth: 2,
        borderColor: '#000',
        height: '100%',
        width: '100%',
        padding: 1,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
    },
    card: {
        backgroundColor: '#48CFCB',
        borderWidth: 1,
        borderRadius: 10,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
        marginRight: 20,
        marginLeft: 20,
        shadowOffset: { // adicionando sombras
            width: 4,
            height: 4
          },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        elevation: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F5F5F5'
    },
    list: {
        padding: 10,
    },
    message: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666',
        textAlign: 'center',
        marginTop: '80%',
        padding: 20,
    }
});
