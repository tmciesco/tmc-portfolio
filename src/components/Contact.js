import React from "react"
import { Heading, Text, Wrapper, FlexRow, FlexCol, Section, Button } from "../base"

const Contact = () => {
	return (
		<Section pb="xl" bg="#092C5C">
			<Wrapper width="m:90%:mt:80%:tl:75%:l">
				<Heading font="xl" pb="sm" pt="md" color="light">
					Contact
				</Heading>
				<FlexRow mb="sm">
					<FlexCol xs="12" sm="3">
						<Heading font="sm3" pb="xs" textAlign="center" color="light">
							Email
						</Heading>
						<Text pb="sm" fontAlign="center" color="light">
							tmciesco@gmail.com
						</Text>
					</FlexCol>
					<FlexCol xs="12" sm="3">
						<Heading font="sm3" pb="xs" textAlign="center" color="light">
							Phone
						</Heading>
						<Text pb="sm" fontAlign="center" color="light">
							802-793-4933
						</Text>
					</FlexCol>
					<FlexCol xs="12" sm="3">
						<Heading font="sm3" pb="xs" textAlign="center" color="light">
							LinkedIn
						</Heading>
						<Text pb="sm" fontAlign="center" color="light">
							linkedin.com/in/troyciesco
						</Text>
					</FlexCol>
					<FlexCol xs="12" sm="3">
						<Heading font="sm3" pb="xs" textAlign="center" color="light">
							Github
						</Heading>
						<Text pb="sm" fontAlign="center" color="light">
							github.com/tmciesco
						</Text>
					</FlexCol>
				</FlexRow>
				<Button mode="secondary">Download Resume</Button>
			</Wrapper>
		</Section>
	)
}

export { Contact }
