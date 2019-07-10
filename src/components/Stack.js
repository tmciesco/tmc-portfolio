import React from "react"
import { Section, Wrapper, Heading, Text, Box } from "../base"

const Stack = () => {
	return (
		<Section mar="m:sm:mt:lg:t" pad="xs">
			<Wrapper width="m:90%:mt:80%:tl:75%:l">
				<Box as="div" pad="m:xs:mt:lg:t" bg="#555091" elevation="3" rad="4px" bor="card">
					<Heading font="lg" pb="sm" pt="m:xs:mt:md:t" color="light" textAlign="center">
						Favorite <s style={{ fontWeight: "300" }}>Snack</s> Stack
					</Heading>
					<Text textAlign="center" pl="m:xs:mt:xl:t" pr="m:xs:mt:xl:t" color="light">
						I’m not picky - I love learning whichever tool is the right one to get the job done. However, my go-to stack is to use <strong>React</strong> on the front end,{" "}
						<strong>Python</strong> and <strong>Django</strong> on the backend, <strong>GraphQL</strong> for querying and mutating a <strong>PostgreSQL</strong> database, and{" "}
						<strong>AWS</strong> for deploying the project.
					</Text>
					<Text textAlign="center" font="sm" pt="xs" color="light">
						<em>Also, it's probably Sour Patch Kids, but I was recently introduced to beer brittle and I'm a little addicted.</em>
					</Text>
				</Box>
			</Wrapper>
		</Section>
	)
}

export { Stack }
