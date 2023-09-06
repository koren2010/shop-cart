import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import { CartContext } from "./CartContext";

export default function App() {
  const [items, setItems] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("http://localhost:8080/items");
      const items = await response.json();
      setItems(items);
    }
    fetchItems();
  }, []);

  return (
    <div className="App">
      <CartContext.Provider value={[cart, setCart]}>
        <Shop items={items} />
        {cart.length > 0 && <h2>Cart</h2>}
        <div className="cart-container">
          {cart.length > 0 && <Cart className="cart" />}
        </div>
      </CartContext.Provider>
    </div>
  );
}
