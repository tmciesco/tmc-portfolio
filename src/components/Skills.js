import React from "react"
import { Section, Heading, Text, FlexCol, FlexRow } from "../base"

const Skills = () => {
	return (
		<Section mar="sm">
			<Heading size="lg" pb="sm" pt="md">
				Skills
			</Heading>
			<FlexRow mb="md">
				<FlexCol xs="3">
					<Text size="lg">Design</Text>
					<Text>Photoshop, InDesign, Illustrator, XD</Text>
				</FlexCol>
				<FlexCol xs="3">
					<Text size="lg">Front End</Text>
					<Text>HTML, CSS, SCSS, JavaScript, React</Text>
				</FlexCol>
				<FlexCol xs="3">
					<Text size="lg">Back End</Text>
					<Text>Python, Django, Node.js, Express</Text>
				</FlexCol>
			</FlexRow>
			<FlexRow>
				<FlexCol xs="3">
					<Text size="lg">Database</Text>
					<Text>MySQL, GraphQL, PostgreSQL</Text>
				</FlexCol>
				<FlexCol xs="3">
					<Text size="lg">Misc. Tech</Text>
					<Text>AWS, Wordpress, Agile/Scrum, Blockchain</Text>
				</FlexCol>
				<FlexCol xs="3">
					<Text size="lg">Soft Skills</Text>
					<Text>Communication, Teamwork, Leadership</Text>
				</FlexCol>
			</FlexRow>
		</Section>
	)
}

export { Skills }
