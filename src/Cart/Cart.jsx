import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import CartItem from "./CartItem";
import "./Cart.css"

export default function Cart() {
  const [cart, setCart] = useContext(CartContext);

  function handleDeleteAll() {
    setCart([]);
  }

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} itemId={item.id} count={item.count} />
      ))}

      <button onClick={handleDeleteAll}>delete all</button>
    </div>
  );
}
