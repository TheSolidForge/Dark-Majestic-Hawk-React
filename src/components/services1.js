import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard4 from './feature-card4'
import './services1.css'

const Services1 = (props) => {
  return (
    <div className={`services1-container ${props.rootClassName} `}>
      <div className="services1-features">
        <h1 className="services1-text">
          <span>Discover our</span>
          <br></br>
          <span>unique features</span>
        </h1>
        <div className="services1-separator"></div>
        <div className="services1-container1">
          <div className="services1-container2">
            <FeatureCard4 rootClassName="rootClassName1"></FeatureCard4>
            <FeatureCard4 rootClassName="rootClassName4"></FeatureCard4>
            <FeatureCard4 rootClassName="rootClassName3"></FeatureCard4>
            <FeatureCard4 rootClassName="rootClassName2"></FeatureCard4>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="services1-image"
          />
        </div>
      </div>
    </div>
  )
}

Services1.defaultProps = {
  rootClassName: '',
}

Services1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Services1
