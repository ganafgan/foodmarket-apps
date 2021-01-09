import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size='large'
                color={colors.primary}
            />
            <Text style={styles.loading}>Loading...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex:1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        fontSize: 16,
        fontFamily: fonts.primary[500],
        color: colors.black,
        marginTop: 20
    }
})
