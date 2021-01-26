import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Gap, Header, Input, Select } from '../../components'
import { setLoading, SignUpAction } from '../../redux/action'
import { colors, dimension, ShowError, useForm } from '../../utils'

const SignUpAddress = ({navigation}) => {

    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Bandung'
    })

    const {registerReducer, photoReducer} = useSelector((state) => state)
    const dispatch = useDispatch()

    const onSubmit = () => {
        
        const data = {
            ...form,
            ...registerReducer
        }
        if (form.phoneNumber === '' || form.address === '' || form.houseNumber === '' ) {
            ShowError('Form Must Be Filled')
        } else {
            dispatch(setLoading(true))
            dispatch(SignUpAction(data, photoReducer, navigation))
        }
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.page}>
                <Header 
                    title='Sign Up' 
                    subtitle='Register nad eat' 
                    onBack
                    goBack={() => navigation.goBack()}
                />
                <View style={styles.container}>
                    <Input
                        label='Phone No.'
                        placeholder='Type your phone number'
                        value={form.phoneNumber}
                        onChangeText={(value) => setForm('phoneNumber', value)}
                    />
                    <Gap height={dimension.height * 0.019 }/>
                    <Input
                        label='Address'
                        placeholder='Type your address'
                        value={form.address}
                        onChangeText={(value) => setForm('address', value)}
                    />
                    <Gap height={dimension.height * 0.019 }/>
                    <Input
                        label='House No.'
                        placeholder='Type your house number'
                        value={form.houseNumber}
                        onChangeText={(value) => setForm('houseNumber', value)}
                    />
                    <Gap height={dimension.height * 0.019 }/>
                    <Select 
                        label='City'
                        value={form.city}
                        onSelectChange={(value) => setForm('city', value)}          
                    />
                    <Gap height={dimension.height * 0.029} />
                    <Button 
                        text='SignUp Now'
                        onPress={onSubmit}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUpAddress

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
    },
    
})
