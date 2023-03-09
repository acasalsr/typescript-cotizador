import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default function Resultado(props: any) {
  const { capital, interest, months, total, errorMessage } = props;
  console.log(props);
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <Text>{capital}</Text>
          <Text>interest: {interest}</Text>
          <Text>meses: {months}</Text>
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    fontWeight: "bold",
    fontSize: 20,
  },
});
