import React from "react"
import { Section, Heading, Wrapper, Box, Text, FlexCol, FlexRow } from "../base"

const Skills = () => {
	return (
		<Section mar="sm">
			<Wrapper style={{ width: "75%" }}>
				<Heading font="xl" pb="sm" pt="md">
					Skills
				</Heading>
				<FlexRow mb="xl">
					<FlexCol xs="3">
						<Box as="div" elevation="2" bor="card" rad="4px" bg="lightgreen" pad="xl">
							<Text font="lg" textAlign="center" pb="lg">
								Design
							</Text>
							<Text textAlign="center">Photoshop, InDesign, Illustrator, XD</Text>
						</Box>
					</FlexCol>
					<FlexCol xs="3">
						<Box as="div" elevation="2" bor="card" rad="4px" rad="4px" bg="lightgreen" pad="xl">
							<Text font="lg" textAlign="center" pb="lg">
								Front End
							</Text>
							<Text textAlign="center">HTML, CSS, SCSS, JavaScript, React</Text>
						</Box>
					</FlexCol>
					<FlexCol xs="3">
						<Box as="div" elevation="2" bor="card" rad="4px" rad="4px" bg="lightgreen" pad="xl">
							<Text font="lg" textAlign="center" pb="lg">
								Back End
							</Text>
							<Text textAlign="center">Python, Django, Node.js, Express</Text>
						</Box>
					</FlexCol>
				</FlexRow>
				<FlexRow mt="xl">
					<FlexCol xs="3">
						<Box as="div" elevation="2" bor="card" rad="4px" rad="4px" bg="lightgreen" pad="xl">
							<Text font="lg" textAlign="center" pb="lg">
								Database
							</Text>
							<Text textAlign="center">MySQL, GraphQL, PostgreSQL</Text>
						</Box>
					</FlexCol>
					<FlexCol xs="3">
						<Box as="div" elevation="2" bor="card" rad="4px" rad="4px" bg="lightgreen" pad="xl">
							<Text font="lg" textAlign="center" pb="lg">
								Misc. Tech
							</Text>
							<Text textAlign="center">AWS, Wordpress, Agile/Scrum, Blockchain</Text>
						</Box>
					</FlexCol>
					<FlexCol xs="3">
						<Box as="div" elevation="2" bor="card" rad="4px" rad="4px" bg="lightgreen" pad="xl">
							<Text font="lg" textAlign="center" pb="lg">
								Soft Skills
							</Text>
							<Text textAlign="center">Communication, Teamwork, Leadership</Text>
						</Box>
					</FlexCol>
				</FlexRow>
			</Wrapper>
		</Section>
	)
}

export { Skills }
