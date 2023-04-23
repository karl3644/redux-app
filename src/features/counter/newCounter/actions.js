export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SETBYAMOUNT = "SETBYAMOUNT";
export const RESET = "RESET";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// action creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const setByAmount = (value) => ({ type: SETBYAMOUNT, payload: value });
export const addItem = (name, price) => ({
  type: ADD_ITEM,
  payload: { name, price },
});
export const removeItem = (uuid) => ({ type: REMOVE_ITEM, payload: { uuid } });
export const updatePrice = (uuid, price) => ({
  type: UPDATE_PRICE,
  payload: { uuid, price },
});
export const updateQuantity = (uuid, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { uuid, quantity },
});
export const reset = () => ({ type: RESET });
