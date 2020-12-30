import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, dimension, fonts } from '../../../utils'

const Button = ({text, onPress, color=colors.primary, textColor=colors.white, border=colors.primary}) => {
    return (
        <TouchableOpacity 
            style={styles.container(color, border)}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text style={styles.title(textColor)}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (color, border) => ({
        backgroundColor: color,
        paddingHorizontal: dimension.width * 0.029,
        paddingVertical: dimension.height * 0.014,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: border
    }),
    title: (textColor) => ({
        fontSize: 14,
        fontFamily: fonts.primary[500],
        textAlign: 'center',
        color: textColor
    })
})
