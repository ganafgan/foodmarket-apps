import axios from 'axios'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input, Select } from '../../components'
import { API_HOST } from '../../config'
import { colors, dimension, getData, ShowError, showSuccess, storeData, useForm } from '../../utils'

const EditProfile = ({navigation}) => {

    const [form, setForm] = useForm({
        name: '',
        email: '',
        address: '',
        city: '',
        houseNumber: '',
        phoneNumber: '',
    })

    const onSubmit = () => {
        let resultObj = {}
        Object.keys(form).map((obj)=>{
            if (form[obj]) {
                resultObj[obj] = form[obj]
            }
        })
        getData('token')
            .then((resToken)=>{
                axios.post(`${API_HOST.url}/user`, resultObj, {
                    headers: {
                        Authorization: resToken.value
                    }
                })
                .then((res)=>{
                    showSuccess('Update Success')
                    storeData('userProfile', res.data.data)
                        .then(()=>{
                            navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
                        })
                })
                .catch((err)=>{
                    ShowError(err.response)
                })
            })
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.page}>
                <Header 
                    title='Edit Profile' 
                    subtitle='Edit your profile here' 
                    onBack
                    goBack={() => navigation.goBack()}
                />
                <View style={styles.container}>
                    <Gap height={dimension.height * 0.031}/>
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
                        label='Adress'
                        placeholder='Type your address'
                        value={form.address}
                        onChangeText={(value) => setForm('address', value)}
                    />
                    <Gap height={dimension.height * 0.019 }/>
                    <Input
                        label='Phone Number'
                        placeholder='Type your phone number'
                        value={form.phoneNumber}
                        onChangeText={(value) => setForm('phoneNumber', value)}
                    />
                    <Gap height={dimension.height * 0.019 }/>
                    <Input
                        label='House Number'
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
                        text='Continue'
                        onPress={onSubmit}
                    />
                    <Gap height={dimension.height * 0.014}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default EditProfile

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

