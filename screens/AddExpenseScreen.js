import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {LabeledInput} from '../components/core/LabeledInput'
import { AccountPicker } from '../components/AccountPicker';
import { CurrencyPicker } from '../components/CurrencyPicker';
import { ExpenseCategoryPicker } from '../components/ExpenseCategoryPicker';


const AddExpenseScreen = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Expense</Text>
            
            <LabeledInput>Date</LabeledInput>
            <ExpenseCategoryPicker>Type</ExpenseCategoryPicker>
            <LabeledInput>Amount</LabeledInput>
            <AccountPicker>Paid From</AccountPicker>
            <LabeledInput>Notes</LabeledInput>
            
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

export {AddExpenseScreen};




