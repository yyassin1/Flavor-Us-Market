import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Address from "./components/Address";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Flavor from "./components/Flavor";
import Charcoal from "./components/Charcoal";
import HoseMouthp from "./components/HoseMouthp";
import FoilOther from "./components/Foil&Other";
import ShopNavigation from "./components/ShopNavigation";
import MyCart from "./components/MyCart";

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
