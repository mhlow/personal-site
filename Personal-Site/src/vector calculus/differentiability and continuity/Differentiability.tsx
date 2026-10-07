import { Link } from "react-router-dom";
import NextPage from "../components/PageNavigation";
import Box from "../../components/box/Box";
import KatexInline from "../../components/katex/KatexInline";
import KatexBlock from "../../components/katex/KatexBlock";
import ExampleBox from "../components/ExampleBox/ExampleBox";
import { Bold, Italic } from "../../components/font styles/font styles";
import JSXGraphBoard3D from "../components/JSXGraph3D/JSXGraph3D";

function Differentiability() {
	return (
		<div className="vector-calc-container">
			<div className="differentiability-content">
				<h1>Differentiability</h1>
				Differentiability is essentially when a function has no holes, jumps or sharp corners.

				<Box header="Definition of differentiability">
					A function <KatexInline content="f : \mathbb{R}^2 \to \mathbb{R}" /> is differentiable at <KatexInline content="(a, b)" /> if:
					<ol>
						<li><KatexInline content="\frac{\partial f}{\partial x}" /> and <KatexInline content="\frac{\partial f}{\partial y}" /> exist at <KatexInline content="(a, b)" /></li>
						<li>The tangent plane at <KatexInline content="(a, b)" /> is a good approximation of the function near <KatexInline content="(a, b)" /></li>
						The tangent plane is given by
						<KatexBlock content={`
							z = f(a, b) + \\frac{\\partial f}{\\partial x}(a, b)(x - a) + \\frac{\\partial f}{\\partial y}(a, b)(y - b)
							`} />
						or also rewritten as
						<KatexBlock content={`
							\\lim_{(x, y) \\to (a, b)} \\frac{f(x, y) - f(a, b) - \\nabla f(a, b) \\cdot (x - a, y - b)}{\\sqrt{(x - a)^2 + (y - b)^2}} = 0
							`} />
						<Italic>Recall that <KatexInline content="\nabla = \left( \frac{\partial}{\partial x}, \frac{\partial}{\partial y} \right)" /></Italic>
					</ol>
				</Box>

				We can disprove that a function is differentiable by either showing that the partial derivatives do not exist, the function is
				discontinuous, or the above limit does not equal <KatexInline content="0" />.

				<Box header="Theorem - Sufficient condition for differentiability">
					If <KatexInline content="\frac{\partial f}{\partial x}" /> and <KatexInline content="\frac{\partial f}{\partial y}" /> are
					continuous at <KatexInline content="(a, b)" />, then <KatexInline content="f" /> is differentiable at <KatexInline content="(a, b)" />.
				</Box>

				Using this theorem, this simplifies the process to prove differentiability:
				<ol>
					<li>Check if the partial derivative in the <KatexInline content="x" /> direction exists.</li>
					<ul>
						<li>Find the <KatexInline content="\frac{\partial f}{\partial x}" /> <Bold>around </Bold>the limit point.</li>
						<li>Find the <KatexInline content="\frac{\partial f}{\partial x}" /> <Bold>at</Bold> the limit point. You will have to use the limit definition of the derivative.</li>
						<li>Make sure that they are continuous; the limit as the derivative approaches your limit point is equal to the derivative at the limit point.</li>
					</ul>
					<br />
					<li>Check if the partial derivative in the <KatexInline content="y" /> direction exists.</li>
					<ul>
						<li>Find the <KatexInline content="\frac{\partial f}{\partial y}" /> <Bold>around </Bold>the limit point.</li>
						<li>Find the <KatexInline content="\frac{\partial f}{\partial y}" /> <Bold>at</Bold> the limit point. You will have to use the limit definition of the derivative.</li>
						<li>Make sure that they are continuous; the limit as the derivative approaches your limit point is equal to the derivative at the limit point.</li>
					</ul>

				</ol>

				<ExampleBox header={
					<>
						Determine where <KatexInline content="f" /> is differentiable.
						<KatexBlock content={`
							f(x, y) = x^2 + y^2
							`}
						/>
					</>
				}
					openByDefault={false}>
					<KatexBlock content={`
						\\begin{align*}
							\\frac{\\partial f}{\\partial x} &= 2x \\qquad \\text{and} \\quad \\frac{\\partial f}{\\partial y} = 2y \\\\
						\\end{align*}
						`} />
					These partial derivatives are continuous on <KatexInline content="\mathbb{R}^2" />, so <KatexInline content="f" /> is
					differentiable on <KatexInline content="\mathbb{R}^2" />.
				</ExampleBox>

				<ExampleBox header={
					<>
						Determine if <KatexInline content="f" /> is differentiable at <KatexInline content="(0, 0)" />
						<KatexBlock content={`
							f(x, y) = 
							\\begin{cases}
								\\frac{x^2}{\\sqrt{x^2 + y^2}} & , (x, y) \\neq (0, 0) \\\\
								0 & , (x, y) = (0, 0)
							\\end{cases}
							`}
						/>
					</>
				}
					openByDefault={false}>
					We have already shown that <KatexInline content="f" /> is continuous at <KatexInline content="(0, 0)" />.
					<br />
					Let's check if <KatexInline content="\frac{\partial f}{\partial x}" /> and <KatexInline content="\frac{\partial f}{\partial y}" />
					{" "}exist at <KatexInline content="(0, 0)" />. Clearly, they are differentiable everywhere else.
					<br /><br />
					Case 1: <KatexInline content="\frac{\partial f}{\partial y}" />
					<br />
					Around <KatexInline content="(0, 0)" />.
					<KatexBlock content={`
						\\begin{align*}
							\\frac{\\partial f}{\\partial y} &= \\frac{-x^2y}{(x^2 + y^2)^{\\frac{3}{2}}} \\\\
						\\end{align*}
						`} />
					At <KatexInline content="(0, 0)" />.
					<KatexBlock content={`
						\\begin{align*}
							\\left.\\frac{\\partial f}{\\partial y}\\right|_{(0, 0)} &= \\lim_{h \\to 0} \\frac{f(0, 0 + h) - f(0, 0)}{h} \\\\
							&= \\lim_{h \\to 0} \\frac{\\frac{0^2}{\\sqrt{0^2 + h^2}} - 0}{h} \\\\
							&= \\lim_{h \\to 0} \\frac{0}{h} \\\\
							&= 0
						\\end{align*}
						`} />
					
					<h3>This is only needed if you're checking for <KatexInline content="C^1" />, in next chapter</h3>
					Now we have to check that the derivative function is continuous at <KatexInline content="(0, 0)" />.
					<br />
					There's a few ways to do this, such as the <Link to="/vector-calculus/proving-limits">squeeze theorem</Link>.
					<br /><br />
					Here, we are just going to plug in either <KatexInline content="x = 0" /> or <KatexInline content="y = 0" /> as this is a lot
					easier.
					<KatexBlock content={`
						\\begin{align*}
							\\lim_{(x, y) \\to (0, 0)} \\frac{\\partial f}{\\partial y}(x, y) &= \\lim_{(x, y) \\to (0, 0)} \\frac{-x^2y}{(x^2 + y^2)^{\\frac{3}{2}}} \\\\
							&= \\lim_{x \\to 0} \\frac{0}{(x^2 + 0^2)^{\\frac{3}{2}}} \\\\
							&= \\lim_{x \\to 0} 0 \\\\
							&= 0
						\\end{align*}
						`} />
					So the derivative is continuous at <KatexInline content="(0, 0)" />.
					<br /><br />
					Case 2: <KatexInline content="\frac{\partial f}{\partial x}" />
					<br />
					Around <KatexInline content="(0, 0)" />.
					<KatexBlock content={`
						\\begin{align*}
							\\frac{\\partial f}{\\partial x} &= \\frac{2x \\sqrt{x^2 + y^2} - \\frac{x^3}{\\sqrt{x^2 + y^2}}}{x^2 + y^2} \\\\
							&= \\frac{2x(x^2 + y^2) - x^3}{(x^2 + y^2)^{\\frac{3}{2}}} \\\\
							&= \\frac{2x^3 + 2xy^2 - x^3}{x^2 + y^2} \\\\
							&= \\frac{x^3 + 2xy^2}{x^2 + y^2} \\\\
						\\end{align*}
						`} />
					At <KatexInline content="(0, 0)" />.
					<KatexBlock content={`
						\\begin{align*}
							\\left.\\frac{\\partial f}{\\partial x}\\right|_{(0, 0)} &= \\lim_{h \\to 0} \\frac{f(0 + h, 0) - f(0, 0)}{h} \\\\
							&= \\lim_{h \\to 0} \\frac{\\frac{h^2}{\\sqrt{h^2 + 0^2}} - 0}{h} \\\\
							&= \\lim_{h \\to 0} \\frac{\\frac{h^2}{|h|}}{h} \\\\
							&= \\lim_{h \\to 0} \\frac{|h|}{h} \\\\
						\\end{align*}
						`} />
					By inspection, this limit does not exist, so the partial derivative also does not exist at <KatexInline content="(0, 0)" />.
					<br /><br />
					Therefore, we can conclude that <KatexInline content="f" /> is not differentiable at <KatexInline content="(0, 0)" />.
				</ExampleBox>

				Another meaning of the <KatexInline content="\nabla f" /> vector at <KatexInline content="(a, b)" /> is that it will always be
				orthogonal to the level set. The level set is the set of points defined
				by <KatexInline content="\{(x, y) \in D | f(x, y) = c, c \in \mathbb{R}\}" />.
				<br />
				You can think of the level set as a map with topological lines.
				<br />
				<JSXGraphBoard3D
					boundingBox3D={[[-10, 10], [-10, 10], [-5, 5]]}
					view3DPosition={[[-10, -10], [20, 20]]}
					keepAspectRatio={true}
					axis={true}
					pan={false}
					zoom={false}
					setup={(_board, view) => {
						// --- Undulating function ---
						const f = (x: number, y: number) => 2 * Math.sin(x / 2) * Math.cos(y / 2);

						// Numeric partial derivatives (central difference)
						const h = 1e-3;
						const fx = (x: number, y: number) => (f(x + h, y) - f(x - h, y)) / (2 * h);
						const fy = (x: number, y: number) => (f(x, y + h) - f(x, y - h)) / (2 * h);

						// Helper: unit normal at (x,y) for surface z = f(x,y)
						const unitNormal = (x: number, y: number) => {
							const gx = fx(x, y);
							const gy = fy(x, y);
							const norm = Math.sqrt(gx * gx + gy * gy + 1);
							return { nx: -gx / norm, ny: -gy / norm, nz: 1 / norm };
						};

						// --- Main surface ---
						view.create("functiongraph3d", [
							f,
							[-10, 10],
							[-10, 10],
						], {
							strokeOpacity: 0.4,
							fillOpacity: 0.6,
							stepsU: 50,
							stepsV: 50,
						});

						// --- Draggable point ---
						const Ps = view.create("point3d", [2, 2, () => -5], {
							size: 4,
							fillColor: "#e63946",
							strokeColor: "#e63946",
							highlightFillColor: "#e63946",
							highlightStrokeColor: "#e63946",
							name: "P_s",
							withLabel: false,
						} as JXG.Point3DAttributes);

						const P = view.create("point3d", [
							() => Ps.X(),
							() => Ps.Y(),
							() => f(Ps.X(), Ps.Y())
						], {
							size: 4,
							fillColor: "#e63946",
							strokeColor: "#e63946",
							highlightFillColor: "#e63946",
							highlightStrokeColor: "#e63946",
							name: "P",
							withLabel: false,
						} as JXG.Point3DAttributes);

						view.create('line3d', [Ps, P], {
							dash: 1
						});

						// --- Small tangent-plane patch centered at P ---
						const patchSize = 1.25;
						view.create("plane3d", [
							P,
							[1, 0, () => fx(P.X(), P.Y())],
							[0, 1, () => fy(P.X(), P.Y())],
							[-patchSize, patchSize],
							[-patchSize, patchSize],
						], {
							strokeOpacity: 0,
							fillOpacity: 1,
							fillColor: "#2a9d8f",
							strokeColor: "#2a9d8f",
							mesh3d: { visible: false },
							// stepsU: 1,
							// stepsV: 1,
						} as JXG.Plane3DAttributes);

						// --- Orthogonal (normal) vector at P ---
						const normalLength = 1.75;

						const Ntip = view.create("point3d", [
							() => P.X() - unitNormal(P.X(), P.Y()).nx * normalLength,
							() => P.Y() - unitNormal(P.X(), P.Y()).ny * normalLength,
							// () => P.Z() - unitNormal(P.X(), P.Y()).nz * normalLength,
							() => P.Z(),
						], {
							visible: false,
						} as JXG.Point3DAttributes);

						view.create("line3d", [P, Ntip], {
							straightFirst: false,
							straightLast: false,
							lastArrow: true,
							name: "$$\\nabla f$$",
							withLabel: true,
							useMathJax: true,
						} as JXG.Line3DAttributes);
					}}
				/>
				<KatexInline content="\nabla f" /> also points in the direction of greatest increase of the function.
				<br /><br />

				<Box header="Smoothness">
					We say that a function is <KatexInline content="C^n" /> if all of it's <KatexInline content="n" /><sup>th</sup> partial derivatives
					exist and are continuous.
					<ul>
						<li>A function is <KatexInline content="C^0" /> if it is continuous.</li>
						<li>A function is <KatexInline content="C^1" /> if <KatexInline content="\frac{\partial f}{\partial x}" /> and <KatexInline content="\frac{\partial f}{\partial y}" /> exist and are continuous.</li>
						<li><KatexInline content="C^\infty" /> implies that the function is infinitely differentiable. We also call this function <Bold>smooth</Bold>.</li>
						<li><KatexInline content="C^m \implies C^n, m \geq n" />.</li>
					</ul>

					If a function is <KatexInline content="C^n" />, then the order of it's lower partial derivatives does not matter.
					<br />
					i.e. A <KatexInline content="C^2" /> function has it's second partial derivatives equal; <KatexInline content="\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}" />.
				</Box>


			</div>
			<NextPage backURL="/vector-calculus/continuity" backLabel="Continuity" nextURL="/vector-calculus/multivariable-functions" nextLabel="Multivariable Functions" />
		</div>
	)
}

export default Differentiability;