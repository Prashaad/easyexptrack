import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {LabeledInput} from '../components/core/LabeledInput'
import { AccountTypePicker } from '../components/AccountTypePicker';
import { CurrencyPicker } from '../components/CurrencyPicker';


const HomeScreen = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <TouchableOpacity style = {styles.menuItem} >
                <Text style = {styles.menuItemText}>Expenses</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.menuItem} >
                <Text style = {styles.menuItemText}>Income</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.menuItem} >
                <Text style = {styles.menuItemText}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.menuItem} >
                <Text style = {styles.menuItemText}>Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.menuItem} >
                <Text style = {styles.menuItemText}>My Profile</Text>
            </TouchableOpacity>
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
    menuItem: {
        padding: 15,
        margin: 10,
        marginTop: 25,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:25
    },
    menuItemText:{
        color: 'black',
        fontSize:20
    }
})

export {HomeScreen};




