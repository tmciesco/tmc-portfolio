import { css } from "styled-components"

const borders = {
	default: "",
	solid: "10px solid #34c6f4",
	grn: "10px solid lightgreen",
	ylw: "10px solid #F5D130",
	lightblue: "10px solid #8FBCE6",
	card: "4px solid #002b44"
}
// const radius = {
// 	round: "50%",
// }
const borderOptions = css`
	border: ${props => borders[props.bor] || borders.default};
	border-top: ${props => borders[props.bt]};
	border-right: ${props => borders[props.br]};
	border-bottom: ${props => borders[props.bb]};
	border-left: ${props => borders[props.bl]};
	border-radius: ${props => props.rad};
	border-top-left-radius: ${props => props.radtl};
	border-top-right-radius: ${props => props.radtr};
	border-bottom-right-radius: ${props => props.radbr};
	border-bottom-left-radius: ${props => props.radbl};
`

export default borderOptions
