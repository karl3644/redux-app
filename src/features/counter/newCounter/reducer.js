import { INCREMENT, DECREMENT, SETBYAMOUNT, RESET, ADD_ITEM } from "./actions";

// connect API
let id = 1;

// counter
export const initialState = { count: 0,
    // connect API
    items: [
    { uuid: id++, name: "Store Tofu", price: 14, quantity: 1 },
    { uuid: id++, name: "Store Ham", price: 11, quantity: 1 }
] };


export const reducer = (state = initialState, action) => {
    // for counter
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

    // for connect api
    if(action.type === ADD_ITEM) {
        const item = { uuid: id++, quantity: 1, ...action.payload }
        return { ...state, items: [ ...state.items, item ]}
    }
    
    return state;
}