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
            className="netlify-authentication-button logInButton button"
          >
            {props.logIn}
          </button>
        </div>
      </div>
    </div>
  )
}

NetlifyAuthentication.defaultProps = {
  signup: 'Sign Up',
  logIn: 'Log-In or Register',
  rootClassName: '',
}

NetlifyAuthentication.propTypes = {
  signup: PropTypes.string,
  logIn: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NetlifyAuthentication
