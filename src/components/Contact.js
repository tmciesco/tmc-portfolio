import React from "react"
import { Heading, Text, Wrapper, FlexRow, FlexCol, Section, Button } from "../base"

const Contact = () => {
	return (
		<Section>
			<Wrapper style={{ width: "75%" }}>
				<Heading font="xl" pb="sm" pt="md">
					Contact
				</Heading>
				<Text pb="sm">tmciesco@gmail.com</Text>
				<Text pb="sm">802-793-4933</Text>
				<Text pb="sm">linkedin.com/in/troyciesco</Text>
				<Text pb="sm">github.com/tmciesco</Text>
				<Button>Download Resume</Button>
			</Wrapper>
		</Section>
	)
}

export { Contact }
