import React from "react";
import { View, Text, StyleSheet, TextInput, } from "react-native";
import colors from "../utils/colors";

export default function Form() {
    return (
        <View style={styles.wrapperInput}>
            <View style={styles.containerFlexInput}>
                <TextInput style={styles.input} placeholder="Cantidad a pedir" keyboardType="numeric" />
                <TextInput style={[styles.input, styles.input2]} placeholder="interés" keyboardType="numeric" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperInput: {
        position: "absolute",
        bottom: -90,
        width: "85%",
        height: 180,
        backgroundColor: colors.SECONDARY_COLOR,
        justifyContent: "center",
        borderRadius: 30,
    },
    containerFlexInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 40,
    },
    input: {
        backgroundColor: "#fff",
        height: 50,
        width: '60%',
        borderRadius: 10,
    },
    input2: {
        width: '35%',
    },
});