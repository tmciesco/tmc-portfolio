import React from "react"

import PropTypes from "prop-types"

import { FlexRowStyles, FlexColStyles, columnSizes } from "./Styles"

export const FlexRow = ({ cn, children, ...props }) => {
	return (
		<FlexRowStyles className={cn} {...props}>
			{children}
		</FlexRowStyles>
	)
}

export const FlexCol = ({ cn, children, xs, ...props }) => {
	return (
		<FlexColStyles className={cn} xs={xs} {...props}>
			{children}
		</FlexColStyles>
	)
}

const ColumnSizes = Object.keys(columnSizes)

FlexCol.propTypes = {
	/** @ignore */
	/** Size of the Column on the xs screen size. Options are 1 through 12 */
	xs: PropTypes.oneOf(ColumnSizes),
	sm: PropTypes.oneOf(ColumnSizes),
	md: PropTypes.oneOf(ColumnSizes),
	lg: PropTypes.oneOf(ColumnSizes),
	xl: PropTypes.oneOf(ColumnSizes),
	xxl: PropTypes.oneOf(ColumnSizes)
}

FlexCol.defaultProps = {
	alignItems: "center"
}

FlexRow.defaultProps = {
	justifyContent: "space-around"
}
