import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import "./ItemButtons.css";

export default function ItemButtons({ itemId }) {
  const [cart, setCart] = useContext(CartContext);

  const [count, setCount] = useState(
    cart.find((item) => item.id === itemId).count
  );
  // util
  function removeFromCart() {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }
  //   handlers
  function handlePlus() {
    setCount((prevCount) => Number(prevCount) + 1);
  }
  function handleMinus() {
    if (count > 1) {
      setCount((prevCount) => Number(prevCount) - 1);
    } else {
      removeFromCart();
    }
  }
  function handleRemove() {
    removeFromCart();
  }
  function handleChange(e) {
    if (e.target.value <= 0) {
      removeFromCart();
    } else {
      setCount(() => e.target.value);
    }
  }

  function updateCart() {
    removeFromCart();
    setCart((prevCart) => [...prevCart, { id: itemId, count: count }]);
  }

  useEffect(() => {
    updateCart();
  }, [count]);

  useEffect(() => {
    setCount(() => cart.find((item) => item.id === itemId).count);
  }, [cart]);

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <input type="number" value={count} onChange={handleChange} />
      <button onClick={handlePlus}>+</button>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
}
