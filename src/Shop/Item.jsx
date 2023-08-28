import React, { useContext } from "react";
import "./Item.css";
import { CartContext } from "../CartContext";
import ItemButtons from "../components/ItemButtons";
import { dollarUS } from "../Cart/CartItem";

export default function Item({ item }) {
  const itemId = item.id;
  const [cart, setCart] = useContext(CartContext);

  function addToCart() {
    // item is in cart
    if (cart.find((item) => item.id === itemId)) {
      setCart([
        ...cart.filter((item) => item.id !== itemId),
        {
          id: itemId,
          count: cart.find((item) => item.id === itemId).count + 1,
        },
      ]);
    } else {
      setCart([...cart, { id: itemId, count: 1 }]);
    }
  }

  return (
    <div className="item">
      <h3>{item.title}</h3>
      <img src={item.img} alt={item.title} />
      <p>{item.description}</p>
      <h4>{dollarUS.format(item.price)}</h4>

      {cart.find((item) => item.id === itemId) === undefined ? (
        <button onClick={addToCart}>Add</button>
      ) : (
        <ItemButtons itemId={itemId} />
      )}
    </div>
  );
}
