import axios from 'axios'
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { colors, dimension, useForm } from '../../utils'


const SignIn = ({navigation}) => {

    const [form, setForm] = useForm({
        email: '',
        password: ''
    })

    const onSubmit = () => {
        axios.post('http://b15f436e82d7.ngrok.io/api/login', form)
            .then((res) => {
                console.log('success', res)
            })
            .catch((err) => {
                console.log('error', err)
            })
    }

    return (
        <View style={styles.page}>
            <Header title='Sign In' subtitle='Find your ever best meal '/>
            <View style={styles.container}>
                <Input
                    label='Email'
                    placeholder='Type your email address'
                    value={form.email}
                    onChangeText={(value) => setForm('email', value)}
                    
                />
                <Gap height={dimension.height * 0.019 }/>
                <Input
                    label='Password'
                    placeholder='Type your password'
                    secureTextEntry
                    value={form.password}
                    onChangeText={(value) => setForm('password', value)}
                />
                <Gap height={dimension.height * 0.029} />
                <Button 
                    text='SignIn'
                    onPress={onSubmit}
                />
                <Gap height={dimension.height * 0.024}/>
                <Button 
                    text='Create New Account'
                    color={colors.white}
                    textColor={colors.primary}
                    onPress={() => navigation.navigate('SignUp')}
                />
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: dimension.width * 0.06,
        paddingVertical: dimension.height * 0.031,
        marginTop: dimension.height * 0.029
    }
})
