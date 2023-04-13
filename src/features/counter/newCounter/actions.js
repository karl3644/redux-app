export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const SETBYAMOUNT = "SETBYAMOUNT"
export const RESET = "RESET"


// action creators
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const setByAmount = (value) => ({ type: SETBYAMOUNT, payload: value })
export const reset = () => ({ type: RESET })