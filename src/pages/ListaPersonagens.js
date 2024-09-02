// src/pages/ListaPersonagens.js
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPersonagem from '../components/CardPersonagem';

export default function ListaPersonagens({ navigation }) {
    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        obterPersonagens();
    }, []);

    async function obterPersonagens() {
      try {
        setLoading(true);
        const personagensIds = [1, 4, 14, 20, 13];
        const requests = personagensIds.map(id => axios.get(`https://swapi.dev/api/people/${id}/`));
        const responses = await Promise.all(requests);
        setPersonagens(responses.map(response => response.data));
      } catch (error) {
        console.log('Erro ao obter personagens: ', error);
      } finally {
        setLoading(false);
      }
    }

    return (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={"large"} />
          ) : (
            <FlatList style={styles.list}
              data={personagens}
              keyExtractor={(item) => item.url} 
              renderItem={({ item }) => (
                <CardPersonagem
                  personagem={item}
                  irAteDetalhes={() =>
                    navigation.navigate("DetalhesPersonagem", {
                      character: item,
                    })
                  }
                />
              )}
            />
          )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: '#FFF8E8'
    },
    list: {
      width: "100%",
      marginTop: 30,
      
    }
})
