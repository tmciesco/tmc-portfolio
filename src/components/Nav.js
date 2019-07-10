import React from "react"
import { Navbar, NavbarLogo, NavbarList, NavbarItem, Img } from "../base"
import tmcLogo from "../img/tmc-logo.png"
import { Link as ScrollLink } from 'react-scroll'

const Nav = () => {
	return (
		<>
			<Navbar
				pt="xs"
				pb="xs"
				style={{
					zIndex: "4",
					boxShadow: "0 0 1px rgba(67, 90, 111, 0.3), 0 16px 24px -8px rgba(67, 90, 111, 0.47)"
				}}
				fixed
				bg="#092C5C"
			>
				<NavbarLogo>
					<ScrollLink
						to="hero"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<Img src={tmcLogo} display="m:none:mt:inline:t" height="50px" width="auto" />
					</ScrollLink>
				</NavbarLogo>
				<NavbarList>
				<ScrollLink
						to="about"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<NavbarItem mobColor="dark" color="light">About</NavbarItem>
					</ScrollLink>
					<ScrollLink
						to="skills"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<NavbarItem mobColor="dark" color="light">Skills</NavbarItem>
					</ScrollLink>
					<ScrollLink
						to="projects"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<NavbarItem mobColor="dark" color="light">Projects</NavbarItem>
					</ScrollLink>
					<ScrollLink
						to="experience"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<NavbarItem mobColor="dark" color="light">Experience</NavbarItem>
					</ScrollLink>
					<ScrollLink
						to="contact"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<NavbarItem mobColor="dark" color="light">Contact</NavbarItem>
					</ScrollLink>
				</NavbarList>
			</Navbar>
		</>
	)
}

export { Nav }
