import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcStarActive, IcStarInactive } from '../../../assets'

const Rating = () => {
    return (
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
    )
}

export default Rating

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row'
    },
    ratingContainer: {
        flexDirection: 'row'
    }
})
