import React from "react"
import { Section, Heading, Wrapper, Text } from "../base"

const About = () => {
	return (
		<Section id="about" mt="sm" mb="sm">
			<Wrapper width="m:90%:mt:80%:tl:75%:l">
				<Heading font="xl" pb="sm" pt="md">
					About
				</Heading>
				<Heading font="sm3" pb="xs">
					Overview
				</Heading>
				<Text pb="sm" ml="sm">
					I am a 26-year-old full-stack developer from Mansfield, Connecticut (right by Uconn). I
					love building websites and working with computers in general, and I thoroughly enjoy
					taking a design and making it come to life in the browser.
				</Text>
				<Heading font="sm3" pb="xs">
					Background
				</Heading>
				<Text pb="sm" ml="sm">
					I started out as a front end developer, and using tools like React has been my main focus.
					Over the last few years I've expanded into back end code, particularly with Python, and I
					find it really interesting to dig into all of the features within tools like Amazon Web
					Services.
				</Text>
				<Text pb="sm" ml="sm">
					In my spare time I like watching baseball, visiting cool places, and being outside.
				</Text>
				<Heading font="sm3" pb="xs">
					What I'm Doing Now (April 2020)
				</Heading>
				<Text pb="sm" ml="sm">
					Right now I work as a full-stack developer at ten24 and I'm waiting for the baseball
					season to start up.
				</Text>
			</Wrapper>
		</Section>
	)
}

export { About }
