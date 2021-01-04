import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILDummyUser } from '../../assets'
import { Gap, ProfileTabSection } from '../../components'
import { colors, dimension, fonts } from '../../utils'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Gap height={dimension.height * 0.031}/>
            <View style={styles.photo}>
                <View style={styles.borderPhoto}>
                    <Image source={ILDummyUser} style={styles.photoContainer} />
                </View>
            </View>
            <Gap height={dimension.height * 0.019}/>
            <Text style={styles.name}>Afgan Taufiq</Text>
            <Text style={styles.email}>ganafgan@gmail.com</Text>
            <Gap height={dimension.height * 0.06}/>
            <View style={styles.content}>
                <ProfileTabSection/>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    photo: {
        alignItems: 'center'
    },
    borderPhoto: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: colors.secondary,
        width: dimension.width * 0.267,
        height: dimension.height * 0.133,
        borderRadius: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoContainer: {
        width: dimension.width * 0.21,
        height: dimension.height * 0.109,
        borderRadius: 90,
        paddingHorizontal: dimension.width * 0.055,
        paddingVertical: dimension.height * 0.029,
        backgroundColor: '#f0f0f0'
    },
    content: {
        flex: 1
    },
    name: {
        fontSize: 18,
        fontFamily: fonts.primary[500],
        color: colors.black,
        textAlign: 'center'
    },
    email: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.secondary,
        textAlign: 'center'
    }
})
