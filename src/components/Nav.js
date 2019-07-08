import React from "react"
import { Navbar, NavbarLogo, NavbarList, NavbarItem, Img } from "../base"
import tmcLogo from "../img/tmc-logo4.png"

const Nav = () => {
	return (
		<>
			<Navbar pt="sm" pb="sm" style={{ zIndex: "4" }} fixed scrollBg="#092C5C">
				<NavbarLogo>
					<Img src={tmcLogo} height="50px" width="auto" />
				</NavbarLogo>
				<NavbarList>
					<NavbarItem color="light">About</NavbarItem>
					<NavbarItem color="light">Skills</NavbarItem>
					<NavbarItem color="light">Projects</NavbarItem>
					<NavbarItem color="light">Experience</NavbarItem>
					<NavbarItem color="light">Contact</NavbarItem>
				</NavbarList>
			</Navbar>
		</>
	)
}

export { Nav }
