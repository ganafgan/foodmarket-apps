import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, dimension, fonts } from '../../../utils'
import Rating from '../Rating'

const FoodCard = ({image, name, rating, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={onPress} >
            <Image source={image} style={styles.image}/>
            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Rating number={rating}/>
            </View>
        </TouchableOpacity>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    container: {
        width: 200,
        borderRadius: 8,
        backgroundColor: colors.white,
        borderRadius: 8,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        overflow: 'hidden',
        marginRight: dimension.width * 0.058,
        marginVertical: dimension.height * 0.029,
    },
    image: {
        width: dimension.width * 0.51,
        height: dimension.height * 0.17,
        resizeMode: 'cover'
    },
    content: {
        paddingHorizontal: dimension.width * 0.029,
        paddingVertical: dimension.height * 0.014
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        color: colors.black
    },
})
