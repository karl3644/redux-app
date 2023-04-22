export default function MenuItem({item}) {
  return (
    <div>
        <h3>{item.name}</h3>
        <label for="price">Price</label>
        <input type="text" id="price" name="price" value={item.price}></input>
        <label for="quantity">Quantity</label>
        <input type="text" id="quantity" name="quantity" value={item.price}></input>
        <span>Total:</span>
        <button>Remove</button>
    </div>
  )
}
