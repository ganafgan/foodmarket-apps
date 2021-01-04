import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILFood1 } from '../../assets'
import { Button, Gap, Header, ItemValue, ListFood } from '../../components'
import { colors, dimension, fonts } from '../../utils'


const OrderDetail = ({navigation}) => {
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
                    image={ILFood1}
                    items={1}
                    type='order-summary'
                    name='Soup Special'
                    price={25000}
                    />
                <Gap height={dimension.height * 0.019}/>
                <Text style={styles.label}>Details Food</Text>
                <ItemValue label='Cherry Healty ' value='IDR 250.000'/>
                <ItemValue label='Driver' value='IDR 25.000'/>
                <ItemValue label='Tax 10%' value='IDR 15.000'/>
                <ItemValue label='Total Price' value='IDR 300.000' valueColor={colors.primary}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Delivere To</Text>
                <ItemValue label='Name' value='Afgan Taufiq'/>
                <ItemValue label='Phone No.' value='087824142264'/>
                <ItemValue label='Address' value='Jln Cemara'/>
                <ItemValue label='House No.' value='37'/>
                <ItemValue label='City' value='Bandung'/>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Order Status</Text>
                <ItemValue label='#FM209391' value='Paid' valueColor={colors.primary} />
            </View>
            <View style={styles.button}>
                <Button 
                    text='Cancel Order'
                    onPress={() => navigation.replace('SuccessOrder')}
                    color={colors.warning}
                    border={colors.warning}
                />
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
