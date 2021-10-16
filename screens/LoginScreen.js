import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {LabeledInput} from '../components/core/LabeledInput'
import { AccountPicker } from '../components/AccountPicker';
import { CurrencyPicker } from '../components/CurrencyPicker';
import { ExpenseCategoryPicker } from '../components/ExpenseCategoryPicker';


const LoginScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>EasyExpTrack | Login</Text>
            
            <LabeledInput>Username</LabeledInput>
            <LabeledInput>Password</LabeledInput>
            
            <View style={{ flexDirection: 'row' }}>
              <View>
                <TouchableOpacity style = {styles.submitButton} >
                    <Text>Signin</Text>
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
        justifyContent: 'center',
        padding: 20,
        width:'100%'
    },
    title:{
        fontSize: 25,
        padding: 10
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

export {LoginScreen};




