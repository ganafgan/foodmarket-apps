const initHome = {
    food: [],
    newTaste: [],
    popular: [],
    recomended: []
}

export const homeReducer = (state=initHome, action) => {
    if (action.type === 'SET_FOOD') {
        return {
            ...state,
            food: action.value
        }
    }
    if (action.type === 'SET_NEW_TASTE') {
        return {
            ...state,
            newTaste: action.value
        }
    }
    if (action.type === 'SET_POPULAR') {
        return {
            ...state,
            popular: action.value
        }
    }
    if (action.type === 'SET_RECOMENDED') {
        return {
            ...state,
            recomended: action.value
        }
    }
    return state
}