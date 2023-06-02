import React from "react";
import Navigation from "./Navigation";
import ShopNavigation from "./ShopNavigation";
export default function HoseMouthp({ handleAddToCart, cartItems }) {
  return (
    <div className="shop--hoseMouthp">
      <div className="buttons-container">
        <Navigation cartItems={cartItems}/>
      </div>
      <div className="flavor--main">
        <div>
          <ShopNavigation />
        </div>
        <div className="shop--flavor">
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/blackhose.jpg`}
              alt="Hookah Hose"
            />
            <p>Black Hookah hose </p>
            <h3>$9.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Black Hookah Hose",
                  price: 9.99,
                  image: `${process.env.PUBLIC_URL}/blackhose.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/icehose.jpg`}
              alt="Hookah Hose"
            />
            <p>Ice Hookah Hose </p>
            <h3>$11.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Ice Hookah Hose",
                  price: 11.99,
                  image: `${process.env.PUBLIC_URL}/icehose.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/plastichose.jpg`}
              alt="Hookah Hose"
            />
            <p>Disposble Plastic Hose</p>
            <h3>$5.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Disposble Plastic Hose",
                  price: 5.99,
                  image: `${process.env.PUBLIC_URL}/plastichose.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/candymouthp.jpg`}
              alt="Hookah Mouthpiece"
            />
            <p>Candy Hookah Mouth Tips 12 counts </p>
            <h3>$16.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Candy Hookah Tips 12 counts",
                  price: 16.99,
                  image: `${process.env.PUBLIC_URL}/candymouthp.jpg`,
                })
              }
            >
              Add To Cart
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/mouthpiece.jpg`}
              alt="Hookah Mouthpiece"
            />
            <p>Disposble Hookah Mouth Tips 100 count </p>
            <h3>$9.99</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  name: "Disposble Hookah Mouth Tips 100 count",
                  price: 9.99,
                  image: `${process.env.PUBLIC_URL}/mouthpiece.jpg`,
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
