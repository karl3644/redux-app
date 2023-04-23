import { connect } from "react-redux";
import {
  removeItem,
  updatePrice,
  updateQuantity,
} from "../counter/newCounter/actions";
import MenuItem from "./MenuItem";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.item.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.item.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.item.uuid, quantity)),
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
