import * as React from "react";
import { element } from 'prop-types';
import { Link } from 'react-router-dom'

import './Layout.scss';

const Layout = ({ children }) => (
  <div className="Layout">
    <header>
      <nav className="Layout__header">
        <Link to='/' >Home</Link>
        <div>About</div>
        <Link to='/skills'>Skills</Link>
        <Link to='/experience'>Experience</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </header>
    <main className="Layout__content">{children}</main>
    <footer className="Layout__footer">
      <div>foo</div>
    </footer>
  </div>
)

Layout.propTypes = {
  children: element.isRequired,
};

export default Layout;
