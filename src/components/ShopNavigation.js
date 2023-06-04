import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Flavor from "./Flavor";
import Charcoal from "./Charcoal";
import FoilOther from "./Foil&Other";
import HoseMouthp from "./HoseMouthp";

export default function ShopNavigation({cartItems}) {
  return (
    <div className="shop-container">
      <div className="shop--nav">
        <Link to="/shop/flavor" className="button">
          Flavor
        </Link>
        <Link to="/shop/charcoal" className="button">
          Charcoal
        </Link>
        <Link to="/shop/hoseMouthp" className="button">
          Hose & Mouthpieces
        </Link>
        <Link to="/shop/foilOther" className="button">
          Aluminum Foil and other accessories
        </Link>
      </div>
      <div class="vertical-line"></div>
      <div className="shop--display">
        <Routes>
          <Route path="/shop/flavor" element={<Flavor cartItems={cartItems}/>} />
          <Route path="/shop/charcoal" element={<Charcoal cartItems={cartItems}/>} />
          <Route path="/shop/hoseMouthp" element={<HoseMouthp cartItems={cartItems}/>} />
          <Route path="/shop/foilOther" element={<FoilOther cartItems={cartItems}/>} />
        </Routes>
      </div>
    </div>
  );
}
