import React, { useState } from 'react'
import { StyleSheet, Text, TextInput , View } from 'react-native'
import { colors, dimension, fonts } from '../../../utils'

const Input = ({label, placeholder}) => {
    const [border, setBorder] = useState(colors.border)

    const onFocus = () => {
        setBorder(colors.black)
    }

    const onBlur = () => {
        setBorder(colors.border)
    }

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input(border)}
                placeholder={placeholder}
                onBlur={onBlur}
                onFocus={onFocus}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: fonts.primary[400]
    },
    input: (border) => ({
        borderRadius: 8,
        paddingHorizontal: dimension.width * 0.024,
        paddingVertical: dimension.height * 0.012,
        borderWidth: 1,
        borderColor: border
    })
})
