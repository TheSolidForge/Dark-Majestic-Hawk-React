import React from 'react'

import { Helmet } from 'react-helmet'

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
