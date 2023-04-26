export default function MenuItem({
  item,
  updateQuantity = () => {},
  updatePrice = () => {},
  remove = () => {},
  itemTotal = 0,
}) {
  return (
    <div>
      <h3>{item.name}</h3>

      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        onChange={(e) => updatePrice(e.target.value)}
        value={item.price}
      ></input>

      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        onChange={(e) => updateQuantity(e.target.value)}
        value={item.quantity}
      ></input>

      <span>Total:{itemTotal}</span>
      <button onClick={remove}>Remove</button>
    </div>
  );
}
