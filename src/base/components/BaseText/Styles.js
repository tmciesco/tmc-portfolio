import styled from "styled-components"

import theme from "../../Theme"

import {
	bg,
	bgColor,
	bgAttachment,
	bgBlendMode,
	bgClip,
	bgImg,
	bgOrigin,
	bgPosition,
	bgRepeat,
	bgSize,
	alignContent,
	alignItems,
	alignSelf,
	color,
	display,
	height,
	minHeight,
	overflow,
	justifyContent,
	position,
	textAlign,
	width,
	zIndex,
	top,
	right,
	bottom,
	left,
	textFontSize,
	headingFontSize,
	fontWeight,
	fontFamily
} from "../../CssProps"

const { spacingSizes, borderOptions, animations, elevations } = theme

export const boxElevations = {
	...elevations
}

/* Everything related to specific element styles has to come first, otherwise editing stuff later wont work */
const baseText = styled.span`
	${props => (props.as === "p" ? textFontSize : headingFontSize)};
	${props => animations[props.animation]};
	box-shadow: ${props => boxElevations[props.elevation]};
	${bgColor};
	${bg};
	${bgAttachment};
	${bgBlendMode};
	${bgClip};
	${bgImg};
	${bgOrigin};
	${bgPosition};
	${bgRepeat};
	${bgSize};
	${alignContent};
	${alignItems};
	${alignSelf};
	${color};
	${display};
	${height};
	${minHeight};
	${overflow};
	${justifyContent};
	${position};
	${textAlign};
	${width};
	${zIndex};
	${top};
	${right};
	${bottom};
	${left};
	${spacingSizes};
	${borderOptions};
	${fontWeight};
	${fontFamily};
`

export const elements = {
	h1: baseText.withComponent("h1"),
	h2: baseText.withComponent("h2"),
	h3: baseText.withComponent("h3"),
	h4: baseText.withComponent("h4"),
	h5: baseText.withComponent("h5"),
	h6: baseText.withComponent("h6"),
	p: baseText.withComponent("p"),
	code: baseText.withComponent("code")
}
