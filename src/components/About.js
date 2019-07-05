import React from "react"
import { Section, Heading, Wrapper, Text, FlexCol, FlexRow } from "../base"

const About = () => {
	return (
		<Section mt="sm" mb="sm">
			<Wrapper contain>
			<Heading font="xl" pb="sm" pt="md">
				About
			</Heading>
			<FlexRow mb="md">
					<Text pb="sm">
						I am a 26-year-old full-stack developer from Mansfield, Connecticut (right by Uconn). I
						love building websites and working with computers in general, and I thoroughly enjoy
						taking a design and making it come to life in the browser.
					</Text>
			</FlexRow>
			<Text pb="sm">
				I started out as a front end developer, and using tools like React has been my main focus.
				Over the last few years I've expanded into back end code, particularly with Python, and I
				find it really interesting to dig into all of the features within tools like Amazon Web
				Services.
			</Text>
			<Text pb="sm">
				In my spare time I like watching baseball, visiting cool places, and being outside.
			</Text>
			</Wrapper>
		</Section>
	)
}

export { About }
