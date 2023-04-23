import { connect } from "react-redux";
import NewItemForm from "./NewItemForm";
import { addItem } from "../counter/newCounter/actions";

// can be explicit - method is useful if needing to calculate using functions
// const matchDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (name, price) => dispatch(addItem(name, price)),
//   };
// };

// or if you just need simple then pass it just an object, it will automatically match dispatch to props
const matchDispatchToProps = {
  onSubmit: (name, price) => addItem(name, price),
};

export const NewItemFormContainer = connect(
  null,
  matchDispatchToProps
)(NewItemForm);
