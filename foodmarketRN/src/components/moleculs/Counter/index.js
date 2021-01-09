import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcBtnMinus, IcBtnPlus } from '../../../assets'
import { colors, dimension, fonts } from '../../../utils'

const Counter = ({onValueChange}) => {

    const [value, setValue] = useState(1)

    useEffect(()=>{
        onValueChange(value)
    }, [])

    const onCount = (type) => {
        let result = value
        if(type === 'plus'){
            result = value + 1
        }
        if (type === 'minus'){
            if(value > 1){
                result = value - 1
            }
        }
        setValue(result)
        onValueChange(result)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => onCount('minus')}>
                <IcBtnMinus/>       
            </TouchableOpacity>
            <Text style={styles.value}>{value}</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => onCount('plus')}>
                <IcBtnPlus/>
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
