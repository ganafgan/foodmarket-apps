import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcArrowForward } from '../../../assets'
import { colors, dimension, fonts } from '../../../utils'

const ListMenu = ({name}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.menu}>{name}</Text>
            <IcArrowForward/>
        </View>
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
