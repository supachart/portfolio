import * as React from "react";
import { element } from 'prop-types';
import { Link } from 'react-router-dom'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <div>
        <a href="https://www.linkedin.com/in/supachart-tansutirapong-b81412b4/">
          <div className="Layout__icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </a>
      </div>
      <div className="Layout__copyright">SUPACHART TANSUTIRAPHONG ©2020</div>
    </footer>
  </div>
)

Layout.propTypes = {
  children: element.isRequired,
};

export default Layout;
