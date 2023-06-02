import React from "react";
import Navigation from "./Navigation";

export default function Product({cartItems}) {
  return (
    <>
      <div className="buttons-container">
        <Navigation cartItems={cartItems}/>
      </div>
      <br />
      <br />
      <div className="hookahProduct">
        <div className="productList">
          <ul>
            <h4>Hookah Flavors</h4>
            <li>Al-fahkr</li>
            <li>Adalya</li>
            <li>Fumari</li>
            <li>Non-tobacco products</li>
          </ul>
          <img
            className="productImages"
            src={`${process.env.PUBLIC_URL}/flavor.jpg`}
            alt="Hookah Flavor"
          />
        </div>
        <div className="productList">
          <ul>
            <h4>Hookah Charcoal</h4>
            <li>Three-Kings</li>
            <li>Mya</li>
            <li>Black king</li>
          </ul>
          <img
            className="productImages"
            src={`${process.env.PUBLIC_URL}/coal.jpg`}
            alt="Hookah coal"
          />
        </div>
        <div className="productList">
          <ul>
            <h4>Hookah Brands</h4>
            <li>mya</li>
            <li>Khalil Mamoon</li>
            <li>B2 Hookah Stems</li>
          </ul>
          <img
            className="productImages"
            src={`${process.env.PUBLIC_URL}/hookahcollection.jpg`}
            alt="Hookah collection"
          />
        </div>
        <div className="productList">
          <ul>
            <h4>Other accessories</h4>
            <li>Thongs</li>
            <li>Coal Burner</li>
            <li>Wind protector</li>
          </ul>
          <img
            className="productImages"
            src={`${process.env.PUBLIC_URL}/accessories.jpg`}
            alt="Hookah Flavor"
          />
        </div>
      </div>
    </>
  );
}
