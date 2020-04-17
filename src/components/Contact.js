import React from "react"
import { Heading, Text, Wrapper, FlexRow, FlexCol, Section, Button } from "../base"

const Contact = () => {
	return (
		<Section id="contact" pb="xl" bg="#092C5C">
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
						<a href="https://linkedin.com/in/troyciesco">
							<Text
								pb="sm"
								fontAlign="center"
								color="secondary"
								style={{ textDecoration: "underline" }}
							>
								linkedin.com/in/troyciesco
							</Text>
						</a>
					</FlexCol>
					<FlexCol xs="12" sm="3">
						<Heading font="sm3" pb="xs" textAlign="center" color="light">
							Github
						</Heading>
						<a href="https://github.com/tmciesco">
							<Text
								pb="sm"
								fontAlign="center"
								color="secondary"
								style={{ textDecoration: "underline" }}
							>
								github.com/tmciesco
							</Text>
						</a>
					</FlexCol>
				</FlexRow>
				<a href="https://tmciesco-content.s3.amazonaws.com/img/troyciesco-resume-apr20.pdf">
					<Button mode="secondary" mar="contain" display="block">
						Download Resume
					</Button>
				</a>
			</Wrapper>
		</Section>
	)
}

export { Contact }
