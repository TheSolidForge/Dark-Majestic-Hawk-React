import React from 'react'

import PropTypes from 'prop-types'

import './log-in-component.css'

const LogInComponent = (props) => {
  return (
    <div className={`log-in-component-container ${props.rootClassName} `}>
      <h1 className="log-in-component-text">{props.text}</h1>
      <div className="log-in-component-container1">
        <input
          type="text"
          placeholder={props.textinputplaceholder}
          className="log-in-component-textinput input"
        />
        <input
          type="text"
          placeholder={props.textinputplaceholder1}
          className="log-in-component-textinput1 input"
        />
      </div>
      <button type="button" className="log-in-component-button button">
        {props.button}
      </button>
    </div>
  )
}

LogInComponent.defaultProps = {
  textinputplaceholder: 'placeholder',
  button: 'Button',
  textinputplaceholder1: 'placeholder',
  rootClassName: '',
  text: 'Log In',
}

LogInComponent.propTypes = {
  textinputplaceholder: PropTypes.string,
  button: PropTypes.string,
  textinputplaceholder1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default LogInComponent
