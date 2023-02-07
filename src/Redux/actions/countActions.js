import { DECREMENT, INCREMENT, RESET } from "../actionTypes/action-types"

export const increment = (num) => {
    return {
        type: INCREMENT,
        payload: num
    }
}
export const decrement = (num) => {
    return {
        type: DECREMENT,
        payload: num
    }
}
export const reset = (num) => {
    return {
        type: RESET,
        payload: num
    }
}
