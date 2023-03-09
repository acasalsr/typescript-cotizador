import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default function Resultado(props: any) {
  const { capital, interest, months, total, errorMessage } = props;
  return (
    <View style={styles.content}>
      {total && <Text>Result</Text>}
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
  error: {
    textAlign: "center",
    color: "#f00",
    fontWeight: "bold",
    fontSize: 20,
  },
});
