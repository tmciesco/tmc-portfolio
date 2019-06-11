import { createGlobalStyle } from 'styled-components'
import theme from './Theme'

const GlobalStyle = createGlobalStyle`
  *,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
}

body {
    box-sizing: border-box;
	${theme.fonts.primaryRegular};
	line-height: 1.6;
    min-height: 100vh;
    background: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
	color: inherit;
}
`

export default GlobalStyle