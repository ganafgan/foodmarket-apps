import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcArrowForward } from '../../../assets'
import { colors, dimension, fonts } from '../../../utils'

const ListMenu = ({name, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
            <Text style={styles.menu}>{name}</Text>
            <IcArrowForward/>
        </TouchableOpacity>
    )
}

export default ListMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: dimension.height * 0.008
    },
    menu: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.black
    }
})
