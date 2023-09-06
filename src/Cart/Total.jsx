import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { dollarUS } from "./CartItem";
import { items } from "../dummyData";
import "./Total.css";

export default function Total() {
  function getItemFromDb(id) {
    return items.find((item) => item.id === id);
  }
  const [cart, setCart] = useContext(CartContext);

  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);

  function handleDeleteAll() {
    setCart([]);
  }

  const calculateTotalCartPrice = () => {
    if (cart.length === 0) {
      return 0;
    }
    let total = 0;
    cart.forEach((item) => {
      total += getItemFromDb(item.id).price * item.count;
    });
    return total;
  };

  const calculateTotalCartItems = () => {
    if (cart.length === 0) {
      return 0;
    }
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  };

  useEffect(() => {
    let totalPrice = calculateTotalCartPrice();
    setTotalCartPrice(totalPrice);
    let totalItems = calculateTotalCartItems();
    setTotalCartItems(totalItems);
  }, [cart]);

  return (
    <div className="cart-total">
      <h5>total:</h5>
      <span>{totalCartItems}</span>
      <span>{dollarUS.format(totalCartPrice)}</span>
      <button onClick={handleDeleteAll}>delete all</button>
    </div>
  );
}
