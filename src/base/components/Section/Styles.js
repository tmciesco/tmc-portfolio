import styled from 'styled-components'

import theme from '../../Theme'

const { spacingSizes, colors } = theme

const SectionStyles = styled.section`
min-height: ${props => props.height};
background: ${props => colors[props.bg]};
${spacingSizes};
`

export default SectionStyles