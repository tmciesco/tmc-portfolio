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
					<FlexCol xs="12" lg='3'>
						<Box as="div" elevation="2" bor="card" rad="4px" bg="lightgreen" pad="xl" width='300px'>
							<Text font="lg" textAlign="center" pb="lg">
								Design
							</Text>
							<Text font="sm" textAlign="center">Photoshop, InDesign</Text>
							<Text font="sm" textAlign="center">Illustrator, XD</Text>
						</Box>
					</FlexCol>
					<FlexCol xs="12" lg='3'>
						<Box as="div" elevation="2" bor="card" rad="4px" rad="4px" bg="lightgreen" pad="xl" width='300px'>
							<Text font="lg" textAlign="center" pb="lg">
								Front End
							</Text>
							<Text font='sm' textAlign="center">HTML, CSS/SCSS</Text>
							<Text font='sm' textAlign="center">JavaScript, React</Text>
						</Box>
					</FlexCol>
					<FlexCol xs="12" lg='3'>
						<Box as="div" elevation="2" bor="card" rad="4px" rad="4px" bg="lightgreen" pad="xl" width='300px'>
							<Text font="lg" textAlign="center" pb="lg">
								Back End
							</Text>
							<Text font='sm' textAlign="center">Python, Django</Text>
							<Text font='sm' textAlign="center">Node.js, Express</Text>
						</Box>
					</FlexCol>
				</FlexRow>
				<FlexRow mt="xl">
					<FlexCol xs="12" lg='3'>
						<Box as="div" elevation="2" bor="card" rad="4px" rad="4px" bg="lightgreen" pad="xl" width='300px'>
							<Text font="lg" textAlign="center" pb="lg">
								Database &amp; APIs
							</Text>
							<Text font='sm' textAlign="center">MySQL, PostgreSQL</Text>
							<Text font='sm' textAlign="center">GraphQL, REST</Text>
						</Box>
					</FlexCol>
					<FlexCol xs="12" lg='3'>
						<Box as="div" elevation="2" bor="card" rad="4px" rad="4px" bg="lightgreen" pad="xl" width='300px'>
							<Text font="lg" textAlign="center" pb="lg">
								Misc. Tech
							</Text>
							<Text font='sm' textAlign="center">AWS, Wordpress</Text>
							<Text font='sm' textAlign="center">Agile/Scrum, Blockchain</Text>
						</Box>
					</FlexCol>
					<FlexCol xs="12" lg='3'>
						<Box as="div" elevation="2" bor="card" rad="4px" rad="4px" bg="lightgreen" pad="xl" width='300px'>
							<Text font="lg" textAlign="center" pb="lg">
								Soft Skills
							</Text>
							<Text font='sm' textAlign="center">Communication, Teamwork</Text>
							<Text font='sm' textAlign="center">Leadership, Enthusiasm</Text>
						</Box>
					</FlexCol>
				</FlexRow>
			</Wrapper>
		</Section>
	)
}

export { Skills }
