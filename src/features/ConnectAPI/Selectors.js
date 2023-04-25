import { createSelector } from "reselect";

export const selectSingleItem = (state, props) => {
  return state.items.find((item) => {
    return item.uuid === props.item.uuid;
  });
};

export const selectSingleItemTotal = createSelector(
  [selectSingleItem],
  (item) => {
    return item.price * item.quantity;
  }
);

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSingleItemSubTotal = createSelector(
  [selectItems],
  (items) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
);

export const selectSubTotal = createSelector([selectItems], (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

export const selectTipAmount = createSelector(
  [selectSubTotal, selectTipPercentage],
  (subTotal, tipPercentage) => {
    return (subTotal * tipPercentage) / 100;
  }
);

export const selectTotal = createSelector(
  [selectSubTotal, selectTipAmount],
  (subTotal, tipAmount) => {
    return subTotal + tipAmount;
  }
);
