import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IcStarActive, IcStarInactive, ILFood1 } from '../../../assets'
import { colors, dimension, fonts } from '../../../utils'

const FoodCard = ({image}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <View style={styles.content}>
                <Text style={styles.title}>Cherry Healthy</Text>
                <View style={styles.ratingContainer}>
                    <View style={styles.starContainer}>
                        <IcStarActive/>
                        <IcStarActive/>
                        <IcStarActive/>
                        <IcStarActive/>
                        <IcStarInactive/>
                    </View>
                    <Text>4.5</Text>
                </View>
            </View>
        </View>
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
        width: dimension.width * 0.5,
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
    starContainer: {
        flexDirection: 'row'
    },
    ratingContainer: {
        flexDirection: 'row'
    }
})
