import React from "react"
import { Section, Wrapper, Heading, Text, Box } from "../base"

const Stack = () => {
	return (
		<Section mar="lg" pad="xs">
			<Wrapper w={75}>
				<Box as="div" pad="lg" bg="lightblue" elevation="3" rad="4px" bor="card">
					<Heading font="lg" pb="sm" pt="md" textAlign="center">
						Favorite <s style={{ fontWeight: "300" }}>Snack</s> Stack
					</Heading>
					<Text textAlign="center" pl='xl' pr='xl'>
						I’m not picky - I love learning whichever tool is the right one to get the job done. However, my go-to stack is to use <strong>React</strong> on the front end,{" "}
						<strong>Python</strong> and <strong>Django</strong> on the backend, <strong>GraphQL</strong> for querying and mutating a <strong>PostgreSQL</strong> database, and
						deploying the project to <strong>AWS</strong>.
					</Text>
					<Text textAlign="center" font="sm" pt="xs">
						<em>Also, it's probably Sour Patch Kids, but I was recently introduced to beer brittle and I'm a little addicted.</em>
					</Text>
				</Box>
			</Wrapper>
		</Section>
	)
}

export { Stack }
