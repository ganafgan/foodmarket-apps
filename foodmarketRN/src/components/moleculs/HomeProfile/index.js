import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILUser } from '../../../assets'
import { colors, dimension, fonts, getData } from '../../../utils'

const HomeProfile = () => {

    const [photo, setPhoto] = useState(ILUser)
    const navigation = useNavigation()
    
    useEffect(()=>{
        navigation.addListener('focus', () => {
            getData('userProfile')
            .then((res)=>{
                const host = `http://192.168.100.23:8000/`
                const urlImage = res.profile_photo_url.split('/').slice(3,7).join('/')
                setPhoto({uri: `${host}${urlImage}`})
            })
        })
    },[navigation])

    return (
        <View style={styles.wrapperProfile}>
                <View>
                    <Text style={styles.appName}>Foodmarket</Text>
                    <Text style={styles.greeting}>Let's get some foods</Text>
                </View>
                <Image source={photo} style={styles.profile}/>
            </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    wrapperProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        paddingTop: dimension.height * 0.036,
        paddingHorizontal: dimension.width * 0.058,
        paddingBottom: dimension.height * 0.036,
    },
    appName: {
        fontSize: 22,
        fontFamily: fonts.primary[500],
        color: colors.black
    },
    greeting: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.secondary
    },
    profile: {
        width: dimension.width * 0.12,
        height: dimension.height * 0.06,
        borderRadius: 8
    },
})
