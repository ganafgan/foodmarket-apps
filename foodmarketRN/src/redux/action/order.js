import axios from "axios"
import { API_HOST } from "../../config"
import { getData, ShowError } from "../../utils"

export const getOrders = () => (dispatch)  => {
    getData('token')
        .then((res)=>{
            axios.get(`${API_HOST.url}/transaction`, {
                headers: {
                    Authorization : res.value
                }
            })
            .then((response)=>{
                dispatch({
                    type: 'SET_ORDER',
                    value: response.data.data.data
                })
            })
            .catch((err)=>{
                ShowError(err.response)
            })
        })
}

export const getInProgress = () => (dispatch)  => {
    getData('token')
        .then((res)=>{
            axios.all([
                axios.get(`${API_HOST.url}/transaction?status=PENDING`, {
                    headers: {
                        Authorization : res.value
                    }
                }),
                axios.get(`${API_HOST.url}/transaction?status=SUCCESS`, {
                    headers: {
                        Authorization : res.value
                    }
                }),
                axios.get(`${API_HOST.url}/transaction?status=ON_DELIVERY`, {
                    headers: {
                        Authorization : res.value
                    }
                })

            ])
            .then(axios.spread((response1, response2, response3)=>{
                const pending = response1.data.data.data
                const success = response2.data.data.data
                const onDelivery = response3.data.data.data
                dispatch({
                    type: 'SET_IN_PROGRESS',
                    value: [...pending, ...success, ...onDelivery]
                })
            }))
            .catch((err)=>{
                ShowError(err.response)
            })
        })
}

export const getPastOrders = () => (dispatch)  => {
    getData('token')
        .then((res)=>{
            axios.all([
                axios.get(`${API_HOST.url}/transaction?status=CANCELLED`, {
                    headers: {
                        Authorization : res.value
                    }
                }),
                axios.get(`${API_HOST.url}/transaction?status=DELIVERED`, {
                    headers: {
                        Authorization : res.value
                    }
                })
            ])
            .then(axios.spread((response1, response2)=>{
                const cancelled = response1.data.data.data
                const delivered = response2.data.data.data
                dispatch({
                    type: 'SET_PAST_ORDERS',
                    value: [...cancelled, ...delivered]
                })
            }))
            .catch((err)=>{
                ShowError(err.response)
            })
        })
}