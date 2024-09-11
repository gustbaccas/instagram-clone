import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image
                source={require('../img/Icon5.jpeg')}
                style={styles.logo}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                source={require('../img/Icon1.jpeg')}
                style={styles.send}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 27,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 2
    },
    send: {
        height: 23,
        width: 23
    }
})