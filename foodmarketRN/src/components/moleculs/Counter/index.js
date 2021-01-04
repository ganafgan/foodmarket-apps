import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcBtnMinus, IcBtnPlus } from '../../../assets'
import { colors, dimension, fonts } from '../../../utils'

const Counter = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7}>
                <IcBtnPlus/>
            </TouchableOpacity>
            <Text style={styles.value}>14</Text>
            <TouchableOpacity activeOpacity={0.7}>
                <IcBtnMinus/>       
            </TouchableOpacity>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    value: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        marginHorizontal: dimension.width * 0.024,
        color: colors.black
    }
})
