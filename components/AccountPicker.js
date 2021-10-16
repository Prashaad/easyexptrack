import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const AccountPicker = (props) => {
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
                <Picker.Item label="Cash" value="1" />
                <Picker.Item label="Sampath Savings" value="2" />
                <Picker.Item label="Sampath Current" value="3" />
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

export {AccountPicker};


