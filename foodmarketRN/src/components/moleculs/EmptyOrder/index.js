import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILEmptyOrder } from '../../../assets'
import { colors, dimension, fonts } from '../../../utils'
import { Button, Gap } from '../../atoms'


const EmptyOrder = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ILEmptyOrder/>
            <Gap height={dimension.height * 0.036} />
            <Text style={styles.title}>Ouch! Hungry</Text>
            <Text style={styles.subtitle}>Seems like you have not</Text>
            <Text style={styles.subtitle}>ordered any food yet</Text>
            <Gap height={dimension.height * 0.036} />
            <View style={styles.button}>
                <Button 
                    text='Find Foods'
                    onPress={() => navigation.replace('MainApp')}
                />
            </View>
        </View>
    )
}

export default EmptyOrder

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: dimension.height * 0.3,
        width: dimension.width * 0.48
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[400],
        color: colors.black,
    },
    subtitle: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.secondary
    },
    button: {
        width: '100%',
        paddingHorizontal: dimension.width * 0.194
    }
})
