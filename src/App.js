import "./App.css";
import { Outlet } from "react-router-dom";
import React from "react";
import Navigation from "./Navigation";
function App({cartItems}) {
  return (
    <div>
      <div className="buttons-container">
        <Navigation cartItems={cartItems}/>
      </div>
      <br />
      <br />
      <div className="homePage">
        <p className="homeParagraph">
          Welcome to Flavor Us Market! We're a family-based business that's
          passionate about bringing people together over the shared experience
          of smoking hookah. Our selection of high-quality hookahs and shisha
          flavors are carefully curated to provide a memorable and enjoyable
          smoking experience. Whether you're a seasoned pro or just starting
          out, we have something for everyone. Come browse our collection and
          join the Flavor Us Market family today!
        </p>
      </div>
      <a href="https://www.instagram.com/flavorus_dc/">
        <i class="fab fa-instagram"></i>
      </a>
      <div className="dynamic-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
