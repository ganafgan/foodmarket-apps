import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Button, Gap, Header, Input } from '../../components'
import { colors, dimension, fonts } from '../../utils'


const SignUp = ({navigation}) => {
    
    const globalState = useSelector((state) => state.globalReducer)
    console.log(globalState)

    return (
        <View style={styles.page}>
            <Header title='Address' subtitle='Make sure it`s valid' onBack/>
            <View style={styles.container}>
                <Gap height={dimension.height * 0.031}/>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        <View style={styles.photoContainer}>
                            <Text style={styles.addPhoto}>Add Photo</Text>
                        </View>
                    </View>
                </View>
                <Gap height={dimension.height * 0.019}/>
                <Input
                    label='Fullname'
                    placeholder='Type your email fullname'
                />
                <Gap height={dimension.height * 0.019 }/>
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
                    text='Cointinue'
                    onPress={() => navigation.navigate('SignUpAddress')}
                />
                <Gap height={dimension.height * 0.014}/>
            </View>
        </View>
    )
}

export default SignUp

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
    photo: {
        alignItems: 'center'
    },
    borderPhoto: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: colors.secondary,
        width: dimension.width * 0.267,
        height: dimension.height * 0.133,
        borderRadius: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoContainer: {
        width: dimension.width * 0.21,
        height: dimension.height * 0.109,
        borderRadius: 90,
        paddingHorizontal: dimension.width * 0.055,
        paddingVertical: dimension.height * 0.029,
        backgroundColor: '#f0f0f0'
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.secondary,
        textAlign: 'center'
    }
})
