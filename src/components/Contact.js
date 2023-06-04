import React from "react";
import Navigation from "./Navigation";
export default function Contact({cartItems}) {
  return (
    <div>
      <div className="buttons-container">
        <Navigation cartItems={cartItems}/>
      </div>
      <br />
      <div className="information">
        <div className="information1">
          <h2>Contact Us</h2>
          <br />
          <br />
          <form className="form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <br />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <br />

            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
            <br />
            <br />

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="8" required></textarea>
            <br />
            <br />

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="information2">
          <p>
            <strong>Phone:</strong> +1(202) 299-9868
          </p>
          <p>
            <strong>Email:</strong> flavorusmarket@gmail.com
          </p>
          <p>
            <strong>Hours:</strong> <br />
            <strong>Monday - Saturday</strong>
            <br />
            10:00 am - 10:00 pm <br />
            <strong>Sunday</strong>
            <br />
            10:00 am - 9:00 pm
          </p>
          <a href="https://www.instagram.com/flavorus_dc/">
            <img
              src={`${process.env.PUBLIC_URL}/insta.png`}
              alt="InstgramIcon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
