import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NetlifyAuthentication from '../components/netlify-authentication'
import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'
import './the-solid-forge.css'

const TheSolidForge = (props) => {
  return (
    <div className="the-solid-forge-container">
      <Helmet>
        <title>The Solid Forge</title>
        <meta
          name="description"
          content="The SOLIDFORGEis a company focused on advanced manufacturing techniques, complex enterprise IT implementations, and full 3D support, computation and analysis."
        />
        <meta property="og:title" content="The Solid Forge" />
        <meta
          property="og:description"
          content="The SOLIDFORGEis a company focused on advanced manufacturing techniques, complex enterprise IT implementations, and full 3D support, computation and analysis."
        />
      </Helmet>
      <div className="the-solid-forge-container1">
        <span className="the-solid-forge-logo">The Solid Forge</span>
        <div className="the-solid-forge-container2">
          <NetlifyAuthentication rootClassName="netlify-authentication-root-class-name1"></NetlifyAuthentication>
          <div
            data-netlify-identity-menu
            className="the-solid-forge-netlify-container"
          >
            <div
              data-netlify-identity-button
              className="the-solid-forge-netlify-button logInButton"
            >
              <label className="the-solid-forge-text">Label</label>
              <span className="the-solid-forge-text1">Account</span>
            </div>
          </div>
          <div className="the-solid-forge-container3">
            <nav className="the-solid-forge-nav">
              <Link to="/contact-and-about" className="the-solid-forge-nav1">
                About
              </Link>
              <Link to="/services" className="the-solid-forge-nav2">
                Services
              </Link>
              <Link to="/articles" className="the-solid-forge-nav3">
                Articles
              </Link>
              <Link to="/projects" className="the-solid-forge-nav4">
                Projects
              </Link>
              <Link to="/contact-and-about" className="the-solid-forge-nav5">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name6"></NavbarInteractive>
      </div>
      <img
        alt="image"
        src="/Brand/web%20landing%20logo.svg"
        className="the-solid-forge-image"
      />
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default TheSolidForge
