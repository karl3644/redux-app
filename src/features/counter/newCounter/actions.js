export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const SETBYAMOUNT = "SETBYAMOUNT"
export const RESET = "RESET"
export const ADD_ITEM = "ADD_ITEM"


// action creators
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const setByAmount = (value) => ({ type: SETBYAMOUNT, payload: value })
export const addItem = (name, price) => ({ type: ADD_ITEM, payload: { name, price} })
export const reset = () => ({ type: RESET })