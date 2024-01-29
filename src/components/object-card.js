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
  freePlanFeatures1: 'Limited storage space',
  text2: '✔',
  text4: '✔',
  freePlanFeatures: 'Access to website builder',
  freePlanDescription: 'A basic plan for personal use',
  button: 'Continue with Free',
  freePlanPrice: '0',
  text3: '✔',
  text1: '✔',
  freePlanFeatures3: 'Free Plan Feature',
  text: 'Free',
  freePlanFeatures2: 'Basic customer support',
}

ObjectCard.propTypes = {
  freePlanFeatures1: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  freePlanFeatures: PropTypes.string,
  freePlanDescription: PropTypes.string,
  button: PropTypes.string,
  freePlanPrice: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  freePlanFeatures3: PropTypes.string,
  text: PropTypes.string,
  freePlanFeatures2: PropTypes.string,
}

export default ObjectCard
