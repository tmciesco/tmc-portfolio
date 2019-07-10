import React from "react"
import { Section, Heading, Wrapper, Button, Img, Box } from "../base"
import troy from "../img/troy.jpg"

const Hero = () => {
	return (
		<Section bg="#92BEE7" minHeight="65vh" pt="xl" position="relative" bb="ylw">
			<Box as="div" pt="xl" pb="xl">
				<Wrapper width="m:90%:mt:80%:tl:75%:l">
					<Heading color="dark" fontM="lg" fontT="hu" pt="xxl">
						Hello!
					</Heading>
					<Heading color="dark" fontM="md" fontT="hu">
						My name is <span style={{ color: "#f6f8ff", textShadow: "-2px 4px #004637" }}>Troy</span>.
					</Heading>
					<Heading color="dark" fontM="sm" fontT="lg" fontWeight="3" pb="md">
						I <code style={{ fontSize: "6.0rem" }}>code</code> for fun and profit.
					</Heading>
					<Button mode="primary" width="20rem">
						Get In Touch
					</Button>
				</Wrapper>
			</Box>
			<Img src={troy} alt="troy" radtl="4px" radbl="4px" b width="40%" height="auto" margin="0 auto" elevation="3" position="absolute" top="m::mt:200px:t" bottom="m:-85px:mt::t" right="0" zIndex="3" />
		</Section>
	)
}

export { Hero }
