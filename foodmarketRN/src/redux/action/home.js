import axios from "axios"
import { API_HOST } from "../../config"
import { ShowError } from "../../utils"

export const getFoodData = () => (dispatch) => {
    axios.get(`${API_HOST.url}/food`)
        .then((res)=>{
            dispatch({
                type: 'SET_FOOD',
                value: res.data.data.data
            })
        })
        .catch((err)=>{
            ShowError(err.response)
        })
}

export const getFoodDataByTypes = (types) => (dispatch) => {
    axios.get(`${API_HOST.url}/food?types=${types}`)
        .then((res)=>{
            if (types === 'new_food') {
                dispatch({
                    type: 'SET_NEW_TASTE',
                    value: res.data.data.data
                })
            }
            if (types === 'popular') {
                dispatch({
                    type: 'SET_POPULAR',
                    value: res.data.data.data
                })
            }
            if (types === 'recomended') {
                dispatch({
                    type: 'SET_RECOMENDED',
                    value: res.data.data.data
                })
            }
        })
        .catch((err)=>{
           ShowError(err.response)
        })
}

