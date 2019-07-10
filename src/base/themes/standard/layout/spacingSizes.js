// Remember: root is set to 10px, or 1.0rem
// These are based off the fibonacci sequence currently
// Different combinations of these sizes can be achieved with different margin/padding vals on neighboring components, or by setting style manually (shouldn't happen often)
import { css } from "styled-components"

const spaces = {
	contain: "0 auto",
	none: "0",
	bump: "0.4rem",
	xxs: "0.8rem",
	xxsBump: "1.2rem",
	xs: "1.6rem",
	xsBump: "2.0rem",
	sm: "2.4rem",
	smBump: "2.8rem",
	md: "3.2rem",
	mdBump: "3.6rem",
	lg: "4.0rem",
	xl: "4.8rem",
	xxl: "5.6rem"
}

const pad = css`
	@media (max-width: 667px) {
		padding: ${props =>
			props.pad &&
			props.pad.includes("m:") &&
			(!props.pad.endsWith("px")
				? spaces[props.pad.substring(props.pad.indexOf("m:") + 2, props.pad.indexOf(":m"))]
				: props.pad.substring(props.pad.indexOf("m:") + 2, props.pad.indexOf(":m")))};
	}
	@media (min-width: 668px) {
		padding: ${props =>
			props.pad &&
			props.pad.includes("t:") &&
			(!props.pad.endsWith("px")
				? spaces[props.pad.substring(props.pad.indexOf("t:") + 2, props.pad.indexOf(":t"))]
				: props.pad.substring(props.pad.indexOf("t:") + 2, props.pad.indexOf(":t")))};
	}

	@media (min-width: 1025px) {
		padding: ${props =>
			props.pad &&
			props.pad.includes("l:") &&
			(!props.pad.endsWith("px")
				? spaces[props.pad.substring(props.pad.indexOf("l:") + 2, props.pad.indexOf(":l"))]
				: props.pad.substring(props.pad.indexOf("l:") + 2, props.pad.indexOf(":l")))};
	}
	padding: ${props => (props.pad && !props.pad.endsWith("px") ? spaces[props.pad] : props.pad)};
`

const pt = css`
	@media (max-width: 667px) {
		padding-top: ${props =>
			props.pt &&
			props.pt.includes("m:") &&
			(!props.pt.endsWith("px")
				? spaces[props.pt.substring(props.pt.indexOf("m:") + 2, props.pt.indexOf(":m"))]
				: props.pt.substring(props.pt.indexOf("m:") + 2, props.pt.indexOf(":m")))};
	}
	@media (min-width: 668px) {
		padding-top: ${props =>
			props.pt &&
			props.pt.includes("t:") &&
			(!props.pt.endsWith("px")
				? spaces[props.pt.substring(props.pt.indexOf("t:") + 2, props.pt.indexOf(":t"))]
				: props.pt.substring(props.pt.indexOf("t:") + 2, props.pt.indexOf(":t")))};
	}

	@media (min-width: 1025px) {
		padding-top: ${props =>
			props.pt &&
			props.pt.includes("l:") &&
			(!props.pt.endsWith("px")
				? spaces[props.pt.substring(props.pt.indexOf("l:") + 2, props.pt.indexOf(":l"))]
				: props.pt.substring(props.pt.indexOf("l:") + 2, props.pt.indexOf(":l")))};
	}
	padding-top: ${props => (props.pt && !props.pt.endsWith("px") ? spaces[props.pt] : props.pt)};
`

const pr = css`
	@media (max-width: 667px) {
		padding-right: ${props =>
			props.pr &&
			props.pr.includes("m:") &&
			(!props.pr.endsWith("px")
				? spaces[props.pr.substring(props.pr.indexOf("m:") + 2, props.pr.indexOf(":m"))]
				: props.pr.substring(props.pr.indexOf("m:") + 2, props.pr.indexOf(":m")))};
	}
	@media (min-width: 668px) {
		padding-right: ${props =>
			props.pr &&
			props.pr.includes("t:") &&
			(!props.pr.endsWith("px")
				? spaces[props.pr.substring(props.pr.indexOf("t:") + 2, props.pr.indexOf(":t"))]
				: props.pr.substring(props.pr.indexOf("t:") + 2, props.pr.indexOf(":t")))};
	}

	@media (min-width: 1025px) {
		padding-right: ${props =>
			props.pr &&
			props.pr.includes("l:") &&
			(!props.pr.endsWith("px")
				? spaces[props.pr.substring(props.pr.indexOf("l:") + 2, props.pr.indexOf(":l"))]
				: props.pr.substring(props.pr.indexOf("l:") + 2, props.pr.indexOf(":l")))};
	}
	padding-right: ${props => (props.pr && !props.pr.endsWith("px") ? spaces[props.pr] : props.pr)};
`

