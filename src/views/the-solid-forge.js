import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/contact-and-about" className="the-solid-forge-nav1">
            About
          </Link>
          <Link to="/services" className="the-solid-forge-nav2">
            Services
          </Link>
          <Link to="/projects" className="the-solid-forge-nav3">
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
