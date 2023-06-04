import React from "react";
import ShopNavigation from "./ShopNavigation";
import Navigation from "./Navigation";
export default function Flavor({ handleAddToCart, cartItems }) {
  const [isAddingToCart, setIsAddingToCart] = React.useState(
    Array(5).fill(false)
  );
  const handleClick = (item, index) => {
    const newIsAddingToCart = [...isAddingToCart];
    newIsAddingToCart[index] = true;

    setIsAddingToCart(newIsAddingToCart);

    setTimeout(() => {
      newIsAddingToCart[index] = false;
      setIsAddingToCart(newIsAddingToCart);
      handleAddToCart(item);
    }, 4000);
  };

  return (
    <div>
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
              src={`${process.env.PUBLIC_URL}/apple.png`}
              alt="Hookah Flavor"
            />
            <p>Alfakhr Two Apple flavor, 250g </p>
            <h3>$14.99</h3>
            <button
              disabled={isAddingToCart[0]}
              onClick={() =>
                handleClick({
                  name: "Alfakhr Two Apple flavor, 250g",
                  price: 14.99,
                  image: `${process.env.PUBLIC_URL}/apple.png`,
                },
                0
                )
              }
            >
              {isAddingToCart[0] ? "Adding to Cart..." : "Add To Cart"}
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/orangeMint.webp`}
              alt="Hookah Flavor"
            />
            <p>Alfakhr Orange With Mint flavor, 250g </p>
            <h3>$14.99</h3>
            <button
              disabled={isAddingToCart[1]}
              onClick={() =>
                handleClick({
                  name: "Alfakhr Orange With Mint flavor, 250g",
                  price: 14.99,
                  image: `${process.env.PUBLIC_URL}/orangeMint.webp`,
                },
                1
                )
              }
            >
              {isAddingToCart[1] ? "Adding to Cart..." : "Add To Cart"}
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/blueberrymint.jpg`}
              alt="Hookah Flavor"
            />
            <p>Alfakhr Blueberry with Mint flavor, 250g </p>
            <h3>$14.99</h3>
            <button
              disabled={isAddingToCart[2]}
              onClick={() =>
                handleClick({
                  name: "Alfakhr Blueberry with Mint flavor, 250g",
                  price: 14.99,
                  image: `${process.env.PUBLIC_URL}/blueberrymint.jpg`,
                },
                2
                )
              }
            >
              {isAddingToCart[2] ? "Adding to Cart..." : "Add To Cart"}
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/watermelonmint.jpg`}
              alt="Hookah Flavor"
            />
            <p>Alfakhr Watermelon with Mint flavor, 250g </p>
            <h3>$14.99</h3>
            <button
              disabled={isAddingToCart[3]}
              onClick={() =>
                handleClick({
                  name: "Alfakhr Watermelon with Mint flavor, 250g ",
                  price: 14.99,
                  image: `${process.env.PUBLIC_URL}/watermelonmint.jpg`,
                },
                3
                )
              }
            >
              {isAddingToCart[3] ? "Adding to Cart..." : "Add To Cart"}
            </button>
          </div>
          <div className="flavor--box">
            <img
              className="flavor--img"
              src={`${process.env.PUBLIC_URL}/mint.png`}
              alt="Hookah Flavor"
            />
            <p>Alfakhr Mint flavor, 250g </p>
            <h3>$14.99</h3>
            <button
              disabled={isAddingToCart[4]}
              onClick={() =>
                handleClick({
                  name: "Alfakhr Mint flavor, 250g",
                  price: 14.99,
                  image: `${process.env.PUBLIC_URL}/mint.png`,
                },
                4
                )
              }
            >
              {isAddingToCart[4] ? "Adding to Cart..." : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
