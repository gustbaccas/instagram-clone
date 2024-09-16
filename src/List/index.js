import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function List(props) {
    return (
        <View>
            <View style={styles.viewPerfil}>
                <Image
                    source={{ uri: props.data.imgperfil }}
                    style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
            </View>

            <Image
            source={{ uri: props.data.imgPublicacao}}
            style={styles.fotoPublicacao}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nomeUsuario: {
        paddingLeft: 5,
        fontSize: 22,
        color: '#000'
    },
    fotoPublicacao: {
        width: '100%',
        height: 350
    }
})
