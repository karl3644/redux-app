import { useState } from "react";

export default function NewItemForm({ onSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (typeof onSubmit === "function") {
      onSubmit(itemName, itemPrice);
    }
  }

  return (
    <>
      <h1>Connect API</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item:</label>
        <input
          onChange={(e) => setItemName(e.target.value)}
          value={itemName}
          type="text"
          id="item"
          name="item"
        ></input>
        <label htmlFor="price">Price:</label>
        <input
          onChange={(e) => setItemPrice(e.target.value)}
          value={itemPrice}
          type="number"
          id="price"
          name="price"
        ></input>
        <button type="submit">Add item</button>
      </form>
    </>
  );
}
