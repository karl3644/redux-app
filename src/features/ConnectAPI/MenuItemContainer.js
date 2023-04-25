import { connect } from "react-redux";
import {
  removeItem,
  updatePrice,
  updateQuantity,
} from "../counter/newCounter/actions";
import MenuItem from "./MenuItem";
import { selectSingleItemTotal } from "./Selectors.js";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.item.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.item.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.item.uuid, quantity)),
  };
};
const mapStateToProps = (state, props) => ({
  itemTotal: selectSingleItemTotal(state, props),
});

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
