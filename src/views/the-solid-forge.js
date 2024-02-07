import React from 'react'

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
        <meta property="og:title" content="The Solid Forge" />
      </Helmet>
      <div className="the-solid-forge-container1">
        <span className="the-solid-forge-logo">The Solid Forge</span>
        <div className="the-solid-forge-container2">
          <NetlifyAuthentication rootClassName="netlify-authentication-root-class-name1"></NetlifyAuthentication>
          <div
            data-netlify-identity-menu
            className="the-solid-forge-netlify-container"
          >
            <div className="the-solid-forge-container3">
              <img
                src="/Brand/web%20landing%20logo.svg"
                alt="image"
                className="the-solid-forge-image"
              />
            </div>
            <div
              data-netlify-identity-button
              className="the-solid-forge-netlify-button logInButton"
            >
              <img
                src="/Images/orange%20calendula%20officinalis-200w.png"
                alt="image"
                className="the-solid-forge-image1"
              />
              <label className="the-solid-forge-text">Label</label>
              <span>Text</span>
            </div>
          </div>
        </div>
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name6"></NavbarInteractive>
      </div>
      <img
        alt="image"
        src="/Brand/web%20landing%20logo.svg"
        className="the-solid-forge-image2"
      />
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default TheSolidForge
