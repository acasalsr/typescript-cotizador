import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import colors from "../utils/colors";
import { Picker } from "@react-native-picker/picker";

export default function Form() {
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <>
            <View style={styles.wrapperInput}>
                <View style={styles.containerFlexInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Cantidad a pedir"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={[styles.input, styles.input2]}
                        placeholder="interés"
                        keyboardType="numeric"
                    />
                </View>
                <Picker
                    style={pickerSelectedStyle.inputAndroid}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }
                >
                    <Picker.Item label="3 meses" value="3" />
                    <Picker.Item label="6 meses" value="6" />
                    <Picker.Item label="9 meses" value="9" />
                    <Picker.Item label="12 meses" value="12" />
                </Picker>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    wrapperInput: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        bottom: -90,
        width: "85%",
        height: 180,
        backgroundColor: colors.SECONDARY_COLOR,
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 30,
        paddingHorizontal: 40,
    },
    containerFlexInput: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        backgroundColor: "#fff",
        height: 50,
        width: "60%",
        borderRadius: 10,
    },
    input2: {
        width: "35%",
    },

    // picker: {
    //     width: "100%",
    //     backgroundColor: "#fff",
    //     borderRadius: 30,
    // }

});

const pickerSelectedStyle = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderwidth: 1,
        borderColor: "grey",
        borderRadius: 4,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff",
        zIndex: 10,
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderwidth: 1,
        borderColor: "grey",
        borderRadius: 4,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff",
    },
})
