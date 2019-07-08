import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./base/GlobalStyle"
import { Box } from "./base"
import theme from "./base/Theme"
import { Hero, About, Skills, Stack, Work, Projects, Contact, FunFacts, Now } from "./components"

const StyledApp = styled.div``

function App() {
	return (
		<ThemeProvider theme={theme}>
			<StyledApp>
				<GlobalStyle />
				<Box as="div" className="main" position="relative">
					<Hero />
					<div>
						<About />
						<Skills />
						<Stack />
						<Projects />
						<Work />
						<Contact />
						<FunFacts />
						<Now />
					</div>
					{/* <Box as="div" position="absolute" top="0" right="40px" height="100%" width="100px" bg="#f4877a" zIndex="2" /> */}
				</Box>
			</StyledApp>
		</ThemeProvider>
	)
}

export default App
