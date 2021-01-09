import { showMessage } from "react-native-flash-message"
import { colors } from "../colors"

export const ShowError = (message) => {
    showMessage({
        message: message,
        type: 'default',
        backgroundColor: colors.warning,
        color: colors.white
    })
}

export const showSuccess = (message) => {
    showMessage({
        message: message,
        type: 'success',
        color: colors.white
    })
}