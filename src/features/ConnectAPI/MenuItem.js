export default function MenuItem({
  item,
  updateQuantity = () => {},
  updatePrice = () => {},
  remove = () => {},
}) {
  return (
    <div>
      <h3>{item.name}</h3>

      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        name="price"
        onChange={(e) => updatePrice(e.target.value)}
        value={item.price}
      ></input>

      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        onChange={(e) => updateQuantity(e.target.value)}
        value={item.quantity}
      ></input>

      <span>Total:</span>
      <button onClick={remove}>Remove</button>
    </div>
  );
}
