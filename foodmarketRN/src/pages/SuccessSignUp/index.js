import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILSuccessSignup } from '../../assets'
import { Button, Gap } from '../../components/atoms'
import { colors, dimension, fonts } from '../../utils'

const SuccessSignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ILSuccessSignup/>
            <Gap height={dimension.height * 0.036} />
            <Text style={styles.title}>Yeay! Completed</Text>
            <Gap height={dimension.height * 0.007}/>
            <Text style={styles.subtitle}>Now you are able to order</Text>
            <Text style={styles.subtitle}>some foods as a self-reward</Text>
            <Gap height={dimension.height * 0.036} />
            <View style={styles.buttonContainer}>
                <Button 
                    text='Find Foods'
                    onPress={() => navigation.reset({index: 0, routes: [{name: 'MainApp'}]})}
                />
            </View>
        </View>
    )
}

export default SuccessSignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    img: {
        height: dimension.height * 0.4,
        width: dimension.width * 0.52
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[400],
        color: colors.black
    },
    subtitle: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.secondary
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: dimension.width * 0.194
    }
})
