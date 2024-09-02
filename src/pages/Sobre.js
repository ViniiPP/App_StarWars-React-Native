// src/pages/Sobre.js
import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Sobre() {
    return (
        <View style={styles.container}>
            <View style={styles.alunoBox}>
            <Text style={styles.title}>Sobre os Desenvolvedores</Text>
                <View style={styles.aluno01}>
                    <Text style={styles.infoTitle}>Vinícius Pereira Polli</Text>
                    <Text style={styles.info}>RA: 1136503</Text>
                    <Text style={styles.info}>E-mail: 1136503@atitus.edu.br</Text>
                </View>

                <View style={styles.aluno02}>
                    <Text style={styles.infoTitle}>Henrique Zanfir</Text>
                    <Text style={styles.info}>RA: 1135519</Text>
                    <Text style={styles.info}>E-mail: 1135519@atitus.edu.br</Text>
                </View>

                <View style={styles.aluno03}>
                    <Text style={styles.infoTitle}>Eduardo Vanin</Text>
                    <Text style={styles.info}>RA: 1134891</Text>
                    <Text style={styles.info}>E-mail: 1134891@atitus.edu.br</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: '#FFF8E8'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    info: {
        fontSize: 18,
        marginBottom: 10,
        margin: 10,
        width: '100%',
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        marginBottom: 15
    },
    aluno01: {
        borderWidth: 2,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        width: 330,
        padding: 15,
    },
    aluno02: {
        borderWidth: 2,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        width: 330,
        padding: 15
    },
    aluno03: {
        borderWidth: 2,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        width: 330,
        padding: 15
    }
});
