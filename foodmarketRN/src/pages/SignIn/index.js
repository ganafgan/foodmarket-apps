import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { colors, dimension } from '../../utils'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title='Sign In' subtitle='Find your ever best meal '/>
            <View style={styles.container}>
                <Input
                    label='Email'
                    placeholder='Type your email address'
                />
                <Gap height={dimension.height * 0.019 }/>
                <Input
                    label='Password'
                    placeholder='Type your password'
                />
                <Gap height={dimension.height * 0.029} />
                <Button 
                    text='SignIn'
                />
                <Gap height={dimension.height * 0.014}/>
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
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: dimension.width * 0.06,
        paddingVertical: dimension.height * 0.031,
        marginTop: dimension.height * 0.029
    }
})
