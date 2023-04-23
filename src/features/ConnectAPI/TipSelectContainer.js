import { connect } from "react-redux";
import TipSelect from "./TipSelect";
import { updateTipPercentage } from "../counter/newCounter/actions";

const mapStateToProps = (state) => {
  return {
    tipPercentage: state.tipPercentage,
  };
};

const mapDispatchToProps = {
  updateTipPercentage,
};

export const TipSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TipSelect);
