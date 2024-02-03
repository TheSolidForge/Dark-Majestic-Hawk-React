import React from 'react'

import PropTypes from 'prop-types'

import LogInComponent from './log-in-component'
import './log-in-widget.css'

const LogInWidget = (props) => {
  return (
    <div className={`log-in-widget-container ${props.rootClassName} `}>
      <div className="log-in-widget-container1">
        <img
          src={props.imagesrc1}
          alt={props.imagealt1}
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
  imagesrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imagealt: 'image',
  imagesrc1: '/Brand/gimp-%20solidforge%20business%20card%20back-400h.jpg',
  imagealt1: 'image',
  text: 'Log In',
  textinputplaceholder: 'placeholder',
  textinputplaceholder1: 'placeholder',
  rootClassName: '',
}

LogInWidget.propTypes = {
  imagesrc: PropTypes.string,
  imagealt: PropTypes.string,
  imagesrc1: PropTypes.string,
  imagealt1: PropTypes.string,
  text: PropTypes.string,
  textinputplaceholder: PropTypes.string,
  textinputplaceholder1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default LogInWidget
