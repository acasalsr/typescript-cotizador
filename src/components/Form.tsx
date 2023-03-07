import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import colors from "../utils/colors";
import { Picker } from "@react-native-picker/picker";

export default function Form(props: any) {
    const { setCapital, setInterest, setMonths } = props;
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <>
            <View style={styles.wrapperInput}>
                <View style={styles.containerFlexInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Cantidad a pedir"
                        keyboardType="numeric"
                        onChange={(e) => setCapital(e.nativeEvent.text)}
                    />
                    <TextInput
                        style={[styles.input, styles.input2]}
                        placeholder="interés"
                        keyboardType="numeric"
                        onChange={(e) => setInterest(e.nativeEvent.text)}
                    />
                </View>
                <Picker
                    style={[pickerSelectedStyle.inputAndroid, pickerSelectedStyle.inputIOS]}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue) => setMonths(itemValue)}
                >
                    <Picker.Item style={styles.pickerItem} label="3 meses" value="3" />
                    <Picker.Item style={styles.pickerItem} label="6 meses" value="6" />
                    <Picker.Item style={styles.pickerItem} label="9 meses" value="9" />
                    <Picker.Item style={styles.pickerItem} label="12 meses" value="12" />
                </Picker>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    wrapperInput: {
        position: "absolute",
        bottom: 0,
        flexDirection: "column",
        gap: 10,
        width: "85%",
        height: 180,
        backgroundColor: colors.SECONDARY_COLOR,
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 30,
        paddingHorizontal: 40,
    },
    containerFlexInput: {
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

    pickerItem: {
        width: "100%",
        backgroundColor: "red",
        borderRadius: 10,
        height: 50,
        marginTop: 10,
    }

});

const pickerSelectedStyle = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderwidth: 1,
        borderColor: "grey",
        borderRadius: 10,
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
        borderRadius: 10,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff",
    },
})
