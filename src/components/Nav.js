import React from "react"
import { Navbar, NavbarList, NavbarItem } from "../base"

const Nav = () => {
	return (
		<>
			<Navbar pt="xs" pb="xs" style={{ zIndex: "4" }} fixed scrollBg="#002b44">
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
