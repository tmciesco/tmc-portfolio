import React from "react"
import { Box } from "../Box"

export const Wrapper = ({ children, ...props }) => {
	return (
		<Box as="div" mar="contain" {...props}>
			{children}
		</Box>
	)
}
