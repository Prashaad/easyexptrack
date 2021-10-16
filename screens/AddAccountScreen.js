import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {LabeledInput} from '../components/core/LabeledInput'
import { AccountTypePicker } from '../components/AccountTypePicker';
import { CurrencyPicker } from '../components/CurrencyPicker';


const AddAccountScreen = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Account</Text>
            <LabeledInput>Name</LabeledInput>
            <AccountTypePicker>Type</AccountTypePicker>
            <CurrencyPicker>Currency</CurrencyPicker>
            <LabeledInput>Opening Balance</LabeledInput>
            
            <View style={{ flexDirection: 'row' }}>
            <View>
                <TouchableOpacity style = {styles.backButton} >
                    <Text>BACK</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style = {styles.submitButton} >
                    <Text>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
        width:'100%'
    },
    title:{
        fontSize: 25,
        padding: 50
    },
    submitButton: {
        backgroundColor: 'green',
        padding: 20,
        margin: 10,
        marginTop: 25,
        height: 50,
        width: 145,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButton: {
        backgroundColor: 'red',
        padding: 20,
        margin: 10,
        marginTop: 25,
        height: 50,
        width: 145,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButtonText:{
        color: 'white',
    }
})

export {AddAccountScreen};




