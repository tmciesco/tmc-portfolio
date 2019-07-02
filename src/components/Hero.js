import React from "react"
import { Section, Heading, Wrapper, Button, FlexCol } from "../base"

const Hero = () => {
	return (
		<Section>
			<Wrapper contain>
				<FlexCol xs="12">
					<Heading color="primary" size="xxl" pt="xxl" center>
						Hello!
					</Heading>
					<Heading color="dark" size="xxl" pt="lg" center>
						My name is Troy.
					</Heading>
					<Heading color="dark" pt="md" pb="md" center>
						I'm a developer from Connecticut.
					</Heading>
					<Button>Get In Touch</Button>
				</FlexCol>
			</Wrapper>
		</Section>
	)
}

export { Hero }
