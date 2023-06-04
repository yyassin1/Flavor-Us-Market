import React from "react";
import ShopNavigation from "./ShopNavigation";
import Navigation from "./Navigation";
export default function Charcoal({ handleAddToCart, cartItems }) {
  return (
    <div className="shop--charcoal">
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
              src={`${process.env.PUBLIC_URL}/threekings.jpg`}
              alt="Hookah Charcoal"
            />
            <p>Three kings instant light Charcoal </p>
            <h3>$21.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Three kings instant light Charcoal, 10 pack, 10 count in a pack",
                  price: 21.99,
                  image: `${process.env.PUBLIC_URL}/threekings.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/starlight.jpg`}
              alt="Hookah Charcoal"
            />
            <p>Starlight instant light Charcoal </p>
            <h3>$22.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Starlight instant light Charcoal, 10 packs, 10 counts in a pack",
                  price: 22.99,
                  image: `${process.env.PUBLIC_URL}/starlight.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/mya.jpg`}
              alt="Hookah Charcoal"
            />
            <p>MYA Charcoal </p>
            <h3>$18.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "MYA charcoal, 72 counts",
                  price: 18.99,
                  image: `${process.env.PUBLIC_URL}/mya.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/coconara.jpg`}
              alt="Hookah Charcoal"
            />
            <p>COCO NARA square Charcoal </p>
            <h3>$23.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "COCO NARA Square Charcoal",
                  price: 23.99,
                  image: `${process.env.PUBLIC_URL}/coconara.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/goldstar.png`}
              alt="Hookah Charcoal"
            />
            <p>Goldstar instant light Charcoal </p>
            <h3>$21.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Goldstar instant light Charcoal",
                  price: 21.99,
                  image: `${process.env.PUBLIC_URL}/goldstar.png`,
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
