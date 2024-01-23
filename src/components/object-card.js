import React from 'react'

import PropTypes from 'prop-types'

import './object-card.css'

const ObjectCard = (props) => {
  return (
    <div className="object-card-pricing-card">
      <div className="object-card-container">
        <span className="object-card-text">
          <span>$</span>
          <span></span>
        </span>
        <span className="object-card-free-plan-price">
          {props.freePlanPrice}
        </span>
      </div>
      <div className="object-card-container1">
        <span className="object-card-text3 heading3">{props.text}</span>
        <span className="object-card-free-plan-description">
          {props.freePlanDescription}
        </span>
      </div>
      <div className="object-card-container2">
        <div className="object-card-container3">
          <span className="object-card-text4">{props.text1}</span>
          <span className="object-card-free-plan-features">
            {props.freePlanFeatures}
          </span>
        </div>
        <div className="object-card-container4">
          <span className="object-card-text5">{props.text2}</span>
          <span className="object-card-free-plan-features1">
            {props.freePlanFeatures1}
          </span>
        </div>
        <div className="object-card-container5">
          <span className="object-card-text6">{props.text3}</span>
          <span className="object-card-free-plan-features2">
            {props.freePlanFeatures2}
          </span>
        </div>
        <div className="object-card-container6">
          <span className="object-card-text7">{props.text4}</span>
          <span className="object-card-free-plan-features3">
            {props.freePlanFeatures3}
          </span>
        </div>
      </div>
      <button className="object-card-button button">{props.button}</button>
    </div>
  )
}

ObjectCard.defaultProps = {
  button: 'Continue with Free',
  text: 'Free',
  freePlanDescription: 'A basic plan for personal use',
  freePlanPrice: '0',
  text1: '✔',
  freePlanFeatures: 'Access to website builder',
  text2: '✔',
  freePlanFeatures1: 'Limited storage space',
  text3: '✔',
  freePlanFeatures2: 'Basic customer support',
  text4: '✔',
  freePlanFeatures3: 'Free Plan Feature',
}

ObjectCard.propTypes = {
  button: PropTypes.string,
  text: PropTypes.string,
  freePlanDescription: PropTypes.string,
  freePlanPrice: PropTypes.string,
  text1: PropTypes.string,
  freePlanFeatures: PropTypes.string,
  text2: PropTypes.string,
  freePlanFeatures1: PropTypes.string,
  text3: PropTypes.string,
  freePlanFeatures2: PropTypes.string,
  text4: PropTypes.string,
  freePlanFeatures3: PropTypes.string,
}

export default ObjectCard
