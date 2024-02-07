import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import SmallSpacer from '../components/small-spacer'
import Footer from '../components/footer'
import './account.css'

const Account = (props) => {
  return (
    <div className="account-container">
      <Helmet>
        <title>Account - Dark Majestic Hawk</title>
        <meta property="og:title" content="Account - Dark Majestic Hawk" />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name5"></NavbarInteractive>
      <div className="account-container1">
        <div className="account-container2">
          <SmallSpacer rootClassName="small-spacer-root-class-name7"></SmallSpacer>
          <img
            src="/Brand/web%20landing%20logo.svg"
            alt="image"
            className="account-image"
          />
        </div>
        <div className="account-container3">
          <SmallSpacer rootClassName="small-spacer-root-class-name9"></SmallSpacer>
          <img
            src="/Brand/gimp-%20solidforge%20business%20card%20back-200h.jpg"
            alt="image"
            className="account-image1"
          />
        </div>
      </div>
      <SmallSpacer rootClassName="small-spacer-root-class-name8"></SmallSpacer>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Account
