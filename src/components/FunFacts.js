import React from "react"
import { Section, Heading, Wrapper, Text, FlexRow, FlexCol } from "../base"

const FunFacts = () => {
	return (
		<Section>
			<Wrapper width="m:90%:mt:80%:tl:75%:l">
				<Heading font="xl" pb="sm" pt="md">
					Fun Facts
				</Heading>
				<FlexRow mb="sm">
					<FlexCol xs="3">
						<Text textAlign="center">
							01 Gave a speech in Singapore about real estate, blockchain, and crowdfunding
						</Text>
					</FlexCol>
					<FlexCol xs="3">
						<Text textAlign="center">
							02 Led two or more people in every professional and military role since 22
						</Text>
					</FlexCol>
					<FlexCol xs="3">
						<Text textAlign="center">03 Bad at using scissors because I'm left-handed</Text>
					</FlexCol>
				</FlexRow>
			</Wrapper>
		</Section>
	)
}

export { FunFacts }
