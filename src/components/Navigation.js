import { Link } from "react-router-dom";

function Navigation({ cartItems = [] }) {
  return (
    <div className="nav--container">
      <div className="header-container">
        <h1 className="headee">Flavor Us Market</h1>
        <h5>Discover indulgence in every puff</h5>
      </div>
      <div className="buttons">
        <Link to="/home" className="button">
          Home
        </Link>
        <Link to="/product" className="button">
          Product
        </Link>
        <Link to="/contact" className="button">
          Contact
        </Link>
        <Link to="/shop" className="button">
          Shop
        </Link>
        <Link to="/address" className="button">
          Address
        </Link>
        <Link to="/mycart" className="button">
          My Cart
          {cartItems && cartItems.length > 0 && (
            <sup>
              <strong>
                <span> {cartItems.length}</span>
              </strong>
            </sup>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