const pb = css`
	@media (max-width: 667px) {
		padding-bottom: ${props =>
			props.pb &&
			props.pb.includes("m:") &&
			(!props.pb.endsWith("px")
				? spaces[props.pb.substring(props.pb.indexOf("m:") + 2, props.pb.indexOf(":m"))]
				: props.pb.substring(props.pb.indexOf("m:") + 2, props.pb.indexOf(":m")))};
	}
	@media (min-width: 668px) {
		padding-bottom: ${props =>
			props.pb &&
			props.pb.includes("t:") &&
			(!props.pb.endsWith("px")
				? spaces[props.pb.substring(props.pb.indexOf("t:") + 2, props.pb.indexOf(":t"))]
				: props.pb.substring(props.pb.indexOf("t:") + 2, props.pb.indexOf(":t")))};
	}

	@media (min-width: 1025px) {
		padding-bottom: ${props =>
			props.pb &&
			props.pb.includes("l:") &&
			(!props.pb.endsWith("px")
				? spaces[props.pb.substring(props.pb.indexOf("l:") + 2, props.pb.indexOf(":l"))]
				: props.pb.substring(props.pb.indexOf("l:") + 2, props.pb.indexOf(":l")))};
	}
	padding-bottom: ${props => (props.pb && !props.pb.endsWith("px") ? spaces[props.pb] : props.pb)};
`

const pl = css`
	@media (max-width: 667px) {
		padding-left: ${props =>
			props.pl &&
			props.pl.includes("m:") &&
			(!props.pl.endsWith("px")
				? spaces[props.pl.substring(props.pl.indexOf("m:") + 2, props.pl.indexOf(":m"))]
				: props.pl.substring(props.pl.indexOf("m:") + 2, props.pl.indexOf(":m")))};
	}
	@media (min-width: 668px) {
		padding-left: ${props =>
			props.pl &&
			props.pl.includes("t:") &&
			(!props.pl.endsWith("px")
				? spaces[props.pl.substring(props.pl.indexOf("t:") + 2, props.pl.indexOf(":t"))]
				: props.pl.substring(props.pl.indexOf("t:") + 2, props.pl.indexOf(":t")))};
	}

	@media (min-width: 1025px) {
		padding-left: ${props =>
			props.pl &&
			props.pl.includes("l:") &&
			(!props.pl.endsWith("px")
				? spaces[props.pl.substring(props.pl.indexOf("l:") + 2, props.pl.indexOf(":l"))]
				: props.pl.substring(props.pl.indexOf("l:") + 2, props.pl.indexOf(":l")))};
	}
	padding-left: ${props => (props.pl && !props.pl.endsWith("px") ? spaces[props.pl] : props.pl)};
`

const mar = css`
	@media (max-width: 667px) {
		margin: ${props =>
			props.mar &&
			props.mar.includes("m:") &&
			(!props.mar.endsWith("px")
				? spaces[props.mar.substring(props.mar.indexOf("m:") + 2, props.mar.indexOf(":m"))]
				: props.mar.substring(props.mar.indexOf("m:") + 2, props.mar.indexOf(":m")))};
	}
	@media (min-width: 668px) {
		margin: ${props =>
			props.mar &&
			props.mar.includes("t:") &&
			(!props.mar.endsWith("px")
				? spaces[props.mar.substring(props.mar.indexOf("t:") + 2, props.mar.indexOf(":t"))]
				: props.mar.substring(props.mar.indexOf("t:") + 2, props.mar.indexOf(":t")))};
	}

	@media (min-width: 1025px) {
		margin: ${props =>
			props.mar &&
			props.mar.includes("l:") &&
			(!props.mar.endsWith("px")
				? spaces[props.mar.substring(props.mar.indexOf("l:") + 2, props.mar.indexOf(":l"))]
				: props.mar.substring(props.mar.indexOf("l:") + 2, props.mar.indexOf(":l")))};
	}
	margin: ${props => (props.mar && !props.mar.endsWith("px") ? spaces[props.mar] : props.mar)};
`

const mt = css`
	@media (max-width: 667px) {
		margin-top: ${props =>
			props.mt &&
			props.mt.includes("m:") &&
			(!props.mt.endsWith("px")
				? spaces[props.mt.substring(props.mt.indexOf("m:") + 2, props.mt.indexOf(":m"))]
				: props.mt.substring(props.mt.indexOf("m:") + 2, props.mt.indexOf(":m")))};
	}
	@media (min-width: 668px) {
		margin-top: ${props =>
			props.mt &&
			props.mt.includes("t:") &&
			(!props.mt.endsWith("px")
				? spaces[props.mt.substring(props.mt.indexOf("t:") + 2, props.mt.indexOf(":t"))]
				: props.mt.substring(props.mt.indexOf("t:") + 2, props.mt.indexOf(":t")))};
	}

	@media (min-width: 1025px) {
		margin-top: ${props =>
			props.mt &&
			props.mt.includes("l:") &&
			(!props.mt.endsWith("px")
				? spaces[props.mt.substring(props.mt.indexOf("l:") + 2, props.mt.indexOf(":l"))]
				: props.mt.substring(props.mt.indexOf("l:") + 2, props.mt.indexOf(":l")))};
	}
	margin-top: ${props => (props.mt && !props.mt.endsWith("px") ? spaces[props.mt] : props.mt)};
`

