import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILDummyUser } from '../../assets'
import { Gap, ProfileTabSection } from '../../components'
import { colors, dimension, fonts, getData, ShowError, showSuccess, storeData } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios'
import { API_HOST } from '../../config'

const Profile = ({navigation}) => {

    const [userProfile, setUserProfile] = useState({})
    const [photoProfile, setPhotoProfile] = useState(ILDummyUser)

    useEffect(()=>{
        navigation.addListener('focus', () =>{
            updateUserProfile()
        })
    },[navigation])

    const updateUserProfile = () => {
        getData('userProfile')
            .then((res)=>{
                setUserProfile(res)
                const host = `http://192.168.100.23:8000/`
                const urlImage = res.profile_photo_url.split('/').slice(3,7).join('/')
                setPhotoProfile({uri: `${host}${urlImage}`})
            })
    }

    const updatePhoto = () => {
        let options = {
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200
        }
       launchImageLibrary(options, (response) => {
            if (response.didCancel || response.errorCode == 'others') {
            ShowError('User cancelled camera picker');
            } else {
                const source = {uri: response.uri}
                const dataImage = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName
                }
                const photoForUpload = new FormData()
                photoForUpload.append('file', dataImage)
                getData('token')
                .then((resToken)=>{
                    axios.post(`${API_HOST.url}/user/photo`, photoForUpload , {
                        headers: {
                            Authorization: resToken.value,
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((res)=>{
                        getData('userProfile')
                            .then((resPhoto)=>{
                                showSuccess('Upload Photo Success')
                                resPhoto.profile_photo_url = `http://192.168.100.23:8000/storage/${res.data.data[0]}`
                                storeData('userProfile', resPhoto).then(()=>{
                                    updateUserProfile()
                                })
                            
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
    
                    })
                })
            }
       })
    }

    return (
        <View style={styles.container}>
            <Gap height={dimension.height * 0.031}/>
                <TouchableOpacity activeOpacity={0.8} onPress={updatePhoto}>
                    <View style={styles.photo}>
                            <View style={styles.borderPhoto}>
                                <Image source={photoProfile} style={styles.photoContainer} />
                            </View>
                    </View>
                </TouchableOpacity>
            <Gap height={dimension.height * 0.019}/>
            <Text style={styles.name}>{userProfile.name}</Text>
            <Text style={styles.email}>{userProfile.email}</Text>
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
