import { DECREMENT, INCREMENT, RESET } from "../actionTypes/action-types"

const InitialState = {
    count: 0,
    
}

const countReducer = (state = InitialState, {type, payload}) => {
    switch (type) {
        case INCREMENT:
            return {...state, count: state.count + payload}
            case DECREMENT:
                return {...state, count: state.count - payload}
                case RESET:
                    return {...state, count: state.count = 0}
            default:
                return state;
    }

}
export default countReducer;