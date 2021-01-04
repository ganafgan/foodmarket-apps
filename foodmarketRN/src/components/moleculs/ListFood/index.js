import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ILFood4 } from '../../../assets';
import { colors, dimension, fonts } from '../../../utils';
import Rating from '../Rating';

const ListFood = ({
    image, 
    name,
    onPress, 
    items, 
    rating, 
    price,
    type,
    date,
    status
    }) => {

    const renderContent = () => {
        switch (type) {
            case 'product':
                //item list product di home page
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.tilte}>{name}</Text>
                            <Text style={styles.price}>IDR {price}</Text>
                        </View>
                       <Rating rating={rating}/>
                    </>
                )
            case 'order-summary':
                // item order summary
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.tilte}>{name}</Text>
                            <Text style={styles.price}>IDR {price}</Text>
                        </View>
                        <Text style={styles.items}>{items} items</Text>
                    </>
                )
            case 'in-progress':
                // item in progress
                return (
                    <>
                        <View style={styles.content}>
                        <Text style={styles.tilte}>{name}</Text>
                            <Text style={styles.price}>{items} items . IDR {price}</Text>     
                        </View>
                    </>
                )
            case 'past-orders': 
                //  item past order
                return (
                    <>
                        <View style={styles.content}>
                        <Text style={styles.tilte}>{name}</Text>
                            <Text style={styles.price}>{items} items . IDR {price}</Text>     
                        </View>
                        <View>
                            <Text style={styles.date}>{date}</Text>
                            <Text style={styles.status}>{status}</Text>
                        </View>
                    </>
                )
            default:
                // item default
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.tilte}>{name}</Text>
                            <Text style={styles.price}>IDR {price}</Text>
                        </View>
                       <Rating/>
                    </>
                )
        }
    }
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
                <Image source={image} style={styles.img}/>
                {renderContent()}
            </View>
        </TouchableOpacity>
    )
}
export default ListFood

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingVertical: dimension.height * 0.009,
        alignItems: 'center'
    },
    content: {
        flex: 1
    },
    img: {
        height: dimension.height * 0.072,
        width: dimension.width * 0.145,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: dimension.width * 0.029
    },
    tilte: {
        fontFamily: fonts.primary[400],
        fontSize: 16,
        color: colors.black
    },
    price: {
        fontFamily: fonts.primary[400],
        fontSize: 13,
        color: colors.secondary
    },
    items: {
        fontSize: 13,
        fontFamily: fonts.primary[400],
        color: colors.secondary
    },
    date: {
        fontSize: 10,
        fontFamily: fonts.primary[400],
        color: colors.secondary
    },
    status: {
        fontSize: 10,
        fontFamily: fonts.primary[400],
        color: colors.warning,
    }
})
