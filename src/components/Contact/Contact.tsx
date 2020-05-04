import * as React from "react";

const Contact = () => (
  <div className="Contact">
    <div className="Contact__title">
      <h1>Contact me</h1>
    </div>
    <div className="Contact__form">
      <form>
        <ul>
          <li><input type="text" placeholder="Name"/></li>
          <li><input type="text" placeholder="Email"/></li>
          <li><input type="text" placeholder="Subject"/></li>
          <li><textarea placeholder="Message"/></li>
        </ul>
      </form>
    </div>
  </div>
);

export default Contact;
