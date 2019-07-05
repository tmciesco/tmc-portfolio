import React from "react"
import { Section, Heading, Text, Img, FlexCol, FlexRow } from "../base"
import troy from "../img/troy.jpg"

const About = () => {
	return (
		<Section mar="sm">
			<Heading size="lg" pb="sm" pt="md">
				About
			</Heading>
			<FlexRow mb="md">
				<FlexCol xs="7">
					<Text size="lg" pb="sm">
						I am a 26-year-old full-stack developer from Mansfield, Connecticut (right by Uconn). I love building websites and working with computers in general, and I thoroughly
						enjoy taking a design and making it come to life in the browser.
					</Text>
				</FlexCol>
				<FlexCol xs="5">
					<Img src={troy} alt="troy" width="90%" height="auto" margin="0 auto" elevation="3" />
				</FlexCol>
			</FlexRow>
			<Text size="lg" pb="sm">
				I started out as a front end developer, and using tools like React has been my main focus. Over the last few years I've expanded into back end code, particularly with
				Python, and I find it really interesting to dig into all of the features within tools like Amazon Web Services.
			</Text>
			<Text size="lg" pb="sm">
				In my spare time I like watching baseball, visiting cool places, and being outside.
			</Text>
		</Section>
	)
}

export { About }
