import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import LogInWidget from '../components/log-in-widget'
import Footer from '../components/footer'
import './log-in.css'

const LogIn = (props) => {
  return (
    <div className="log-in-container">
      <Helmet>
        <title>Log-In - Dark Majestic Hawk</title>
        <meta property="og:title" content="Log-In - Dark Majestic Hawk" />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name5"></NavbarInteractive>
      <LogInWidget rootClassName="log-in-widget-root-class-name"></LogInWidget>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default LogIn
