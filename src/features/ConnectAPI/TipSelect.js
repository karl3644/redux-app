export default function TipSelect({ updateTipPercentage = () => {} }) {
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
      }}
    >
      <label htmlFor="tip">How much would you like to tip?</label>
      <select
        onChange={(e) => updateTipPercentage(Number(e.target.value))}
        name="tip"
        id="tip"
      >
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
      </select>
    </div>
  );
}
