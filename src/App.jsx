import { createContext, useContext, useState } from "react";
import "./App.css";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import { CartContext } from "./CartContext";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={[cart, setCart]}>
        <Shop />
        {cart.length > 0 && <Cart />}
      </CartContext.Provider>
    </div>
  );
}
