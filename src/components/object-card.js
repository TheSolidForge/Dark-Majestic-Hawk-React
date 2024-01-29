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
          {props.FreePlanPrice}
        </span>
      </div>
      <div className="object-card-container1">
        <span className="object-card-text3 heading3">{props.text}</span>
        <span className="object-card-free-plan-description">
          {props.FreePlanDescription}
        </span>
      </div>
      <div className="object-card-container2">
        <div className="object-card-container3">
          <span className="object-card-text4">{props.text1}</span>
          <span className="object-card-free-plan-features">
            {props.FreePlanFeatures}
          </span>
        </div>
        <div className="object-card-container4">
          <span className="object-card-text5">{props.text2}</span>
          <span className="object-card-free-plan-features1">
            {props.FreePlanFeatures1}
          </span>
        </div>
        <div className="object-card-container5">
          <span className="object-card-text6">{props.text3}</span>
          <span className="object-card-free-plan-features2">
            {props.FreePlanFeatures2}
          </span>
        </div>
        <div className="object-card-container6">
          <span className="object-card-text7">{props.text4}</span>
          <span className="object-card-free-plan-features3">
            {props.FreePlanFeatures3}
          </span>
        </div>
      </div>
      <button className="object-card-button button">{props.button}</button>
    </div>
  )
}

ObjectCard.defaultProps = {
  FreePlanFeatures1: 'Limited storage space',
  text2: '✔',
  text4: '✔',
  FreePlanFeatures: 'Access to website builder',
  FreePlanDescription: 'A basic plan for personal use',
  button: 'Continue with Free',
  FreePlanPrice: '0',
  text3: '✔',
  text1: '✔',
  FreePlanFeatures3: 'Free Plan Feature',
  text: 'Free',
  FreePlanFeatures2: 'Basic customer support',
}

ObjectCard.propTypes = {
  FreePlanFeatures1: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  FreePlanFeatures: PropTypes.string,
  FreePlanDescription: PropTypes.string,
  button: PropTypes.string,
  FreePlanPrice: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  FreePlanFeatures3: PropTypes.string,
  text: PropTypes.string,
  FreePlanFeatures2: PropTypes.string,
}

export default ObjectCard
