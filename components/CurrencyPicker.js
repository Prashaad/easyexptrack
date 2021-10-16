import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const CurrencyPicker = (props) => {
    const [selectedCurrency, setSelectedCurrency] = useState();
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{props.children}</Text>
            
            <View style={styles.input}>
            <Picker style={styles.input}
                selectedValue={selectedCurrency}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedCurrency(itemValue)
                }>
                <Picker.Item label="British Pound (GBP)" value="GBP" />
                <Picker.Item label="Euro (EUR)" value="EUR" />
                <Picker.Item label="Sri Lankan Rupee (LKR)" value="LKR" />
                <Picker.Item label="United States Dollar (USD)" value="USD" />
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

export {CurrencyPicker};


