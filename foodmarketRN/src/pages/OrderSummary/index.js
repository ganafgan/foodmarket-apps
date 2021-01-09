import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, ItemValue, ListFood, Loading } from '../../components'
import { API_HOST } from '../../config'
import { colors, dimension, fonts, getData } from '../../utils'
import { WebView } from 'react-native-webview';


const OrderSummary = ({navigation, route}) => {

    const {
        item, 
        transaction,
        userProfile
    } = route.params

    const [token, setToken] = useState('')
    const [isPaymentOpen, setIsPaymentOpen] = useState(false)
    const [paymentUrl, setPaymentUrl] = useState('http://google.com')

    useEffect(() => {
        getData('token')
            .then((res)=>{
                console.log('token: ', res)
                setToken(res.value)
            })
    }, [])

    const onCheckOut = () => {
        const data = {
            food_id: item.id,
            user_id: userProfile.id,
            quantity: transaction.totalItem,
            total: transaction.total,
            status: 'PENDING'
        }
        axios.post(`${API_HOST.url}/checkout`, data, {
            headers: {
                Authorization: token
            }
        })
        .then((res)=>{
            console.log('checkout success: ', res)
            setIsPaymentOpen(true)
            setPaymentUrl(res.data.data.payment_url)
        })
        .catch((err)=>{
            console.log('checkout error: ', err)
        })
    }

    const onNavChange = (state) => {
        console.log(state)
        const urlSuccess = 'http://47b506d5b30f.ngrok.io/midtrans/success?order_id=13&status_code=201&transaction_status=pending'
        const titleWeb = 'Laravel'
        if (state.title === titleWeb) {
            navigation.replace('SuccessOrder')
        }
        
    }

    if (isPaymentOpen) {
        return (
            <>
                <Header
                    title='Payment'
                    subtitle='Select Your payment type'
                    onBack
                    goBack={() => setIsPaymentOpen(false)}
                />
                <WebView
                    source={{ uri: paymentUrl }}
                    onNavigationStateChange={onNavChange}
                    startInLoadingState={true}
                    renderLoading={() => <Loading/>}
                />
            </>
          );
    }
    return (
        <ScrollView style={styles.container}>
            <Header 
                title='Order Summary'
                subtitle='You deserve better meal'
                onBack
                goBack={() => navigation.goBack()}
                
            />
            <View style={styles.content}>
                <Text style={styles.label}>Item Ordered</Text>
                <ListFood 
                    image={{uri: item.picturePath}}
                    items={transaction.totalItem}
                    type='order-summary'
                    name={item.name}
                    price={item.price}
                    />
                <Gap height={dimension.height * 0.019}/>
                <Text style={styles.label}>Details Food</Text>
                <ItemValue label={item.name} value={transaction.totalPrice} type='curency'/>
                <ItemValue label='Driver' value={transaction.driver} type='curency'/>
                <ItemValue label='Tax 10%' value={transaction.tax} type='curency'/>
                <ItemValue label='Total Price' value={transaction.total} type='curency' valueColor={colors.primary}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Delivere To</Text>
                <ItemValue label='Name' value={userProfile.name}/>
                <ItemValue label='Phone No.' value={userProfile.phoneNumber}/>
                <ItemValue label='Address' value={userProfile.address}/>
                <ItemValue label='House No.' value={userProfile.houseNumber}/>
                <ItemValue label='City' value={userProfile.city}/>
            </View>
            <View style={styles.button}>
                <Button 
                    text='Checkout Now'
                    onPress={onCheckOut}
                />
            </View>
            <Gap height={dimension.height * 0.048}/>
        </ScrollView>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: dimension.width * 0.058,
        paddingVertical: dimension.width * 0.019,
        marginTop: dimension.height * 0.029
    },
    label: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.black,
        marginBottom: dimension.height * 0.009
    },
    button: {
        paddingHorizontal: dimension.width * 0.058,
        marginTop: dimension.height * 0.029
    }
})
