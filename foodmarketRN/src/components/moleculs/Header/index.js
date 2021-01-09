import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IcArrowBack } from '../../../assets'
import { colors, dimension, fonts } from '../../../utils'

const Header = ({title, subtitle, onBack, goBack}) => {
    return (
        <View style={styles.container}>
            {
                onBack && (
                    <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
                        <View style={styles.back}>
                            <IcArrowBack/>
                        </View>
                    </TouchableOpacity>
                )
            }
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: dimension.width * 0.058,
        paddingTop: dimension.height * 0.036,
        paddingBottom: dimension.height * 0.029,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: fonts.primary[500],
        fontSize: 22
    },
    subtitle: {
        fontSize: 14,
        fontFamily: fonts.primary[300]
    },
    back: {
        paddingHorizontal: dimension.width * 0.038,
        paddingVertical: dimension.height * 0.019,
        marginRight: dimension.width * 0.038,
        marginLeft: -dimension.width * 0.024,
    }
})
