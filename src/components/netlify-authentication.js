import React from 'react'

import PropTypes from 'prop-types'

import './netlify-authentication.css'

const NetlifyAuthentication = (props) => {
  return (
    <div className={`netlify-authentication-container ${props.rootClassName} `}>
      <div className="netlify-authentication-container1">
        <button
          type="button"
          className="netlify-authentication-button button logInButton"
        >
          {props.logIn}
        </button>
        <button
          type="button"
          className="netlify-authentication-button1 button logInButton"
        >
          {props.signup}
        </button>
      </div>
    </div>
  )
}

NetlifyAuthentication.defaultProps = {
  logIn: 'Log-In',
  signup: 'Sign Up',
  rootClassName: '',
}

NetlifyAuthentication.propTypes = {
  logIn: PropTypes.string,
  signup: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NetlifyAuthentication
