export default function Summary({ subtotal = 0, tipAmount = 0, total = 0 }) {
  return (
    <>
      <p>
        Subtotal <span>£{subtotal}</span>
      </p>
      <p>
        Tip amount <span>£{tipAmount}</span>
      </p>
      <p>
        Total <span>£{total}</span>
      </p>
    </>
  );
}
