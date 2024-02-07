import React from 'react'

import PropTypes from 'prop-types'

import LogInComponent from './log-in-component'
import './log-in-widget.css'

const LogInWidget = (props) => {
  return (
    <div className={`log-in-widget-container ${props.rootClassName} `}>
      <div className="log-in-widget-container1">
        <img
          alt={props.imagealt1}
          src={props.imagesrc1}
          className="log-in-widget-image"
        />
        <LogInComponent
          rootClassName="log-in-component-root-class-name"
          className=""
        ></LogInComponent>
      </div>
    </div>
  )
}

LogInWidget.defaultProps = {
  text: 'Log In',
  imagealt1: 'image',
  rootClassName: '',
  textinputplaceholder: 'placeholder',
  imagesrc1: '/Brand/gimp-%20solidforge%20business%20card%20back-400h.jpg',
  imagesrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imagealt: 'image',
  textinputplaceholder1: 'placeholder',
}

LogInWidget.propTypes = {
  text: PropTypes.string,
  imagealt1: PropTypes.string,
  rootClassName: PropTypes.string,
  textinputplaceholder: PropTypes.string,
  imagesrc1: PropTypes.string,
  imagesrc: PropTypes.string,
  imagealt: PropTypes.string,
  textinputplaceholder1: PropTypes.string,
}

export default LogInWidget
