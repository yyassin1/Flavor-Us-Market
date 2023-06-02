import React from "react";
import Navigation from "./Navigation";
export default function Address({cartItems}) {
  return (
    <>
      <div className="buttons-container">
        <Navigation cartItems={cartItems}/>
      </div>
      <br />
      <br />
      <div className="addressPage">
        <div>
          <p>
            <strong>1731 7th St NW, 20001, Washington, DC</strong>
          </p>
          <img
            className="addressImg"
            src={`${process.env.PUBLIC_URL}/address.png`}
            alt="Map of address location"
          />
        </div>
        <a href="https://www.instagram.com/flavorus_dc/">
          <i class="fab fa-instagram"></i>
        </a>
        <a class="storeAddress" href="https://goo.gl/maps/g5Ev6MBWa3KSBFS36">
          Click Here to View the Address
        </a>
      </div>
    </>
  );
}
