import React from "react"
import { Heading, Section, List, ListItem } from "../base"

const Work = () => {
	return (
		<Section mar="sm">
			<Heading size="lg" pb="sm" pt="md">
				Work History
			</Heading>
			<Heading pb="xs" pt="sm">
				Sinoc, Inc.
			</Heading>
			<Heading pb="xs" size="xs">
				Full-Stack Developer
			</Heading>
			<Heading pb="sm" size="xs">
				Nov 2018 - Present
			</Heading>
			<List pl="lg" pb="sm">
				<ListItem>Developed product launch that sold out in apx three weeks</ListItem>
				<ListItem>Leading React and Django development for blockchain project</ListItem>
				<ListItem>Leading agile team as product owner; also in charge of two interns</ListItem>
			</List>

			<Heading pb="xs" pt="sm">
				NICABM
			</Heading>
			<Heading pb="xs" size="xs">
				Web Engineer
			</Heading>
			<Heading pb="sm" size="xs">
				May 2018 - Sep 2018
			</Heading>
			<List pl="lg" pb="sm">
				<ListItem>Rebuilt 200+ page website in team of four; led two interns</ListItem>
				<ListItem>Admin for 1,000+ member blog; built another 500+ member site</ListItem>
				<ListItem>Built ~15 landing and order pages weekly; $100k avg revenue</ListItem>
			</List>

			<Heading pb="xs" pt="sm">
				Ellington Planning Department
			</Heading>
			<Heading pb="xs" size="xs">
				Land Use Technician
			</Heading>
			<Heading pb="sm" size="xs">
				Mar 2014 - Sep 2016
			</Heading>
			<List pl="lg" pb="sm">
				<ListItem>Assisted with launch of new website; go-to for multiple depts</ListItem>
				<ListItem>Managed permit database and processed 100+ permits annually</ListItem>
				<ListItem>Point person for public inquiry; took minutes for six boards</ListItem>
			</List>

			<Heading pb="xs" pt="sm">
				United States Army Reserve, 94th MP Co.
			</Heading>
			<Heading pb="xs" size="xs">
				Military Police; Rank: Corporal
			</Heading>
			<Heading pb="sm" size="xs">
				Jan 2013 - Jan 2019
			</Heading>
			<List pl="lg" pb="sm">
				<ListItem>Trained on communication skills in police/military environment</ListItem>
				<ListItem>Managed soldier info and fitness data for 120+ solider company</ListItem>
				<ListItem>Received Four Army Achievement Medals</ListItem>
			</List>
		</Section>
	)
}

export { Work }
