// import { Link } from "react-router-dom";
import NextPage from "../components/PageNavigation";
// import Box from "../../components/box/Box";
import KatexInline from "../../components/katex/KatexInline";
// import KatexBlock from "../../components/katex/KatexBlock";
// import ExampleBox from "../components/ExampleBox";
// import { Bold, Italic } from "../../components/font styles/font styles";
// import JSXGraphBoard3D from "../components/JSXGraph3D/JSXGraph3D";

function Differentiation() {
	return (
		<div className="vector-calc-container">
			<div className="differentiation-content">
				<h1>Differentiation</h1>
				We all know the chain rule: <KatexInline content="\frac{\text{d}y}{\text{d}x} = \frac{\text{d}y}{\text{d}u}\frac{\text{d}u}{\text{d}x}" />.
                <br /><br />
            </div>
			<NextPage backURL="/vector-calculus/multivariable-functions" backLabel="Multivariable Functions" nextURL="/vector-calculus/differentiability" nextLabel="Differentiability" />
		</div>
	)
}

export default Differentiation;