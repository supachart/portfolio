import * as React from "react";
import { element } from 'prop-types';
import { NavLink } from 'react-router-dom'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBars, faHome, faUser, faCode, faHistory, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Layout.scss';

const Layout = ({
  wrapperRef,
  navigation,
  isDesktop,
  isOpen,
  children,
  handleOnClickFaBars,
}) => (
  <div className="Layout">
    <header>
      {isDesktop
      ? (
        <nav className="Layout__header--desktop">
          {navigation.map(({ path, label }) => (
            <NavLink
              key={label}
              exact={path === '/'}
              activeClassName="Layout__header--active"
              to={path}
            >{label}</NavLink>
          ))}
        </nav>
      )
      : (
        <nav className="Layout__header--mobile">
          <div
            onClick={handleOnClickFaBars}
          >
            <FontAwesomeIcon icon={faBars} size="2x"/>
          </div>
        </nav>
      )}
      <div
        id="Layout__navList"
        className={`Layout__navList ${isOpen ? 'show' : 'hide'}`}
        ref={wrapperRef}
        onClick={handleOnClickFaBars}
      >
        <div className="Layout__navContent">
          {navigation.map(({ icon, path, label }) => (
            <NavLink
              key={label}
              exact={path === '/'}
              activeClassName="Layout__header--active"
              to={path}
            >
              <FontAwesomeIcon icon={icon} size="2x" />
            </NavLink>
          ))}
        </div>
      </div>
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
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isOpen, setIsOpen] = React.useState(false);
  const wrapperRef = React.useRef();
  const navigation = [
    { icon: faHome, path: '/', label: 'Home' },
    { icon: faUser, path: '/about', label: 'About' },
    { icon: faCode, path: '/skills', label: 'Skills' },
    { icon: faHistory, path: '/experience', label: 'Experience' },
    { icon: faEnvelope, path: '/contact', label: 'Contact' },
  ];

  useOutsideAlerter(wrapperRef, setIsOpen);
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, []);

  const handleOnClickFaBars = ({ isOpen }) => {
    setIsOpen(!isOpen);
  };

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref, setIsOpen) {
    React.useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false)
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return Layout({
    wrapperRef,
    navigation,
    isDesktop: width >= 1024,
    isOpen,
    children,
    handleOnClickFaBars: () => handleOnClickFaBars({ isOpen }),
  });
}
