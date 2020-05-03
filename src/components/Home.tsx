import * as React from "react";

const reactLogo = require("../assets/img/react_logo.svg");

const Home = () => (
  <div className="app">
    <h1>Hi, I'm Supachart Tansutiraphong. I'm a full-stack web developer</h1>
    <p>Foo to the barz</p>
    <img src={reactLogo.default} height="480"/>
  </div>
);

export default Home;
