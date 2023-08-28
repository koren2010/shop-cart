import React from "react";
import { items } from "../dummyData";
import Item from "./Item";
import "./Shop.css";

export default function Shop() {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="items">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
