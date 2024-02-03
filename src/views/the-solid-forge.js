import React from 'react'

import { Helmet } from 'react-helmet'

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
        <nav className="the-solid-forge-nav">
          <span className="the-solid-forge-nav1">About</span>
          <span className="the-solid-forge-nav2">Services</span>
          <span className="the-solid-forge-nav3">Articles</span>
          <span className="the-solid-forge-nav4">Projects</span>
          <span className="the-solid-forge-nav5">Contact</span>
        </nav>
      </div>
      <img
        src="/Brand/web%20landing%20logo.svg"
        alt="image"
        className="the-solid-forge-image"
      />
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default TheSolidForge
