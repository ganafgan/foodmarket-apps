import axios from "axios"
import { API_HOST } from "../../config"
import { ShowError, storeData } from "../../utils"
import { setLoading } from "./global"

export const SignUpAction = (dataRegister, photoReducer, navigation ) => (dispatch) => {
    axios.post(`${API_HOST.url}/register`, dataRegister)
        .then((res) => {
            console.log('datasuccess:',res.data)

            const profile = res.data.data.user
            const token = `${res.data.data.token_type} ${res.data.data.access_token}`

            //simpan data token di local storage
            storeData('token', {value: token})
            
            if (photoReducer.isUploadPhoto) {
                const photoForUpload = new FormData()
                photoForUpload.append('file', photoReducer)

                axios.post(`${API_HOST.url}/user/photo`,
                photoForUpload, 
                {
                    headers: {
                        Authorization: token ,
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((resUpload)=>{
                    profile.profile_photo_url = `http://192.168.100.23:8000/storage/${resUpload.data.data[0]}`
                    storeData('userProfile', profile)
                    navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]})
                    
                })
                .catch((errUpload)=>{
                    ShowError('photo error upload')
                    navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]})
                   
                })
            } else {
                storeData('userProfile', profile)
                navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]})
                
            }
            dispatch(setLoading(false))
        })
        .catch((err) => {
            dispatch(setLoading(false))
            ShowError(err.response.data.data.message)
        })
}

export const SignInAction = (form, navigation) => (dispatch) => {
    dispatch(setLoading(true))
    axios.post(`${API_HOST.url}/login`, form)
            .then((res) => {
                const token = `${res.data.data.token_type} ${res.data.data.access_token}`
                const profile = res.data.data.user

                dispatch(setLoading(false))
                storeData('token', {value: token})
                storeData('userProfile', profile)
                navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
            })
            .catch((err) => {
                dispatch(setLoading(false))
                ShowError(err.response.data.data.message)
            })
}