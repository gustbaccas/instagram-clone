import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function List(props) {

    function carregaIcone(likeada){
        return likeada ? require('../img/Icon6.jpeg') :
        require('../img/Icon2.jpeg')
    }

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
            resizeMode="cover"
            source={{ uri: props.data.imgPublicacao}}
            style={styles.fotoPublicacao}
            />

            <View style={styles.Icons}>
                <TouchableOpacity>
                    <Image
                    source={carregaIcone(props.data.likeada)}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image
                    source={require('../img/Icon3.jpeg')}
                    style={styles.iconeComent}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../img/Icon1.jpeg')}
                    style={styles.iconeSend}
                    />
                </TouchableOpacity>
            </View>


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
        height: 350,
        alignItems: 'center'
    },
    Icons: {
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 15
    },
    iconeLike: {
        width: 26,
        height: 26,
        marginRight: 15
    },
    iconeComent: {
        height: 26,
        width: 26,
        marginRight: 15
    },
    iconeSend: {
        width: 26,
        height: 26,
    }
})
