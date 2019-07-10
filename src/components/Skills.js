import React from "react"
import { Section, Heading, Wrapper, FlexCol, FlexRow } from "../base"
import { SkillCard } from "./SkillCard"
import design from "../img/design.jpg"
import frontEnd from "../img/front-end.jpg"
import backEnd from "../img/back-end.jpg"
import database from "../img/database.jpg"
import miscTech from "../img/misc-tech.jpg"
import softSkills from "../img/soft-skills.jpg"

const Skills = () => {
	return (
		<Section mt="sm" mb="sm">
			<Wrapper width="m:90%:mt:80%:tl:75%:l">
				<Heading font="xl" pb="sm" pt="md">
					Skills
				</Heading>
				<FlexRow mb="m:0px:mt:0px:tl:xl:l">
					<FlexCol xs="12" sm="12" md="3" lg="3">
						<SkillCard
							title="Design"
							skill1="XD"
							skill2="Photoshop"
							skill3="Illustrator"
							skill4="InDesign"
							bgImg={design}
						/>
					</FlexCol>
					<FlexCol xs="12" lg="3">
						<SkillCard
							title="Front End"
							skill1="HTML"
							skill2="CSS/SCSS"
							skill3="JavaScript"
							skill4="React"
							bgImg={frontEnd}
						/>
					</FlexCol>
					<FlexCol xs="12" sm="12" md="3" lg="3">
						<SkillCard
							title="Back End"
							skill1="Python"
							skill2="Django"
							skill3="Node.js"
							skill4="Express"
							bgImg={backEnd}
						/>
					</FlexCol>
				</FlexRow>
				<FlexRow mb="m:0px:mt:0px:tl:xl:l">
					<FlexCol xs="12" lg="3">
						<SkillCard
							title="Database"
							skill1="MySQL"
							skill2="PostgreSQL"
							skill3="GraphQL"
							skill4="REST"
							bgImg={database}
						/>
					</FlexCol>
					<FlexCol xs="12" lg="3">
						<SkillCard
							title="Misc. Tech"
							skill1="AWS"
							skill2="Wordpress"
							skill3="Agile/Scrum"
							skill4="Blockchain"
							bgImg={miscTech}
						/>
					</FlexCol>
					<FlexCol xs="12" lg="3">
						<SkillCard
							title="Soft Skills"
							skill1="Enthusiasm"
							skill2="Communication"
							skill3="Teamwork"
							skill4="Leadership"
							bgImg={softSkills}
						/>
					</FlexCol>
				</FlexRow>
			</Wrapper>
		</Section>
	)
}

export { Skills }
