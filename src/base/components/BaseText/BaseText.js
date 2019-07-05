import React from "react"
import PropTypes from "prop-types"

import { elements, boxElevations } from "./Styles"

export const BaseText = ({ children, cn, bg, height, width, as, src, elevation, ...props }) => {
	const Element = elements[`${as}`]
	return (
		<Element
			as={as}
			className={cn}
			bg={bg}
			height={height}
			width={width}
			src={src}
			elevation={elevation}
			{...props}
		>
			{children}
		</Element>
	)
}

export const BoxElevations = Object.keys(boxElevations)

BaseText.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	elevation: PropTypes.oneOf(BoxElevations)
}

BaseText.defaultProps = {
	as: "p"
}
