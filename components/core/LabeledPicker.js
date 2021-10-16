import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const LabeledPicker = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{props.children}</Text>
            
            <View style={styles.input}>
            <Picker style={styles.input}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Savings" value="savings" />
                <Picker.Item label="Credit" value="credit" />
            </Picker>
            </View>
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
        paddingTop: 12,
        paddingBottom: 12,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        zIndex: -1
    }
})

export {LabeledPicker};


