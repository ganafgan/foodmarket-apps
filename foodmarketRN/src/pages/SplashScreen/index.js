import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Gap } from '../../components'
import { colors, dimension, fonts, getData } from '../../utils'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            getData('token')
            .then((res)=>{
                console.log('token:', res)
                if (res) {
                    navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
                } else {
                    navigation.replace('SignIn')
                }
            })
        }, 2000)
    }, [])

    useEffect(()=>{
        
    },[])
    return (
        <View style={styles.container}>
            <ILLogo/>
            <Gap height={dimension.height * 0.036}/>
            <Text style={styles.title}>Foodmarket</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
        color: colors.white,
        fontFamily: fonts.primary[500]
    }
})
