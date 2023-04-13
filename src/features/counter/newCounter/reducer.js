import { INCREMENT, DECREMENT, SETBYAMOUNT,RESET } from "./actions";

export const initialState = { count: 0 };

export const reducer = (state = initialState, action) => {
    if(action.type === INCREMENT) {
        return { ...state, count: state.count + 1}
    }
    if(action.type === DECREMENT) {
        return { ...state, count: state.count - 1}
    }
    if(action.type === SETBYAMOUNT) {
        return { ...state, count: Number(state.count) + Number(action.payload)}
    }
    if(action.type === RESET) {
        return { ...initialState}
    }
    
    return state;
}