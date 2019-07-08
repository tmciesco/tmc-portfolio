import React from "react"
import { Heading, Text, Section, Wrapper, List, ListItem, Img, FlexRow, FlexCol } from "../base"
import sinocLogo from "../img/sinoc-logo.png"
import nicabmLogo from "../img/nicabm.png"
import ellingtonLogo from "../img/ellington.png"
import usarLogo from "../img/usar-logo.png"
import rgqlLogo from "../img/rgqlacademy.png"

const Work = () => {
	return (
		<Section mar="sm">
			<Wrapper style={{ width: "75%" }}>
				<Heading font="xl" pb="sm" pt="md">
					Experience
				</Heading>
				<Heading font="lg" pb="sm" pt="md" textAlign="center">
					Employment
				</Heading>
				<FlexRow>
					<FlexCol xs="3">
						<Img src={sinocLogo} height="180px" width="auto" />
						<Text pt="sm" pb="xs" font="lg7">
							Sinoc, Inc.
						</Text>
						<Text>Full-Stack Developer</Text>
						<Text pb="xs" font="sm">
							<em>Nov 2018 - Present</em>
						</Text>
						<List pl="lg" pb="sm">
							<ListItem>Developed product launch that sold out in apx three weeks</ListItem>
							<ListItem>Leading React and Django development for blockchain project</ListItem>
							<ListItem>
								Leading agile team as product owner; also in charge of two interns
							</ListItem>
						</List>
					</FlexCol>
					<FlexCol xs="3">
						<Img src={nicabmLogo} height="180px" width="auto" />
						<Text pt="sm" pb="xs" font="lg7">
							NICABM
						</Text>
						<Text>Web Engineer</Text>
						<Text pb="xs" font="sm">
							<em>May 2018 - Sep 2018</em>
						</Text>
						<List pl="lg" pb="sm">
							<ListItem>Rebuilt 200+ page website in team of four; led two interns</ListItem>
							<ListItem>Admin for 1,000+ member blog; built another 500+ member site</ListItem>
							<ListItem>Built ~15 landing and order pages weekly; $100k avg revenue</ListItem>
						</List>
					</FlexCol>
					<FlexCol xs="3">
						<Img src={ellingtonLogo} height="180px" width="auto" />
						<Text pt="sm" pb="xs" font="lg7">
							Ellington Planning Dept
						</Text>
						<Text>Land Use Technician</Text>
						<Text pb="xs" font="sm">
							<em>Mar 2014 - Sep 2016</em>
						</Text>
						<List pl="lg" pb="sm">
							<ListItem>Assisted with launch of new website; go-to for multiple depts</ListItem>
							<ListItem>Managed permit database and processed 100+ permits annually</ListItem>
							<ListItem>Point person for public inquiry; took minutes for six boards</ListItem>
						</List>
					</FlexCol>
				</FlexRow>

				<FlexRow>
					<FlexCol xs="4">
						<Heading font="lg" pb="sm" pt="md">
							Military
						</Heading>
						<Img src={usarLogo} height="180px" width="auto" />
						<Text pt="sm" pb="xs" font="lg7">
							US Army Reserve, 94th MP Co.
						</Text>
						<Text>Military Police; Rank: Corporal</Text>
						<Text pb="xs" font="sm">
							<em>Jan 2013 - Jan 2019</em>
						</Text>
						<List pl="lg" pb="sm">
							<ListItem>Trained on communication skills in police/military environment</ListItem>
							<ListItem>Managed soldier info and fitness data for 120+ solider company</ListItem>
							<ListItem>Received Four Army Achievement Medals</ListItem>
						</List>
					</FlexCol>
					<FlexCol xs="4">
						<Heading font="lg" pb="sm" pt="md">
							Training
						</Heading>
						<Img src={rgqlLogo} height="180px" width="auto" />
						<Text pt="sm" pb="xs" font="lg7">
							React GraphQL Academy
						</Text>
						<Text pb="xs" font="sm">
							<em>Dec 2018</em>
						</Text>
						<Text>
							This is an intensive one-week bootcamp covering React, Redux, GraphQL, and more. It’s
							designed for experienced web developers.
						</Text>
					</FlexCol>
				</FlexRow>
			</Wrapper>
		</Section>
	)
}

export { Work }
