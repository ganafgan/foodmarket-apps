import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input, Select } from '../../components'
import { colors, dimension, fonts } from '../../utils'

const SignUpAddress = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title='Sign Up' subtitle='Register nad eat' onBack/>
            <View style={styles.container}>
                <Input
                    label='Phone No.'
                    placeholder='Type your phone number'
                />
                <Gap height={dimension.height * 0.019 }/>
                <Input
                    label='Address'
                    placeholder='Type your address'
                />
                <Gap height={dimension.height * 0.019 }/>
                <Input
                    label='House No.'
                    placeholder='Type your house number'
                />
                <Gap height={dimension.height * 0.019 }/>
                <Select label='City'/>
                <Gap height={dimension.height * 0.029} />
                <Button 
                    text='SignUp Now'
                    onPress={() => navigation.replace('SuccessSignUp')}
                />
            </View>
        </View>
    )
}

export default SignUpAddress

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: dimension.width * 0.06,
        paddingVertical: dimension.height * 0.031,
        marginTop: dimension.height * 0.029
    },
    
})
