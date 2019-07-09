import React from "react"
import { Section, Heading, Wrapper, FlexRow, FlexCol, Text, Img, Button } from "../base"
import { ReactLogo } from "./ReactLogo"
import nicabmLogo from "../img/nicabm-blue.jpg"
import lendgerLogo from "../img/lendger.png"

const Projects = () => {
	return (
		<Section mt="sm" bg="#f4f4f4">
			<Wrapper style={{ width: "75%" }}>
				<Heading font="xl" pb="lg" pt="md">
					Interesting Projects
				</Heading>
				<FlexRow mt="xl" mb="xl" pt="xl" pb="xl">
					<FlexCol xs="3">
						<Img src={nicabmLogo} height="300px" width="auto" />
					</FlexCol>
					<FlexCol xs="6">
						<Heading pb="xs" font="sm">
							NICABM
						</Heading>
						<Text pb="md">
							The National Institute for the Clinical Application of Behavioral Medicine (NICABM)
							provides online continuing education material for mental health professionals. I
							rebuilt this website in a team of four over the summer of 2018. We took it from an
							outdated, underdesigned, 3,000+ page site to a sleek and efficient site of around 200
							pages. This included landing pages, order pages, product pages, and an infrastructure
							to split-test different marketing material. The site uses a custom Wordpress theme and
							is deployed on AWS.
						</Text>
						<a href="https://www.nicabm.com">
							<Button>Visit Site</Button>
						</a>
					</FlexCol>
				</FlexRow>
				<FlexRow mt="xl" mb="xl" pt="xl" pb="xl">
					<FlexCol xs="6">
						<Heading pb="xs" font="sm">
							Lendger
						</Heading>
						<Text pb="md">
							Lendger is a real estate crowdfunding platform secured by blockchain. This is a
							project I've been working on at Sinoc. Basically, it's a site where borrowers can go
							to secure funding for their real estate projects and lenders can invest stable coins
							in those projects in order to diversify their portfolio. We use React on the front
							end, Django on the back end, and interact with the Ethereum blockchain to conduct
							transactions. The platform beta is not live yet, but we do have a landing page that
							provides more detail.
						</Text>
						<a href="https://www.lendger.io">
							<Button>Visit Site</Button>
						</a>
					</FlexCol>
					<FlexCol xs="3">
						<Img src={lendgerLogo} height="300px" width="auto" />
					</FlexCol>
				</FlexRow>
				<FlexRow mt="xl" mb="xl" pt="xl" pb="xl">
					<FlexCol xs="3">
						<ReactLogo height="300px" width="auto" />
					</FlexCol>
					<FlexCol xs="6">
						<Heading pb="xs" font="sm">
							Design System for React
						</Heading>
						<Text pb="md">
							After attending React GraphQL Academy in winter 2018, I decided I wanted to build my
							own design system/component library for building React-based websites. This system
							takes a lot of inspiration from Evergreen and Grommet, and I referenced the ideas and
							resources provided by The Scenery. I'm constantly updating and improving it (check out
							the repo for this site for the latest), and eventually I'll release it as an npm
							package.
						</Text>
						<a href="https://www.github.com/tmciesco/tmc-portfolio/src/base">
							<Button>Visit Site</Button>
						</a>
					</FlexCol>
				</FlexRow>
			</Wrapper>
		</Section>
	)
}

export { Projects }
