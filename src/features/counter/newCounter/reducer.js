import {
  INCREMENT,
  DECREMENT,
  SETBYAMOUNT,
  RESET,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_PRICE,
  UPDATE_QUANTITY,
} from "./actions";

// connect API
let id = 1;

// counter
export const initialState = {
  count: 0,
  // connect API
  items: [
    { uuid: id++, name: "Store Tofu", price: 14, quantity: 1 },
    { uuid: id++, name: "Store Ham", price: 11, quantity: 1 },
  ],
};

export const reducer = (state = initialState, action) => {
  // for counter
  if (action.type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === SETBYAMOUNT) {
    return { ...state, count: Number(state.count) + Number(action.payload) };
  }
  if (action.type === RESET) {
    return { ...initialState };
  }

  // for connect api
  if (action.type === ADD_ITEM) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    return { ...state, items: [...state.items, item] };
  }
  if (action.type === REMOVE_ITEM) {
    const newItems = state.items.filter(
      (item) => item.uuid !== action.payload.uuid
    );
    return { ...state, items: [...newItems] };
  }
  if (action.type === UPDATE_PRICE) {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.uuid === action.payload.uuid) {
          return { ...item, price: action.payload.price };
        }
        return item;
      }),
    };
  }
  if (action.type === UPDATE_QUANTITY) {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.uuid === action.payload.uuid) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      }),
    };
  }

  return state;
};
