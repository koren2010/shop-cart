import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import CartItem, { dollarUS } from "./CartItem";
import "./Cart.css";
import Total from "./Total";

export default function Cart() {
  const [cart, setCart] = useContext(CartContext);

  return (
    <>
      {/* <h1 className="cart-header">Cart</h1> */}
      <div className="cart">
        <div className="cart-items">
          <table className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} itemId={item.id} count={item.count} />
            ))}
          </table>
        </div>
        <Total className="total" />
      </div>
    </>
  );
}
