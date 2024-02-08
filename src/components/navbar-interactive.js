import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NetlifyAuthentication from './netlify-authentication'
import './navbar-interactive.css'

const NavbarInteractive = (props) => {
  return (
    <div className={`navbar-interactive-container ${props.rootClassName} `}>
      <header
        data-thq="thq-navbar"
        className="navbar-interactive-navbar-interactive"
      >
        <div
          data-thq="thq-navbar-nav"
          className="navbar-interactive-desktop-menu"
        >
          <nav className="navbar-interactive-links">
            <Link to="/" className="navbar-interactive-nav1">
              {props.nav1}
            </Link>
            <Link to="/profile-and-resume" className="navbar-interactive-nav11">
              {props.nav12}
            </Link>
            <Link to="/services" className="navbar-interactive-nav2">
              {props.nav2}
            </Link>
            <Link to="/projects" className="navbar-interactive-nav3">
              {props.nav3}
            </Link>
            <Link to="/projects" className="navbar-interactive-nav4">
              {props.nav4}
            </Link>
            <Link to="/contact-and-about" className="navbar-interactive-nav5">
              {props.nav5}
            </Link>
          </nav>
          <div className="navbar-interactive-buttons">
            <button className="navbar-interactive-login button">
              {props.login}
            </button>
            <button className="navbar-interactive-register button">
              {props.register}
            </button>
          </div>
          <NetlifyAuthentication
            rootClassName="netlify-authentication-root-class-name"
            className=""
          ></NetlifyAuthentication>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="navbar-interactive-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="navbar-interactive-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="navbar-interactive-mobile-menu"
        >
          <nav className="navbar-interactive-links1">
            <Link to="/" className="navbar-interactive-nav12">
              {props.nav13}
            </Link>
            <Link to="/profile-and-resume" className="navbar-interactive-nav13">
              {props.nav121}
            </Link>
            <Link to="/services" className="navbar-interactive-nav21">
              {props.nav22}
            </Link>
            <Link to="/projects" className="navbar-interactive-nav31">
              {props.nav32}
            </Link>
            <Link to="/projects" className="navbar-interactive-nav41">
              {props.nav42}
            </Link>
            <Link to="/contact-and-about" className="navbar-interactive-nav51">
              {props.nav52}
            </Link>
          </nav>
          <div className="navbar-interactive-buttons1">
            <button className="navbar-interactive-login1 logInButton button">
              {props.login2}
            </button>
            <button className="navbar-interactive-register1 logInButton button">
              {props.register2}
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

NavbarInteractive.defaultProps = {
  nav2: 'Services',
  nav51: 'Contact',
  nav3: 'Articles',
  text: 'Text',
  login2: 'Login',
  login: 'Login',
  nav12: 'About',
  nav4: 'Projects',
  rootClassName: '',
  nav41: 'Projects',
  nav13: 'The Solid Forge',
  nav5: 'Contact',
  register2: 'Register',
  register: 'Register',
  logo: 'The SolidForge',
  login1: 'Login',
  register1: 'Register',
  nav42: 'Projects',
  nav52: 'Contact',
  logo1: 'COMPANYNAME',
  nav32: 'Articles',
  nav121: 'About',
  nav21: 'Services',
  nav1: 'The Solid Forge',
  nav22: 'Services',
  nav31: 'Articles',
  nav11: 'About',
}

NavbarInteractive.propTypes = {
  nav2: PropTypes.string,
  nav51: PropTypes.string,
  nav3: PropTypes.string,
  text: PropTypes.string,
  login2: PropTypes.string,
  login: PropTypes.string,
  nav12: PropTypes.string,
  nav4: PropTypes.string,
  rootClassName: PropTypes.string,
  nav41: PropTypes.string,
  nav13: PropTypes.string,
  nav5: PropTypes.string,
  register2: PropTypes.string,
  register: PropTypes.string,
  logo: PropTypes.string,
  login1: PropTypes.string,
  register1: PropTypes.string,
  nav42: PropTypes.string,
  nav52: PropTypes.string,
  logo1: PropTypes.string,
  nav32: PropTypes.string,
  nav121: PropTypes.string,
  nav21: PropTypes.string,
  nav1: PropTypes.string,
  nav22: PropTypes.string,
  nav31: PropTypes.string,
  nav11: PropTypes.string,
}

export default NavbarInteractive
