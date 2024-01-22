import React from 'react'

import PropTypes from 'prop-types'

import './small-spacer.css'

const SmallSpacer = (props) => {
  return (
    <div className={`small-spacer-container ${props.rootClassName} `}></div>
  )
}

SmallSpacer.defaultProps = {
  rootClassName: '',
}

SmallSpacer.propTypes = {
  rootClassName: PropTypes.string,
}

export default SmallSpacer
