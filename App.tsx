import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import colors from "./src/utils/colors"
import Form from "./src/components/Form"


export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.wrapperArea}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.backgroundHeader}></View>
          <Text style={styles.title}>Header</Text>
          <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths} />
        </SafeAreaView>

        <View style={bodyStyles.mainBody}>
          <Text>Body text</Text>
        </View>

        <View>
          <Text style={footerStyles.mainFooter}>Footer</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapperArea: {
    flexDirection: 'column',
    width: '100%',
  },
  safeArea: {
    height: 290,
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    flex: 2,
  },
  backgroundHeader: {
    height: 200,
    backgroundColor: colors.PRIMARY_COLOR,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
  },
});

const bodyStyles = StyleSheet.create({
  mainBody: {
    flex: 3,
    width: '100%',
  },
});

const footerStyles = StyleSheet.create({
  mainFooter: {
    flex: 1,
  },
});
