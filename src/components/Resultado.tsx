import { Text, StyleSheet, View } from "react-native";
import React from "react";

export default function Resultado(props: any) {
  const { capital, interest, months, total, errorMessage } = props;
  console.log(props);
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult title="Cantidad solicitada:" value={`${capital} €`} />
          <DataResult title="Interés %:" value={`${interest} %`} />
          <DataResult title="Plazos:" value={`${months} meses`} />
          <DataResult title="Pago Mensual:" value={`${total.monthlyFee} €`} />
          <DataResult title="Total a pagar:" value={`${total.totalPayable} €`} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult(props: any) {
  const { title, value } = props;
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 40,
  },
  boxResult: {
    padding: 50,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  value: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,

  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    fontWeight: "bold",
    fontSize: 20,
  },
});
