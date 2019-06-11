import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './base/Theme'
import { Heading, Paragraph } from './base'
import { Skills, Stack, Work, Training, Projects, Contact } from './components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{margin: '0 auto', maxWidth: '960px'}}>
      <Heading>Hello!</Heading>
      <Heading>Intro</Heading>
      <Paragraph>My name is Troy. I'm a full-stack developer from Connecticut.</Paragraph>
      <Heading>About</Heading>
      <Paragraph>I am a 26-year-old full-stack developer from Mansfield, Connecticut (right by Uconn). I love building websites and working with computers in general, and I thoroughly enjoy taking a design and making it come to life in the browser. In my spare time I like watching baseball, visiting cool places, and being outside. </Paragraph>
      <Stack />
      <Skills />
      <Work />
      <Training />
      <Projects />
      <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App