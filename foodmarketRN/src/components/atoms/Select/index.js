import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Picker} from '@react-native-community/picker';
import { dimension, fonts } from '../../../utils';

const Select = ({label, value, onSelectChange}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                selectedValue={value}
                onValueChange={(itemValue) => onSelectChange(itemValue)}
                >
                    <Picker.Item label="Bandung" value="Bandung" />
                    <Picker.Item label="Jakarta" value="Jakarta" />
                    <Picker.Item label="Semarang" value="Semarang" />
                    <Picker.Item label="Yogyakarta" value="Yogyakarta" />
                    <Picker.Item label="Surabaya" value="Surabaya" />
                </Picker>
            </View>
        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: fonts.primary[400]
    },
    input: {
        borderRadius: 8,
        paddingHorizontal: dimension.width * 0.004,
        paddingVertical: 0,
        borderWidth: 0,
    }
})
