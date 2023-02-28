import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import colors from "./src/utils/colors"
import Form from "./src/components/Form"

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Header</Text>
        <Form />
      </SafeAreaView>

      <View>
        <Text>Body</Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
  }
});
