import { useState, useEffect } from "react"
import { MenuItemsContainer } from "./MenuItemsContainer"
import useCalculator from "./useCalculator"

export default function Calculator() {
const [itemName, setItemName] = useState("")
const [itemPrice, setItemPrice] = useState(0)

const { addItem } = useCalculator()

  return (
    <div>
        <h1>Connect API</h1>

        <label for="item">Item:</label>
        <input onChange={(e) => setItemName(e.target.value)} value={itemName} type="text" id="item" name="item"></input>

        <label for="price">Price:</label>
        <input onChange={(e) => setItemPrice(e.target.value)} value={itemPrice} type="number" id="price" name="price"></input>

        <button onClick={() => addItem(itemName, itemPrice)}>Add item</button>

        <div>
            <h2>Menu items</h2>
            <MenuItemsContainer />
        </div>

    </div>
  )
}
