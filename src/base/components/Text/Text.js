import React from "react"
import PropTypes from "prop-types"
import { BaseText } from "../BaseText"

import { paragraphColors } from "./Styles"

export const Text = ({ children, ...props }) => {
	return <BaseText {...props}>{children}</BaseText>
}

// export const ParagraphSizes = Object.keys(paragraphSizes)
export const ParagraphColors = Object.keys(paragraphColors)
// export const SpacingSizes = Object.keys(theme.spacingSizes);

Text.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	/** Color of the Paragraph. Options are 'dark', 'medium', 'light', 'accent', 'success', and 'danger' */
	color: PropTypes.oneOf(ParagraphColors),
	/** If set, removes margin on Paragraph instance */
	noMargin: PropTypes.bool,
	/** If set, removes the max-width on Paragraph instance */
	noMaxWidth: PropTypes.bool
	/** Size of the Paragraph. Options are 'small', 'medium', 'large' */
	// size: PropTypes.oneOf(ParagraphSizes),
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

Text.defaultProps = {
	color: "dark",
	as: "p",
	font: "md"
}
