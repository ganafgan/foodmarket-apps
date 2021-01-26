import axios from 'axios'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, ItemValue, ListFood } from '../../components'
import { API_HOST } from '../../config'
import { colors, dimension, fonts, getData } from '../../utils'


const OrderDetail = ({navigation, route}) => {

    const order = route.params

    const onCancel = () => {
        const data = {
            status: 'CANCELLED'
        }
        getData('token')
           .then((resToken)=>{
               axios.post(`${API_HOST.url}/transaction/${order.id}`, data, {
                   headers: {
                       Authorization: resToken.value
                   }
               })
               .then((res)=>{
                   navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
               })
               .catch((err)=>{
                    console.log(err)
               })
           })
        
    }
   
    return (
        <ScrollView style={styles.container}>
            <Header 
                title='Payment'
                subtitle='You deserve better meal'
                onBack
            />
            <View style={styles.content}>
                <Text style={styles.label}>Item Ordered</Text>
                <ListFood 
                    image={{uri: order.food.picturePath}}
                    items={order.quantity}
                    type='order-summary'
                    name={order.food.name}
                    price={order.food.price}
                    />
                <Gap height={dimension.height * 0.019}/>
                <Text style={styles.label}>Details Food</Text>
                <ItemValue label={order.food.name} value={order.food.price * order.quantity} type='curency'/>
                <ItemValue label='Driver' value={50000} type='curency'/>
                <ItemValue label='Tax 10%' value={10/100 * order.total}/>
                <ItemValue label='Total Price' value={order.total} type='curency' valueColor={colors.primary}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Delivere To</Text>
                <ItemValue label='Name' value={order.user.name}/>
                <ItemValue label='Phone No.' value={order.user.phoneNumber}/>
                <ItemValue label='Address' value={order.user.address}/>
                <ItemValue label='House No.' value={order.user.houseNumber}/>
                <ItemValue label='City' value={order.user.city}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Order Status</Text>
                <ItemValue label={`#${order.id}`} value={order.status} valueColor={order.status === 'CANCELLED' ? colors.warning : '#1abc9c'} />
            </View>
            <View style={styles.button}>
                {order.status === 'PENDING' && (
                    <Button 
                        text='Cancel Order'
                        onPress={onCancel}
                        color={colors.warning}
                        border={colors.warning}
                    />
                )}
            </View>
            <Gap height={dimension.height * 0.048}/>
        </ScrollView>
    )
}

export default OrderDetail

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
