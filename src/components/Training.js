import React from "react"
import { Heading, Text, Section } from "../base"

const Training = () => {
	return (
		<Section mar="sm">
			<Heading size="lg" pb="sm" pt="md">
				Training
			</Heading>
			<Heading pb="xs" pt="sm">
				React GraphQL Academy
			</Heading>
			<Heading pb="sm" size="xs">
				December 2018
			</Heading>
			<Text>This is an intensive one-week bootcamp covering React, Redux, GraphQL, and more. It’s designed for experienced web developers.</Text>
		</Section>
	)
}

export { Training }
