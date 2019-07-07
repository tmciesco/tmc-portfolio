import React from "react"
import { Heading, Text } from "../base"

const FunFacts = () => {
	return (
		<div style={{ width: "300px", margin: "0 auto" }}>
			<Heading>Fun Facts</Heading>
			<Text pad="m:xs:mt:sm:tl:xl:l">
				01 Gave a speech in Singapore about real estate, blockchain, and crowdfunding
			</Text>
			<Text>02 Led two or more people in every professional and military role since 22</Text>
			<Text>03 Bad at using scissors because I'm left-handed</Text>
		</div>
	)
}

export { FunFacts }
