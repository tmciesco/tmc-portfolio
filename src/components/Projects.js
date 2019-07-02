import React from "react"
import { Section, Heading, Text } from "../base"

const Projects = () => {
	return (
		<Section mar="sm">
			<Heading size="lg" pb="md" pt="md">
				Interesting Projects
			</Heading>
			<Heading pb="xs" size="sm">
				nicabm.com
			</Heading>
			<Text size="lg" pb="md">
				Training for mental health professionals. Rebuilt with a team of 4 in summer 2018. Live site.
			</Text>
			<Heading pb="xs" size="sm">
				Lendger
			</Heading>
			<Text size="lg" pb="md">
				A blockchain-based real estate crowdfunding platfrom. Under production - private repo.
			</Text>
			<Heading pb="xs" size="sm">
				Design System/Component Library in React
			</Heading>
			<Text size="lg" pb="md">
				Hand-built component system with theming to make building React sites faster. This site uses a lot of its elements.
			</Text>
		</Section>
	)
}

export { Projects }
