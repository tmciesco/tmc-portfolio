import React from "react"
import { Heading, Text, Section, Img } from "../base"
import rgqlLogo from "../img/rgqlacademy.png"
const Training = () => {
	return (
		<Section mar="sm">
			<Heading size="lg" pb="sm" pt="md">
				Training
			</Heading>
			<Img src={rgqlLogo} height="180px" width="auto" />
			<Heading pb="xs" pt="sm">
				React GraphQL Academy
			</Heading>
			<Heading pb="sm" size="xs">
				December 2018
			</Heading>
			<Text>
				This is an intensive one-week bootcamp covering React, Redux, GraphQL, and more. It’s
				designed for experienced web developers.
			</Text>
		</Section>
	)
}

export { Training }
