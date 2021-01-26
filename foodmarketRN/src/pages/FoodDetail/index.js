import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { IcArrowBackWhite, ILFood5 } from '../../assets'
import { Button, Counter, Gap, Number, Rating } from '../../components'
import { colors, dimension, fonts, getData } from '../../utils'

const FoodDetail = ({navigation, route}) => {

    const {
        id,
        name, 
        picturePath, 
        description,
        ingredients,
        rate,
        price
    } = route.params

    const [totalItem, setTotalItem] = useState(1)
    const [userProfile, setUserProfile] = useState({})

    useEffect(()=>{
        getData('userProfile')
            .then((res)=>{
                setUserProfile(res)
            })
    }, [])

    const onCounterChange = (value) => {
        setTotalItem(value)    
    }

    const onOrder = () => {
        const totalPrice = totalItem * price
        const driver = 50000
        const tax = 10/100 * totalPrice
        const total = totalPrice + driver + tax
        const data = {
            item: {
                id: id,
                name: name,
                price: price,
                picturePath: picturePath
            },
            transaction: {
                totalItem: totalItem,
                totalPrice: totalPrice,
                driver: driver,
                tax: tax ,
                total: total
            },
            userProfile
        }
        navigation.navigate('OrderSummary', data)
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: picturePath}} style={styles.cover}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <IcArrowBackWhite/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.mainContent}>
                    <View style={styles.productContainer}>
                        <View>
                            <Text style={styles.title}>{name}</Text>
                            <Rating number={rate}/>
                        </View>
                        <Counter onValueChange={onCounterChange}/>
                    </View>
                    <Gap height={ dimension.height * 0.017}/>
                    <Text style={styles.desc}>{description}</Text>
                    <Text style={styles.label}>Ingredients</Text>
                    <Text style={styles.desc}>{ingredients}</Text> 
                </View>
               <View style={styles.footer}>
                   <View style={styles.priceContainer}>
                       <Text style={styles.labelTotal}>Total Price</Text>
                       <Number number={totalItem * price} style={styles.priceTotal} />
                   </View>
                   <View style={styles.button}>
                       <Button 
                            text='Order Now'
                            onPress={onOrder}
                       />
                   </View>
               </View>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cover: {
        height: dimension.height * 0.4,
        resizeMode: 'cover',
        paddingTop: dimension.height * 0.031,
        paddingLeft: dimension.width * 0.053
    },
    back: {
        width: dimension.width * 0.072,
        height: dimension.height *  0.036,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: -dimension.height * 0.048,
        paddingTop: dimension.height * 0.031,
        paddingHorizontal: dimension.width * 0.038
    },
    mainContent: {
        flex: 1
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        color: colors.black
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.secondary,
        marginBottom: dimension.height * 0.019
    },
    label: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.black,
        marginBottom: dimension.height * 0.004
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: dimension.height * 0.019,
        alignItems: 'center'
    },
    priceContainer: {
        flex: 1,
    },
    button: {
        width: dimension.width * 0.396
    },
    labelTotal: {
        fontSize: 13,
        fontFamily: fonts.primary[400],
        color: colors.secondary
    },
    priceTotal: {
        fontSize: 18,
        fontFamily: fonts.primary[400],
        color: colors.black
    }
})
