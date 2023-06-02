import React from "react";
import Navigation from "./Navigation";
import ShopNavigation from "./ShopNavigation";
export default function FoilOther({ handleAddToCart, cartItems }) {
  return (
    <div className="shop--hoseMouthp">
      <div className="buttons-container">
        <Navigation cartItems={cartItems} />
      </div>
      <div className="flavor--main">
        <div>
          <ShopNavigation />
        </div>
        <div className="shop--flavor">
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/prefoil.jpg`}
              alt="Hookah Foil"
            />
            <p>Pre Poked Aluminum Foil 100 count </p>
            <h3>$8.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Pre Poked Aluminum Foil 100 count",
                  price: 8.99,
                  image: `${process.env.PUBLIC_URL}/prefoil.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/prefoil2.jpg`}
              alt="Hookah Foil"
            />
            <p>Pre Poked Aluminum Foil 50 count </p>
            <h3>$6.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Pre Poked Aluminum Foil 50 count",
                  price: 6.99,
                  image: `${process.env.PUBLIC_URL}/prefoil2.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/foil.jpg`}
              alt="Hookah Foil"
            />
            <p>Non Poked Aluminum Foil</p>
            <h3>$15.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Non Poked Aluminum Foil",
                  price: 22.99,
                  image: `${process.env.PUBLIC_URL}/foil.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/burner2.jpg`}
              alt="Hookah Burner"
            />
            <p>Fumari stove Hookah Burner </p>
            <h3>$14.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Fumari stove Hookah Burner",
                  price: 14.99,
                  image: `${process.env.PUBLIC_URL}/burner2.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/burner.png`}
              alt="Hookah Burner"
            />
            <p>Fumari Electric Hookah Burner </p>
            <h3>$13.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Fumari Electric Hookah Burner",
                  price: 13.99,
                  image: `${process.env.PUBLIC_URL}/burner.png`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
