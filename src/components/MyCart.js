import React from "react";
import Navigation from "./Navigation";

export default function MyCart({ cartItems, handleDelete }) {
  const handleDeleteItem = (index) => {
    if (handleDelete) {
      handleDelete(index);
    }
  };
  React.useEffect(() => {
    if (cartItems) {
      console.log("Bingo");
    }
  }, [cartItems]);
  return (
    <div className="container">
      <div className="buttons-container">
        <Navigation cartItems={cartItems} />
      </div>
      <div className="content">
        {cartItems && cartItems.length > 0 ? (
          <div className="cart-items">
            <h1>My Cart</h1>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => handleDeleteItem(index)}>Delete</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-cart">
            <img
              className="emptycart"
              src={`${process.env.PUBLIC_URL}/empty.jpg`}
              alt="Hookah Flavor"
            />
          </div>
        )}
      </div>
    </div>
  );
}
