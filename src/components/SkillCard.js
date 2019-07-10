import React from "react"
import { Heading, Box, Text, FlexCol } from "../base"

const SkillCard = ({ children, title, skill1, skill2, skill3, skill4, bgImg, ...props }) => {
	return (
		<Box as="div" elevation="2" bor="card" mb="m:sm:mt:sm:tl:0px:l" rad="4px" width="300px">
			<Box bg={`url(${bgImg})`} height="150px" position="relative" bb="darkblue">
				<Box
					position="absolute"
					top="0"
					left="0"
					bg="rgba(0,0,0,0.6)"
					height="100%"
					width="100%"
					zIndex="2"
					bor="grncard"
				/>
				<Box position="absolute" top="0" left="0" height="100%" width="100%" zIndex="3">
					<FlexCol xs="12" style={{ height: "100%", justifyContent: "center" }}>
						<Heading
							font="lg4"
							textAlign="center"
							color="light"
							style={{ textShadow: "-2px 4px #092C5C" }}
						>
							{title}
						</Heading>
					</FlexCol>
				</Box>
			</Box>
			<Box pad="lg" bg="#f6f8ff">
				<Text textAlign="center">{skill1}</Text>
				<Text textAlign="center">{skill2}</Text>
				<Text textAlign="center">{skill3}</Text>
				<Text textAlign="center">{skill4}</Text>
			</Box>
		</Box>
	)
}

export { SkillCard }
