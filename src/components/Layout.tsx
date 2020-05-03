import * as React from "react";
import { element } from 'prop-types';
import { Link } from 'react-router-dom'

const Layout = ({ children }) => (
  <div>
    <nav>
      <Link to='/' >Home</Link>
      <div>About</div>
      <div>Skills</div>
      <div>Experience</div>
      <div>Contact</div>
    </nav>
    <div>{children}</div>
    <footer></footer>
  </div>
)

Layout.propTypes = {
  children: element.isRequired,
};

export default Layout;
