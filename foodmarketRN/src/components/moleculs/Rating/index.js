import React from 'react'
import { StyleSheet, View } from 'react-native'
import { IcStarActive, IcStarInactive } from '../../../assets'
import { colors, fonts } from '../../../utils'
import Number from '../Number'

const Rating = ({number}) => {
    const renderStar = () => {
        
        let star = []
        for (let i= 1; i <= 5; i++) {
            if (i <= number) {
                star.push(
                <IcStarActive key={i}/> )
            } else {
                star.push(
                <IcStarInactive  key={i}/>)
            }
        }
        return star
    }
    return (
        <View style={styles.ratingContainer}>
            <View style={styles.starContainer}>
                {renderStar()}
            </View>
            <Number number={number} type='decimal' style={styles.text}/>
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row',
        marginRight: 4
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.secondary,
        
    }
})
