import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'

import './z-placeholder-octopus-lottie.css'

const ZPlaceholderOctopusLottie = (props) => {
  return (
    <div className="z-placeholder-octopus-lottie-container">
      <Player
        src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
        speed="1"
        autoplay="true"
        background="transparent"
        className="z-placeholder-octopus-lottie-lottie-node"
      ></Player>
    </div>
  )
}

export default ZPlaceholderOctopusLottie
