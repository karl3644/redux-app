import Summary from "./Summary";
import { connect } from "react-redux";
import { selectSubTotal, selectTipAmount, selectTotal } from "./Selectors.js";

const mapStateToProps = (state) => {
  const subtotal = selectSubTotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);

  return {
    subtotal,
    tipAmount,
    total,
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
