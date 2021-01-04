import React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { IcArrowBackWhite, ILFood5 } from '../../assets'
import { Button, Counter, Gap, Rating } from '../../components'
import { colors, dimension, fonts } from '../../utils'

const FoodDetail = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={ILFood5} style={styles.cover}>
                <TouchableOpacity style={styles.back}>
                    <IcArrowBackWhite/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.mainContent}>
                    <View style={styles.productContainer}>
                        <View>
                            <Text style={styles.title}>Chery Healthy</Text>
                            <Rating/>
                        </View>
                        <Counter/>
                    </View>
                    <Gap height={ dimension.height * 0.017}/>
                    <Text style={styles.desc}>Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan pola makan
                            yang cukup tinggi dengan mengutamakan
                            diet yang sehat dan teratur.
                    </Text>
                    <Text style={styles.label}>Ingredients</Text>
                    <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text> 
                </View>
               <View style={styles.footer}>
                   <View style={styles.priceContainer}>
                       <Text style={styles.labelTotal}>Total Price</Text>
                       <Text style={styles.priceTotal}>IDR 250.000</Text>
                   </View>
                   <View style={styles.button}>
                       <Button 
                            text='Order Now'
                            onPress={() => navigation.navigate('OrderSummary')}
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
