import * as React from "react";
import { element } from 'prop-types';
import { NavLink } from 'react-router-dom'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Layout.scss';

const Layout = ({
  navigation,
  children,
}) => (
  <div className="Layout">
    <header>
      <nav className="Layout__header">
        {navigation.map(({ path, label }) => (
          <NavLink
            key={label}
            exact={path === '/'}
            activeClassName="Layout__header--active"
            to={path}
          >{label}</NavLink>
        ))}
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

export default ({ children }) => {
  const navigation = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  return Layout({
    navigation,
    children,
  });
}
