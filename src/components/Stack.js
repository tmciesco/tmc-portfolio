import React from "react"
import { Section, Heading, Text } from "../base"

const Stack = () => {
	return (
		<Section mar="lg" pad="xs" bg="secondaryT60">
			<Heading size="sm" pb="sm" pt="md">
				Favorite <s>Snack</s> Stack
			</Heading>
			<Text>
				I’m not picky - I love learning whichever tool is the right one to get the job done. However, my go-to stack is to use <strong>React</strong> on the front end,{" "}
				<strong>Python</strong> and <strong>Django</strong> on the backend, <strong>GraphQL</strong> for querying and mutating a <strong>PostgreSQL</strong> database, and deploying
				the project to <strong>AWS</strong>.
			</Text>
			<Text pt="xs">
				<em>Also, it's probably Sour Patch Kids, but I was recently introduced to beer brittle and I'm a little addicted.</em>
			</Text>
		</Section>
	)
}

export { Stack }
