import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const ExpenseCategoryPicker = (props) => {
    const [selectedItem, setSelectedItem] = useState();
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{props.children}</Text>
            
            <View style={styles.input}>
            <Picker style={styles.input}
                selectedValue={selectedItem}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedItem(itemValue)
                }>
                <Picker.Item label="Utilities" value="UTIL" />
                <Picker.Item label="Food & Groceries" value="FOOD" />
                <Picker.Item label="Vehicle & Transport" value="VEHICLE" />
                <Picker.Item label="Medical" value="MEDICAL" />
                <Picker.Item label="Misc" value="MISC" />
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

export {ExpenseCategoryPicker};


