import React, { useContext } from "react";
import { items } from "../dummyData";
import { CartContext } from "../CartContext";
import "./CartItem.css";
import ItemButtons from "../components/ItemButtons";

export const dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  useGrouping: true,
  maximumSignificantDigits: 3,
});

export function getItem(id) {
  return items.find((item) => item.id === id);
}
export default function CartItem({ itemId, count }) {
  const itemInDb = getItem(itemId);

  return (
    <div className="cart-item">
      <span>{itemInDb.title}</span>
      <span>{count}</span>
      <span>{dollarUS.format(itemInDb.price * count)}</span>
      <ItemButtons itemId={itemId} className="buttons" />
    </div>
  );
}
