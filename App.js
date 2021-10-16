import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Touchable, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { HomeScreen } from './screens/HomeScreen';
import { AddExpenseScreen } from './screens/AddExpenseScreen';
import { AddAccountScreen } from './screens/AddAccountScreen';
import { LoginScreen } from './screens/LoginScreen';

export default function App() {
  const storeData = async (value) => {
    try {
      // const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }

  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20
  }
});
