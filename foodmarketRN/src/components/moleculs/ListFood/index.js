import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, dimension, fonts } from '../../../utils';
import Number from '../Number';
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
                            <Number number={price} style={styles.price}/>
                        </View>
                       <Rating number={rating}/>
                    </>
                )
            case 'order-summary':
                // item order summary
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.tilte}>{name}</Text>
                            <Number number={price} style={styles.price}/>
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
                        <View style={styles.row}>
                            <Text style={styles.price}>{items} items</Text> 
                            <View style={{width:3, height: 3, borderRadius: 3, backgroundColor: colors.secondary, marginHorizontal: 4}}></View>
                            <Number number={price} style={styles.price}/>    
                        </View>
                        </View>
                    </>
                )
            case 'past-orders': 
                //  item past order
                const formatedDate = new Date(date).toDateString()
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.tilte}>{name}</Text>
                            <View style={styles.row}>
                                <Text style={styles.price}>{items} items</Text> 
                                <View style={{width:3, height: 3, borderRadius: 3, backgroundColor: colors.secondary, marginHorizontal: 4}}></View>
                                <Number number={price} style={styles.price}/>    
                            </View>
                        </View>
                        <View>
                            <Text style={styles.date}>{formatedDate}</Text>
                            <Text style={styles.status(status)}>{status}</Text>
                        </View>
                    </>
                )
            default:
                // item default
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.tilte}>{name}</Text>
                            <Number number={price} style={styles.price}/>
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
    status: (status) => ({
        fontSize: 10,
        fontFamily: fonts.primary[400],
        color: status === 'CANCELLED' ? colors.warning : '#1abc9c',
    }),
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
