import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Address from "./Address";
import Contact from "./Contact";
import Product from "./Product";
import Home from "./Home";
import Shop from "./Shop";
import Flavor from "./Flavor";
import Charcoal from "./Charcoal";
import HoseMouthp from "./HoseMouthp";
import FoilOther from "./Foil&Other";
import ShopNavigation from "./ShopNavigation";
import MyCart from "./MyCart";

export default function RouteSwitch() {
  const [cartItems, setCartItems] = React.useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleDelete = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App cartItems={cartItems} />} />
        <Route path="/home" element={<Home cartItems={cartItems} />} />
        <Route path="/address" element={<Address cartItems={cartItems} />} />
        <Route path="/contact" element={<Contact cartItems={cartItems} />} />
        <Route path="/product" element={<Product cartItems={cartItems} />} />
        <Route
          path="/mycart"
          element={<MyCart cartItems={cartItems} handleDelete={handleDelete} />}
          cartItems={cartItems}
        />
        <Route path="/shop" element={<Shop cartItems={cartItems} />} />
        <Route
          path="/shop/navigation"
          element={<ShopNavigation cartItems={cartItems} />}
        />
        <Route
          path="/shop/flavor"
          element={
            <Flavor
              handleAddToCart={handleAddToCart}
              handleDelete={handleDelete}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/shop/charcoal"
          element={
            <Charcoal
              handleAddToCart={handleAddToCart}
              handleDelete={handleDelete}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/shop/hoseMouthp"
          element={
            <HoseMouthp
              handleAddToCart={handleAddToCart}
              handleDelete={handleDelete}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/shop/foilOther"
          element={
            <FoilOther
              handleAddToCart={handleAddToCart}
              handleDelete={handleDelete}
              cartItems={cartItems}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
