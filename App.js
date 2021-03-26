import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  return (
    <>
      <ScrollView backgroundColor="#1b262c">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>12.23</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#C1C1C1"></TextInput>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },
  resultValue: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bbe1fa',
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
