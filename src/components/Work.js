import React from "react"
import { Heading, Text, Section, Wrapper, List, ListItem, Img, FlexRow, FlexCol } from "../base"
import sinocLogo from "../img/sinoc-logo.png"
import ten24Logo from "../img/ten24.png"
import nicabmLogo from "../img/nicabm-blue.jpg"
import ellingtonLogo from "../img/ellington.png"
import usarLogo from "../img/usar-logo.png"
import rgqlLogo from "../img/rgqlacademy.png"

const Work = () => {
	return (
		<Section id="experience" mar="sm">
			<Wrapper width="m:90%:mt:80%:tl:75%:l">
				<Heading font="xl" pb="sm" pt="md">
					Experience
				</Heading>
				<Heading font="lg" pb="sm" pt="md" textAlign="center">
					Employment
				</Heading>
				<FlexRow>
					<FlexCol xs="12" sm="3">
						<div style={{ height: "180px", width: "180px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
							<Img src={ten24Logo} height="auto" width="180px" />
						</div>
						<Text pt="sm" pb="xs" font="lg7">
							Ten24 Digital Solutions
						</Text>
						<Text>Full-Stack Developer</Text>
						<Text pb="xs" font="sm">
							<em>Dec 2019 - Present</em>
						</Text>
						<List pl="lg" pb="sm">
							<ListItem>Technical lead for two clients; facilitate production pushes</ListItem>
							<ListItem>Front and back-end work for new projects; support for 10+ clients</ListItem>
							<ListItem>Angular, Coldfusion, and UI/UX work</ListItem>
						</List>
					</FlexCol>
					<FlexCol xs="12" sm="3">
						<Img src={sinocLogo} height="180px" width="auto" />
						<Text pt="sm" pb="xs" font="lg7">
							Sinoc, Inc.
						</Text>
						<Text>Full-Stack Developer</Text>
						<Text pb="xs" font="sm">
							<em>Nov 2018 - Dec 2019</em>
						</Text>
						<List pl="lg" pb="sm">
							<ListItem>Developed product launch that sold out in apx three weeks</ListItem>
							<ListItem>Led React and Django development for blockchain project</ListItem>
							<ListItem>Led agile team as product owner; also in charge of two interns</ListItem>
						</List>
					</FlexCol>
					<FlexCol xs="12" sm="3">
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
					<FlexCol xs="12" sm="3">
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
					<FlexCol xs="12" sm="4">
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
					<FlexCol xs="12" sm="4">
						<Heading font="lg" pb="sm" pt="md">
							Training
						</Heading>
						<Img src={rgqlLogo} height="180px" width="auto" />
						<Text pt="sm" pb="xs" font="lg7">
							React GraphQL Academy
						</Text>
						<Text>London, England</Text>
						<Text pb="xs" font="sm">
							<em>Dec 2018</em>
						</Text>
						<List pl="lg" pb="sm">
							<ListItem>One week on-site training for experienced web developers</ListItem>
							<ListItem>Topics covered include React, Redux, GraphQL, etc.</ListItem>
							<ListItem>Final project was the start of the design system mentioned above</ListItem>
						</List>
					</FlexCol>
				</FlexRow>
			</Wrapper>
		</Section>
	)
}

export { Work }
