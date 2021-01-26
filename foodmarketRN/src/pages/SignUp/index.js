import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { useDispatch } from 'react-redux'
import { Button, Gap, Header, Input } from '../../components'
import { colors, dimension, fonts, ShowError, useForm } from '../../utils'

const SignUp = ({navigation}) => {
    
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
    })
    
    const [photo, setPhoto] = useState('')      

    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch({
            type: 'SET_REGISTER',
            value: form
        })
        navigation.navigate('SignUpAddress')
    }

    const addPhoto = () => {
        let options = {
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200
        }
       launchImageLibrary(options, (response) => {
            if (response.didCancel || response.errorCode == 'others') {
            ShowError('User cancelled camera picker');
            } else {
                const source = {uri: response.uri}
                const dataImage = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName
                }
                setPhoto(source)
                dispatch({
                    type: 'SET_PHOTO',
                    value: dataImage
                })
                dispatch({
                    type: 'SET_UPLOAD_STATUS',
                    value: true
                })
            }
       })
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.page}>
                <Header 
                    title='Address' 
                    subtitle='Make sure it`s valid' 
                    onBack
                    goBack={() => navigation.goBack()}
                />
                <View style={styles.container}>
                    <Gap height={dimension.height * 0.031}/>
                    <View style={styles.photo}>
                        <TouchableOpacity activeOpacity={0.7} onPress={addPhoto}>
                            <View style={styles.borderPhoto}>
                                {photo 
                                ? 
                                <Image source={photo} style={styles.photoContainer}/> 
                                : 
                                <View style={styles.photoContainer}>
                                    <Text style={styles.addPhoto}>Add Photo</Text>
                                </View>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Gap height={dimension.height * 0.019}/>
                    <Input
                        label='Fullname'
                        placeholder='Type your fullname'
                        value={form.name}
                        onChangeText={(value) => setForm('name', value)}
                    />
                    <Gap height={dimension.height * 0.019 }/>
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
                        text='Continue'
                        onPress={onSubmit}
                    />
                    <Gap height={dimension.height * 0.014}/>
                </View>
            </View>
        </ScrollView>
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
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.secondary,
        textAlign: 'center'
    }
})
