import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILSuccessOrder } from '../../assets'
import { Button, Gap } from '../../components'
import { colors, dimension, fonts } from '../../utils'

const SuccessOrder = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={ILSuccessOrder} style={styles.img}/>
            <Gap height={dimension.height * 0.036} />
            <Text style={styles.title}>You’ve Made Order</Text>
            <Text style={styles.subtitle}>Just stay at home while we are</Text>
            <Text style={styles.subtitle}>preparing your best foods</Text>
            <Gap height={dimension.height * 0.036} />
            <View style={styles.button}>
                <Button 
                    text='Order Other Foods'
                    onPress={() => navigation.replace('MainApp')}
                />
                <Gap height={dimension.height * 0.014} />
                <Button 
                    text='View My Order' 
                    color={colors.secondary}
                    onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
                />
            </View>
        </View>
    )
}

export default SuccessOrder

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: dimension.height * 0.23,
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
