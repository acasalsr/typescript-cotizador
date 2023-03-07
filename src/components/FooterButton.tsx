import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

export default function Footerbutton(props: any) {
    const { calculate } = props
    return (
        <>
            <View style={footerStyles.mainFooter}>
                <TouchableOpacity style={footerStyles.button} onPress={calculate}>
                    <Text style={footerStyles.fontFooter}>Calcular</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const footerStyles = StyleSheet.create({
    mainFooter: {
        flex: .8,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',

    },
    fontFooter: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        backgroundColor: colors.SECONDARY_COLOR,
        minWidth: 250,
        height: 50,
        padding: 16,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});