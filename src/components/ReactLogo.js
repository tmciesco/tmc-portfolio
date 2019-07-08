import React from "react"
import styled, { keyframes } from "styled-components"
import { Img } from "../base"
import reactLogo from "../img/react-logo.svg"

const AppLogoSpin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }`

const ReactLogoStyles = styled(Img)`
	animation: ${AppLogoSpin} infinite 20s linear;
	height: 40vmin;
	pointer-events: none;
`

const ReactLogo = () => {
	return <ReactLogoStyles src={reactLogo} />
}

export { ReactLogo }
