import React from 'react'

import PropTypes from 'prop-types'

import './netlify-authentication.css'

const NetlifyAuthentication = (props) => {
  return (
    <div className={`netlify-authentication-container ${props.rootClassName} `}>
      <div data-netlify-identity-menu className="">
        <div
          data-netlify-identity-button
          className="netlify-authentication-netlify-button logInButton"
        >
          <button
            type="button"
            className="netlify-authentication-button button logInButton"
          >
            {props.logIn}
          </button>
        </div>
      </div>
    </div>
  )
}

NetlifyAuthentication.defaultProps = {
  logIn: 'Log-In or Register',
  signup: 'Sign Up',
  rootClassName: '',
}

NetlifyAuthentication.propTypes = {
  logIn: PropTypes.string,
  signup: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NetlifyAuthentication