const mr = css`
	@media (max-width: 667px) {
		margin-right: ${props =>
			props.mr &&
			props.mr.includes("m:") &&
			(!props.mr.endsWith("px")
				? spaces[props.mr.substring(props.mr.indexOf("m:") + 2, props.mr.indexOf(":m"))]
				: props.mr.substring(props.mr.indexOf("m:") + 2, props.mr.indexOf(":m")))};
	}
	@media (min-width: 668px) {
		margin-right: ${props =>
			props.mr &&
			props.mr.includes("t:") &&
			(!props.mr.endsWith("px")
				? spaces[props.mr.substring(props.mr.indexOf("t:") + 2, props.mr.indexOf(":t"))]
				: props.mr.substring(props.mr.indexOf("t:") + 2, props.mr.indexOf(":t")))};
	}

	@media (min-width: 1025px) {
		margin-right: ${props =>
			props.mr &&
			props.mr.includes("l:") &&
			(!props.mr.endsWith("px")
				? spaces[props.mr.substring(props.mr.indexOf("l:") + 2, props.mr.indexOf(":l"))]
				: props.mr.substring(props.mr.indexOf("l:") + 2, props.mr.indexOf(":l")))};
	}
	margin-right: ${props => (props.mr && !props.mr.endsWith("px") ? spaces[props.mr] : props.mr)};
`

const mb = css`
	@media (max-width: 667px) {
		margin-bottom: ${props =>
			props.mb &&
			props.mb.includes("m:") &&
			(!props.mb.endsWith("px")
				? spaces[props.mb.substring(props.mb.indexOf("m:") + 2, props.mb.indexOf(":m"))]
				: props.mb.substring(props.mb.indexOf("m:") + 2, props.mb.indexOf(":m")))};
	}
	@media (min-width: 668px) {
		margin-bottom: ${props =>
			props.mb &&
			props.mb.includes("t:") &&
			(!props.mb.endsWith("px")
				? spaces[props.mb.substring(props.mb.indexOf("t:") + 2, props.mb.indexOf(":t"))]
				: props.mb.substring(props.mb.indexOf("t:") + 2, props.mb.indexOf(":t")))};
	}

	@media (min-width: 1025px) {
		margin-bottom: ${props =>
			props.mb &&
			props.mb.includes("l:") &&
			(!props.mb.endsWith("px")
				? spaces[props.mb.substring(props.mb.indexOf("l:") + 2, props.mb.indexOf(":l"))]
				: props.mb.substring(props.mb.indexOf("l:") + 2, props.mb.indexOf(":l")))};
	}
	margin-bottom: ${props => (props.mb && !props.mb.endsWith("px") ? spaces[props.mb] : props.mb)};
`

const ml = css`
	@media (max-width: 667px) {
		margin-left: ${props =>
			props.ml &&
			props.ml.includes("m:") &&
			(!props.ml.endsWith("px")
				? spaces[props.ml.substring(props.ml.indexOf("m:") + 2, props.ml.indexOf(":m"))]
				: props.ml.substring(props.ml.indexOf("m:") + 2, props.ml.indexOf(":m")))};
	}
	@media (min-width: 668px) {
		margin-left: ${props =>
			props.ml &&
			props.ml.includes("t:") &&
			(!props.ml.endsWith("px")
				? spaces[props.ml.substring(props.ml.indexOf("t:") + 2, props.ml.indexOf(":t"))]
				: props.ml.substring(props.ml.indexOf("t:") + 2, props.ml.indexOf(":t")))};
	}

	@media (min-width: 1025px) {
		margin-left: ${props =>
			props.ml &&
			props.ml.includes("l:") &&
			(!props.ml.endsWith("px")
				? spaces[props.ml.substring(props.ml.indexOf("l:") + 2, props.ml.indexOf(":l"))]
				: props.ml.substring(props.ml.indexOf("l:") + 2, props.ml.indexOf(":l")))};
	}
	margin-left: ${props => (props.ml && !props.ml.endsWith("px") ? spaces[props.ml] : props.ml)};
`

export const spacingSizes = css`
	${pad};
	${pt};
	${pr};
	${pb};
	${pl};
	${mar};
	${mt};
	${mr};
	${mb};
	${ml};
`

export default spacingSizes
