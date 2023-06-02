import React from "react";
import Navigation from "./Navigation";
import ShopNavigation from "./ShopNavigation";
export default function Shop({ cartItems }) {
  return (
    <div>
      <div className="buttons-container">
        <Navigation cartItems={cartItems}/>
      </div>
      <ShopNavigation />
    </div>
  );
}
