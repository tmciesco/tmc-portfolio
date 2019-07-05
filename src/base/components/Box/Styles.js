import styled from "styled-components"

import theme from "../../Theme"

import { buttonStyles } from "../Button/Styles"
import { FlexStyles } from "../Flex/Styles"
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
	fontSize,
	fontWeight
} from "../../CssProps"

const { spacingSizes, borderOptions, animations, elevations } = theme

export const boxElevations = {
	...elevations
}

/* Everything related to specific element styles has to come first, otherwise editing stuff later wont work */
const boxBase = styled.span`
	${props => props.as === "button" && buttonStyles};
	${props => props.flex && FlexStyles};
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
	${fontSize};
	${fontWeight};
`

export const elements = {
	span: boxBase.withComponent("span"),
	div: boxBase.withComponent("div"),
	img: boxBase.withComponent("img"),
	vid: boxBase.withComponent("video"),
	section: boxBase.withComponent("section"),
	button: boxBase.withComponent("button"),
	h1: boxBase.withComponent("h1"),
	h2: boxBase.withComponent("h2"),
	h3: boxBase.withComponent("h3"),
	h4: boxBase.withComponent("h4"),
	h5: boxBase.withComponent("h5"),
	h6: boxBase.withComponent("h6")
}
