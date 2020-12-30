import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Picker} from '@react-native-community/picker';
import { dimension, fonts } from '../../../utils';

const Select = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                // selectedValue={this.state.language}
                // onValueChange={(itemValue, itemIndex) =>
                //     this.setState({language: itemValue})
                // }
                >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
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
