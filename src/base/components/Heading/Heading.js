import PropTypes from "prop-types"
import React from "react"
import { BaseText } from "../BaseText"

// import theme from '../../Theme'
import { headingSizes, headingColors } from "./Styles"

export const Heading = ({ children, level, ...props }) => {
	return (
		<BaseText as={`h${level}`} fontFamily="Marcellus" {...props}>
			{children}
		</BaseText>
	)
}

export const HeadingColors = Object.keys(headingColors)
export const HeadingLevels = [1, 2, 3, 4, 5, 6]
export const HeadingSizes = Object.keys(headingSizes)
// export const SpacingSizes = Object.keys(theme.spacingSizes);

Heading.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	/** Color of the Heading. Options are 'dark', 'medium', 'light', 'accent', 'danger', and 'success' */
	color: PropTypes.oneOf(HeadingColors),
	/** Hierarchy level of the Heading (ex: h3) */
	level: PropTypes.oneOf(HeadingLevels),
	/** Size of the Heading. Options are 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge' */
	size: PropTypes.oneOf(HeadingSizes)
	// pad: PropTypes.oneOf(SpacingSizes),
	// pt: PropTypes.oneOf(SpacingSizes),
	// pr: PropTypes.oneOf(SpacingSizes),
	// pb: PropTypes.oneOf(SpacingSizes),
	// pl: PropTypes.oneOf(SpacingSizes),
	// mar: PropTypes.oneOf(SpacingSizes),
	// mt: PropTypes.oneOf(SpacingSizes),
	// mr: PropTypes.oneOf(SpacingSizes),
	// mb: PropTypes.oneOf(SpacingSizes),
	// ml: PropTypes.oneOf(SpacingSizes),
}

Heading.defaultProps = {
	color: "dark",
	level: 2,
	font: "md"
}
