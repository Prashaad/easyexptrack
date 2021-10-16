import React from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';

const LabeledInput = (props) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{props.children}</Text>
            <TextInput style={styles.input} placeholder={props.children}></TextInput>
        </View>
    )  
}

const styles = StyleSheet.create({
    wrapper:{
        width:'100%'
    },
    label:{
        paddingTop: 10,
        paddingBottom: 5,
        width: '100%',
        color: 'black'
    },
    input:{
        width:'100%',
        padding: 10,
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    }
})

export {LabeledInput};