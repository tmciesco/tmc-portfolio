import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./base/GlobalStyle"
import { Box } from './base'
import theme from "./base/Theme"
import { Hero, About, Skills, Stack, Work, Training, Projects, Contact, FunFacts, Now } from "./components"

const StyledApp = styled.div`
	/* display: grid;
    min-height: 100vh;
    grid-template-areas: "main side"
                         "main side"
                         "main side";
    grid-template-columns: 1fr 400px;

    .side {
      grid-area: side;
      background: lightblue;
    }
    .main {
      grid-area: main;
      background: wheat;
    } */
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<StyledApp>
				<GlobalStyle />
				<Box as="div" className="main" position="relative">
					<Hero />
					<div>
						<About />
						<Projects />
						<Skills />
						<Stack />
						<Work />
						<Training />
						<Contact />
					</div>
					<Box as="div" position="absolute" top="0" right="40px" height="100%" width="100px" bg="#f4877a" zIndex="2" />
				</Box>
				<div className="side">
					<FunFacts />
					<Now />
				</div>
			</StyledApp>
		</ThemeProvider>
	)
}

export default App
