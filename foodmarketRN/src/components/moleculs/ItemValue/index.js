import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ItemValue = ({label, value, valueColor=colors.black}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value(valueColor)}>{value}</Text>
        </View>
    )
}

export default ItemValue

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.secondary,
    },
    value: (valueColor) => ({
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color:  valueColor,
    })
})
