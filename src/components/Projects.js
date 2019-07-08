import React from "react"
import { Section, Heading, Wrapper, Text, Img } from "../base"
import { ReactLogo } from "./ReactLogo"
import nicabmLogo from "../img/nicabm.png"
import lendgerLogo from "../img/lendger.png"

const Projects = () => {
	return (
		<Section mt="sm" bg="#f4f4f4">
			<Wrapper contain>
				<Heading size="lg" pb="md" pt="md">
					Interesting Projects
				</Heading>
				<Img src={nicabmLogo} />
				<Heading pb="xs" size="sm">
					nicabm.com
				</Heading>
				<Text size="lg" pb="md">
					Training for mental health professionals. Rebuilt with a team of 4 in summer 2018. Live
					site.
				</Text>
				<Img src={lendgerLogo} />
				<Heading pb="xs" size="sm">
					Lendger
				</Heading>
				<Text size="lg" pb="md">
					A blockchain-based real estate crowdfunding platfrom. Under production - private repo.
				</Text>
				<ReactLogo />
				<Heading pb="xs" size="sm">
					Design System/Component Library in React
				</Heading>
				<Text size="lg" pb="md">
					Hand-built component system with theming to make building React sites faster. This site
					uses a lot of its elements.
				</Text>
			</Wrapper>
		</Section>
	)
}

export { Projects }
