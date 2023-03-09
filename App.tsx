import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import colors from "./src/utils/colors";
import Form from "./src/components/Form";
import FooterButton from "./src/components/FooterButton";
import Resultado from "./src/components/Resultado";

export default function App() {
  const [capital, setCapital] = useState<number | null>(null);
  const [interest, setInterest] = useState<number | null>(null);
  const [months, setMonths] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  console.log(total);

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage("No hay capital");
    } else if (!interest) {
      setErrorMessage("No hay interes");
    } else if (!months) {
      setErrorMessage("No hay meses");
    } else {
      const i: number = interest / 100;
      const fee: number = capital / ((1 - Math.pow(i + 1, -months)) / i);

      setTotal({
        monthlyFee: fee.toFixed(2).replace(".", ","),
        totalPayable: (fee * months).toFixed(2).replace(".", ","),
      });
    }
  };
  const reset = () => {
    setErrorMessage("");
    setTotal(null);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.wrapperArea}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.backgroundHeader}></View>
          <Text style={styles.title}>Header</Text>
          <Form
            setCapital={setCapital}
            setInterest={setInterest}
            setMonths={setMonths}
          />
        </SafeAreaView>

        <View style={bodyStyles.mainBody}>
          <Resultado errorMessage={errorMessage} />
        </View>
        <FooterButton
          capital={capital}
          interest={interest}
          months={months}
          calculate={calculate}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapperArea: {
    flexDirection: "column",
    width: "100%",
  },
  safeArea: {
    height: 290,
    position: "relative",
    alignItems: "center",
    width: "100%",
    flex: 2.5,
  },
  backgroundHeader: {
    height: 200,
    backgroundColor: colors.PRIMARY_COLOR,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginTop: 30,
  },
});

const bodyStyles = StyleSheet.create({
  mainBody: {
    flex: 3,
    width: "100%",
  },
});
