import React from "react"
import { Section, Heading, Wrapper, Button, Img, Box } from "../base"
import troy from "../img/troy.jpg"

const Hero = () => {
	return (
		<Section bg="#002b44" minHeight="55vh" pt="xl" position="relative" bb="grn">
			<Box as="div" pt="xl" pb="xl">
				<Wrapper style={{ width: "1024px", minWidth: "80%" }}>
					<Heading color="light" font="hu" pt="xxl">
						Hello!
					</Heading>
					<Heading color="light" font="hu">
						My name is <span style={{ color: "lightgreen" }}>Troy.</span>
					</Heading>
					<Heading color="light" font="lg3" pb="md">
						I <code style={{ fontSize: "6.0rem" }}>code</code> for fun and profit.
					</Heading>
					<Button mode="primary" width="250px">
						Get In Touch
					</Button>
				</Wrapper>
			</Box>
			<Img
				src={troy}
				alt="troy"
				radtl="4px"
				radbl="4px"
				b
				width="40%"
				height="auto"
				margin="0 auto"
				elevation="3"
				position="absolute"
				top="150px"
				right="0"
				zIndex="3"
			/>
		</Section>
	)
}

export { Hero }
