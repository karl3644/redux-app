import {
  INCREMENT,
  DECREMENT,
  SETBYAMOUNT,
  RESET,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_PRICE,
  UPDATE_QUANTITY,
  UPDATE_TIPPERCENTAGE,
} from "./actions";
import { produce } from "immer";

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
  tipPercentage: 0,
};

export const reducer = produce((state = initialState, action) => {
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
    state.items.push(item);
  }
  if (action.type === REMOVE_ITEM) {
    const newItems = state.items.filter(
      (item) => item.uuid !== action.payload.uuid
    );
    state.items = newItems;
  }
  if (action.type === UPDATE_PRICE) {
    const item = state.items.find((item) => item.uuid === action.payload.uuid);
    item.price = parseInt(action.payload.price, 10);
  }
  if (action.type === UPDATE_QUANTITY) {
    const item = state.items.find((item) => item.uuid === action.payload.uuid);
    item.quantity = parseInt(action.payload.quantity, 10);
  }

  if (action.type === UPDATE_TIPPERCENTAGE) {
    state.tipPercentage = action.payload;
  }
}, initialState);

// reducer not wrapper in immer
// export const reducer = (state = initialState, action) => {
//   // for counter
//   if (action.type === INCREMENT) {
//     return { ...state, count: state.count + 1 };
//   }
//   if (action.type === DECREMENT) {
//     return { ...state, count: state.count - 1 };
//   }
//   if (action.type === SETBYAMOUNT) {
//     return { ...state, count: Number(state.count) + Number(action.payload) };
//   }
//   if (action.type === RESET) {
//     return { ...initialState };
//   }

//   // for connect api
//   if (action.type === ADD_ITEM) {
//     const item = { uuid: id++, quantity: 1, ...action.payload };
//     return { ...state, items: [...state.items, item] };
//   }
//   if (action.type === REMOVE_ITEM) {
//     const newItems = state.items.filter(
//       (item) => item.uuid !== action.payload.uuid
//     );
//     return { ...state, items: [...newItems] };
//   }
//   if (action.type === UPDATE_PRICE) {
//     // using immer
//     return produce(state, (draftState) => {
//       const item = draftState.items.find(
//         (item) => item.uuid === action.payload.uuid
//       );
//       item.price = parseInt(action.payload.price, 10);
//     });

//     // original without immer
//     // return {
//     //   ...state,
//     //   items: state.items.map((item) => {
//     //     if (item.uuid === action.payload.uuid) {
//     //       return { ...item, price: action.payload.price };
//     //     }
//     //     return item;
//     //   }),
//     // };
//   }
//   if (action.type === UPDATE_QUANTITY) {
//     return produce(state, (draftState) => {
//       const item = draftState.items.find(
//         (item) => item.uuid === action.payload.uuid
//       );
//       item.quantity = parseInt(action.payload.quantity, 10);
//     });
//   }

//   if (action.type === UPDATE_TIPPERCENTAGE) {
//     return {
//       ...state,
//       tipPercentage: action.payload,
//     };
//   }

//   return state;
// };
