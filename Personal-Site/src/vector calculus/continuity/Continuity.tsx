import NextPage from "../components/PageNavigation";
import Box from "../../components/box/Box";
import { Bold } from "../../components/font styles/font styles";
import KatexInline from "../../components/katex/KatexInline";
import KatexBlock from "../../components/katex/KatexBlock";
import ExampleBox from "../components/ExampleBox";

function Continuity() {
	return (
		<div className="vector-calc-container">
			<div className="continuity-content">
				<h1>Continuity</h1>

				<Bold>Continuity</Bold> at a point just means that the function is defined and there are no holes or jumps.
				The limit at the point and the function value at that point must be equal.

				<Box header="Formal definition of continuity">
					A function <KatexInline content="f : \mathbb{R}^2 \to \mathbb{R}" /> is continuous at <KatexInline content="(a, b)" /> if:
					<KatexBlock content={`
						\\lim_{(x, y) \\to (a, b)} f(x, y) = f(a, b)
					`} />
				</Box>

				The following functions are all continuous along their maximal domains:
				<ul>
					<li>Polynomials</li>
					<li>Trigonometric functions</li>
					<li><KatexInline content="n" />th root functions</li>
					<li>Exponential functions</li>
					<li>Logarithmic functions</li>
					<li>Hyperbolic functions (From expontential functions)</li>
				</ul>

				Normal continuity laws apply. If <KatexInline content="f" /> and <KatexInline content="g" /> are continuous
				at <KatexInline content="(a, b)" />, then the following are also continuous and defined at <KatexInline content="(a, b)" />:
				<ul>
					<li><KatexInline content="f + g" /></li>
					<li><KatexInline content="f \cdot g" /></li>
					<li><KatexInline content="cf" /> for <KatexInline content="c \in \mathbb{R}" /></li>
					<li><KatexInline content="\frac{f}{g}" /> (where <KatexInline content="g(a, b) \neq 0" />)</li>
					<li><KatexInline content="h \circ f" /> if <KatexInline content="h : \mathbb{R} \to \mathbb{R}" /> is continuous at <KatexInline content="z = f(a, b)" /></li>
				</ul>

				<ExampleBox header={
					<>
						Where is <KatexInline content="f" />
						<KatexBlock content={`
							f(x, y) = \\log(1 - xy)`}
						/>
						continuous?
					</>
				}
					openByDefault={false}>
					<KatexInline content="\log(1 - xy)" /> is continuous when <KatexInline content="1 - xy > 0" /> (by property
					of <KatexInline content="\log" />).
					Hence, <KatexInline content="f" /> is continuous when <KatexInline content="xy < 1" />.
					<br /><br />
					<KatexBlock content={`
						\\{(x, y) \\in \\mathbb{R}^2 \\mid xy < 1 \\}
						`} />
				</ExampleBox>

				<ExampleBox header={
					<>
						Where is <KatexInline content="f" />
						<KatexBlock content={`
							f(x, y) = 
							\\begin{cases}
								\\frac{x^2}{\\sqrt{x^2 + y^2}} & , (x, y) \\neq (0, 0) \\\\
								0 & , (x, y) = (0, 0)
							\\end{cases}
							`}
						/>
						continuous?
					</>
				}
					openByDefault={false}>
					Since the top case of this function is continuous everywhere but <KatexInline content="(0, 0)" />, (by repeatedly applying
					continuity laws), we only need to check continuity at <KatexInline content="(0, 0)" />.

					<KatexBlock content={`
							\\begin{align*}
								\\frac{0}{\\sqrt{x^2 + y^2}} 	&\\leq \\qquad \\;\\,\\frac{x^2}{\\sqrt{x^2 + y^2}} &&\\leq \\frac{x^2 + y^2}{\\sqrt{x^2 + y^2}} \\\\
								0 								&\\leq \\qquad \\;\\,\\frac{x^2}{\\sqrt{x^2 + y^2}} &&\\leq \\sqrt{x^2 + y^2} \\\\
								\\lim_{(x, y) \\to (0, 0)} 0 &\\leq \\lim_{(x, y) \\to (0, 0)} \\frac{x^2}{\\sqrt{x^2 + y^2}} &&< \\lim_{(x, y) \\to (0, 0)} \\sqrt{x^2 + y^2} \\\\
								0 &\\leq \\lim_{(x, y) \\to (0, 0)} \\frac{x^2}{\\sqrt{x^2 + y^2}} &&< 0
							\\end{align*}
						`} />
					By the Sandwich/Squeeze Theorem, the limit approaches <KatexInline content="0" />.
					Since the limit and the actualy value of the function <KatexInline content="f(0, 0)" /> are equal,
					{" "}<KatexInline content="f" /> is continuous at <KatexInline content="(0, 0)" />.
					<br /><br />
					Hence, <KatexInline content="f" /> is continuous on <KatexInline content="\mathbb{R}^2" />.
				</ExampleBox>
			</div>
			<NextPage backURL="/vector-calculus/proving-limits" backLabel="Proving Limits" nextURL="/vector-calculus/differentiability" nextLabel="Differentiability" />
		</div>
	)
}

export default Continuity;