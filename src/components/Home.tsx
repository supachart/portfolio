import * as React from "react";

import '../assets/scss/Home.scss';

const Home = () => (
  <div className="Home">
    <div className="Home__heroBanner">
      <h1>
        <span>Hi,</span>
        <br />
        <span>I'm </span>
        <span className="Home__hero">Supachart Tansutiraphong.</span>
        <br />
        <span>Full-stack developer.</span>
      </h1>
    </div>
    <div className="Home__submit">CONTACT ME</div>
  </div>
);

export default Home;
