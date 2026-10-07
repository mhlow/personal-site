import "./Curves.css";
import NextPage from "../components/PageNavigation";
import KatexInline from "../../components/katex/KatexInline";
// import KatexBlock from "../../components/katex/KatexBlock";
// import Box from "../../components/box/Box";
// import ExampleBox from "../components/ExampleBox/ExampleBox";
import { Link } from "react-router";
import JSXGraphBoard3D from "../components/JSXGraph3D/JSXGraph3D";
import { sliderAttr, elAttr } from "../components/JSXGraph3D/JSXGraph3D";
import Box from "../../components/box/Box";
import KatexBlock from "../../components/katex/KatexBlock";
import { Bold } from "../../components/font styles/font styles";
import ExampleBox from "../components/ExampleBox/ExampleBox";
import Katex from "katex/katex.js";

function Curves() {
	const color0 = 0;

	const tangentColors = ["#244ba6", "#f43261", "#2a9d8f"];

	return (
		<div className="vector-calc-container">
			<div className="curves-content">
				<h1>Parametrised Curves</h1>
				A <Link to="/vector-calculus/multivariable-functions">parametrised curve</Link> is a differentiable map, often denoted by <KatexInline content="\vec{c} : \mathbb{R} \to \mathbb{R}^3" />.
				<br />
				The best way to think about a curve is just a point on a line that goes through 3D space (or the tip of a vector centred at the origin).
				<JSXGraphBoard3D
					boundingBox3D={[[-10, 10], [-10, 10], [-5, 5]]}
					view3DPosition={[[-10, -10], [20, 20]]}
					keepAspectRatio={true}
					axis={true}
					pan={false}
					zoom={false}
					setup={(board, view) => {
						// --- Parametrised curve ---
						const c = (t: number) => [t, t ** 2 - 6, Math.sin(t) + 1];

						// --- Main curve ---
						view.create("curve3d", [
							(t: number) => c(t)[0],
							(t: number) => c(t)[1],
							(t: number) => c(t)[2],
							[-4, 4],
						], {
							strokeOpacity: 0.5,
							strokeColor: "#e63946",
							strokeWidth: 2,
						})

						board.create('text', [-5.6, 8, '$$\\vec{c}(t) = \\left( t, t^2 - 6, \\sin(t) + 1 \\right), \\qquad t \\in [-4, 4]$$'], {
							fontSize: 18,
							strokeColor: 'black',
							fixed: true,
							highlight: false,
							useMathJax: true,
						});

						const a = board.create('slider', [[-6.5, -9], [3.5, -9], [-4, 0, 4]], { name: 't', ...(sliderAttr(color0)), ...(elAttr(color0)), animationLoop: true }) as JXG.Slider & {
							startAnimation(direction: number, steps: number, delay?: number): void;
						};
						a.startAnimation(1, 80, 3000 / 80);

						// view.create('line3d', [
						//     [0, 0, 0],
						//     [() => a.Value(), () => a.Value() ** 2 - 6, () => Math.sin(a.Value()) + 1],
						// ], {
						//     lastArrow: true,
						// });
						view.create('point3d', [
							() => a.Value(),
							() => a.Value() ** 2 - 6,
							() => Math.sin(a.Value()) + 1,
						], {
							name: '$$P$$',
							size: 3,
							color: "#e63946",
						} as JXG.PointAttributes);
					}}
				/>

				<Box header="Parametrised Curves">
					The position of a point at time <KatexInline content="t" /> on a curve <KatexInline content="\vec{c}(t)" /> is given by
					<KatexBlock content="\vec{c}(t) = \left( x(t), y(t), z(t) \right)" />

					We say that <KatexInline content="\vec{c}(t)" /> parametrises the curve <KatexInline content="C" />, which is traced out
					by <KatexInline content="\vec{c}(t)" /> as <KatexInline content="t" /> varies.
					<br /><br />
					The <Bold>orientation</Bold> of a curve is a choice of direction of the curve. A parametrisation is said to be <Bold>orientation
						preserving</Bold> if the orientation of the curve is preserved when <KatexInline content="t" /> varies.
				</Box>

				<ExampleBox header={
					<>
						Find the parametrisation of a line through <KatexInline content="(x_0, y_0, z_0)" />, in the direction <KatexInline content="\vec{v}" />.
					</>
				}>
					<KatexBlock content="
						\vec{c}(t) = \vec{r}_0 + t \vec{v}, \qquad \vec{r}_0 = \left( x_0, y_0, z_0 \right), \qquad t \in \mathbb{R}
					" />
					Alternatively
					<KatexBlock content="
						\begin{cases}
							x(t) &= x_0 + t v_x \\
							y(t) &= y_0 + t v_y \qquad & t \in \mathbb{R} \\
							z(t) &= z_0 + t v_z
						\end{cases}
					" />
				</ExampleBox>

				<ExampleBox header={
					<>
						Find <Bold>a</Bold> parametrisation of the line connecting <KatexInline content="(1, 0, 2)" /> and <KatexInline content="(4, 3, 1)" />.
					</>
				}>
					<KatexBlock content="
						\begin{align*}
							\vec{v} &= (4, 3, 1) - (1, 0, 2) \\
							&= (3, 3, -1) \\
						\end{align*}
					" />
					<KatexBlock content="
						\vec{c}(t) = (1, 0, 2) + t (3, 3, -1), \qquad t \in \mathbb{R}
					" />
					The domain of <KatexInline content="t" /> is important.
				</ExampleBox>

				<ExampleBox header={
					<>
						Find an orientation preserving parametrisation of the curve in <KatexInline content="\mathbb{R}^2" />.
						<KatexBlock content="
							y = \sqrt{a^2 - x^2}, \qquad x \in [-a, a]
						" />
					</>
				}>
					By inspection, this is a semicircle of radius <KatexInline content="a" />.
					<br />
					We will find the parametrisation for both anticlockwise and clockwise rotations.
					<dl>
						<dt>Case 1: Anticlockwise</dt>
						<dd>
							We will use polar coordinates.
							<KatexBlock content="
								\begin{align*}
									x(t) &= a \cos(t) \\
									y(t) &= a \sin(t)
								\end{align*}
							" />
							Please be mindful of the domain of the variable <KatexInline content="t" />.
							<br />
							Double check that when <KatexInline content="t = 0" /> and <KatexInline content="t = \pi" />, the parametrisation is in
							the correct locations.
							<KatexBlock content="
								\vec{c}(t) = (a \cos(t), a \sin(t)), \qquad t \in [0, \pi]
							" />

						</dd>
						<dt>Case 2: Clockwise</dt>
						<dd>
							We can just swap the sign of <KatexInline content="x" />.
							<KatexBlock content="
								\vec{c}(t) = (-a \cos(t), a \sin(t)), \qquad t \in [0, \pi]
							" />
							Alternatively
							<KatexBlock content="
								\vec{c}(t) = (a \cos(t), -a \sin(t)), \qquad t \in [\pi, 2\pi]
							" />
						</dd>
					</dl>
				</ExampleBox>

				<h2>Curve Properties</h2>
				Given a parametrised curve <KatexInline content="\vec{c}(t)" />, if we assume this is the position of a particle, we can calculate the
				following properties of the curve.
				<br /><br />
				<Bold>Velocity</Bold> : <KatexInline content="\vec{v}(t) = \vec{c}'(t) = \left( \frac{\text{d}x}{\text{d}t}, \frac{\text{d}y}{\text{d}t}, \frac{\text{d}z}{\text{d}t} \right)" />
				<br />
				<Bold>Speed</Bold> : <KatexInline content="v(t) = \left\lVert \vec{v}(t) \right\rVert = \sqrt{\left( \frac{\text{d}x}{\text{d}t} \right)^2 + \left( \frac{\text{d}y}{\text{d}t} \right)^2 + \left( \frac{\text{d}z}{\text{d}t} \right)^2}" />
				<br /><br />
				<Bold>Acceleration</Bold> : <KatexInline content="\vec{a}(t) = \frac{\text{d}^2\vec{c}}{\text{d}t^2} = \left( \frac{\text{d}^2x}{\text{d}t^2}, \frac{\text{d}^2y}{\text{d}t^2}, \frac{\text{d}^2z}{\text{d}t^2} \right)" />
				<br /><br />
				<Bold>Tangent Line</Bold> : <KatexInline content="\vec{L}(t) = \vec{c}(t_0) + (t - t_0) \vec{v}'(t_0)" />

				<br /><br /><br />
				The usual laws still hold.
				<br />
				Let <KatexInline content="\vec{b}(t)" />, <KatexInline content="\vec{c}(t)" /> be two differentiable curves in <KatexInline content="\mathbb{R}^3" />.
				Then,
				<ul>
					<li><KatexInline content="\frac{\text{d}}{\text{d}t}(\vec{b} + \vec{c}) = \frac{\text{d}\vec{b}}{\text{d}t} + \frac{\text{d}\vec{c}}{\text{d}t}" /></li>
					<li><KatexInline content="\frac{\text{d}}{\text{d}t}(\vec{b} \cdot \vec{c}) = \frac{\text{d}\vec{b}}{\text{d}t} \cdot \vec{c} + \vec{b} \cdot \frac{\text{d}\vec{c}}{\text{d}t}" /></li>
					<li><KatexInline content="\frac{\text{d}}{\text{d}t}(\vec{b} \times \vec{c}) = \frac{\text{d}\vec{b}}{\text{d}t} \times \vec{c} + \vec{b} \times \frac{\text{d}\vec{c}}{\text{d}t}" /></li>
				</ul>
				(Since the dot and cross products are a type of vector product, we use the usualy product rule.)

				<h2>Differentiation on Parametrised Curves</h2>
				<KatexInline content="\vec{T}(t)" /> is the <Bold>unit tangent vector</Bold> to the path <KatexInline content="\vec{c}(t)" />.
				<div className="def-graph-container">
					<div className="def-graph-def">
						<KatexBlock content="
							\vec{T}(t) = \frac{\frac{\text{d}\vec{c}}{\text{d}t}}{\left\lVert \frac{\text{d}\vec{c}}{\text{d}t} \right\rVert}
						" />
					</div>
					<div className="def-graph-graph">
						<JSXGraphBoard3D
							boundingBox3D={[[-10, 10], [-10, 10], [-5, 5]]}
							view3DPosition={[[-10, -10], [20, 20]]}
							keepAspectRatio={true}
							axis={true}
							pan={false}
							zoom={false}
							height={24}
							// planes={[false, false, false]}
							setup={(board, view) => {
								const scale = 3;
								const c = (t: number) => [t, Math.cosh(t) - 4, -t/3 + 1];
								const dc = (t: number) => [1, Math.sinh(t), -1/3];
								const dcNorm = (t: number) => Math.sqrt(dc(t)[0] ** 2 + dc(t)[1] ** 2 + dc(t)[2] ** 2);
								const tangent = (t: number) => [scale * dc(t)[0] / dcNorm(t), scale * dc(t)[1] / dcNorm(t), scale * dc(t)[2] / dcNorm(t)];

								view.create("curve3d", [
									(t: number) => c(t)[0],
									(t: number) => c(t)[1],
									(t: number) => c(t)[2],
									[-3, 3],
								], {
									strokeOpacity: 0.5,
									strokeColor: "#e63946",
									strokeWidth: 2,
								})

								const a = board.create('slider', [[-6.5, -9], [3.5, -9], [-3, 0, 3]], { name: 't', ...(sliderAttr(color0)), ...(elAttr(color0)), animationLoop: true }) as JXG.Slider & {
									startAnimation(direction: number, steps: number, delay?: number): void;
								};
								a.startAnimation(1, 60, 3000 / 60);

								// Tangent vector
								view.create('line3d', [
									[() => c(a.Value())[0], () => c(a.Value())[1], () => c(a.Value())[2]],
									[() => c(a.Value())[0] + tangent(a.Value())[0], () => c(a.Value())[1] + tangent(a.Value())[1], () => c(a.Value())[2] + tangent(a.Value())[2]],
								], {
									lastArrow: true,
									name: '$$\\vec{T}(t)$$',
									strokeColor: tangentColors[0],
								});

								
							}}
						/>
					</div>
				</div>
				<KatexInline content="\vec{N}(t)" /> is the <Bold>unit normal vector</Bold> to the path <KatexInline content="\vec{c}(t)" />.
				<div className="def-graph-container">
					<div className="def-graph-def">
						<KatexBlock content="
							\vec{N}(t) = \frac{\frac{\text{d}\vec{T}}{\text{d}t}}{\left\lVert \frac{\text{d}\vec{T}}{\text{d}t} \right\rVert}
						" />
					</div>
					<div className="def-graph-graph">
						<JSXGraphBoard3D
							boundingBox3D={[[-10, 10], [-10, 10], [-5, 5]]}
							view3DPosition={[[-10, -10], [20, 20]]}
							keepAspectRatio={true}
							axis={true}
							pan={false}
							zoom={false}
							height={24}
							// planes={[false, false, false]}
							setup={(board, view) => {
								const scale = 3;
								const c = (t: number) => [t, Math.cosh(t) - 4, -t/3 + 1];
								const dc = (t: number) => [1, Math.sinh(t), -1/3];
								const dcNorm = (t: number) => Math.sqrt(dc(t)[0] ** 2 + dc(t)[1] ** 2 + dc(t)[2] ** 2);
								const tangent = (t: number) => [scale * dc(t)[0] / dcNorm(t), scale * dc(t)[1] / dcNorm(t), scale * dc(t)[2] / dcNorm(t)];
								const dtangent = (t: number) => [
									(-Math.sinh(t) * Math.cosh(t)) / Math.pow(Math.sinh(t) ** 2 + 10/9, 1.5), 
									30 * Math.cosh(t) / Math.pow(9 * Math.sinh(t) ** 2 + 10, 1.5), 
									9 * Math.sinh(t) * Math.cosh(t) / Math.pow(9 * Math.sinh(t) ** 2 + 10, 1.5)];
								const dtangentNorm = (t: number) => Math.sqrt(dtangent(t)[0] ** 2 + dtangent(t)[1] ** 2 + dtangent(t)[2] ** 2);
								const normal = (t: number) => [scale * dtangent(t)[0] / dtangentNorm(t), scale * dtangent(t)[1] / dtangentNorm(t), scale * dtangent(t)[2] / dtangentNorm(t)];
								
								view.create("curve3d", [
									(t: number) => c(t)[0],
									(t: number) => c(t)[1],
									(t: number) => c(t)[2],
									[-3, 3],
								], {
									strokeOpacity: 0.5,
									strokeColor: "#e63946",
									strokeWidth: 2,
								})

								const a = board.create('slider', [[-6.5, -9], [3.5, -9], [-3, 0, 3]], { name: 't', ...(sliderAttr(color0)), ...(elAttr(color0)), animationLoop: true }) as JXG.Slider & {
									startAnimation(direction: number, steps: number, delay?: number): void;
								};
								a.startAnimation(1, 60, 3000 / 60);

								// Tangent vector
								view.create('line3d', [
									[() => c(a.Value())[0], () => c(a.Value())[1], () => c(a.Value())[2]],
									[() => c(a.Value())[0] + tangent(a.Value())[0], () => c(a.Value())[1] + tangent(a.Value())[1], () => c(a.Value())[2] + tangent(a.Value())[2]],
								], {
									lastArrow: true,
									name: '$$\\vec{T}(t)$$',
									strokeColor: tangentColors[0],
								});

								// Normal vector
								view.create('line3d', [
									[() => c(a.Value())[0], () => c(a.Value())[1], () => c(a.Value())[2]],
									[() => c(a.Value())[0] + normal(a.Value())[0], () => c(a.Value())[1] + normal(a.Value())[1], () => c(a.Value())[2] + normal(a.Value())[2]],
								], {
									lastArrow: true,
									name: '$$\\vec{N}(t)$$',
									strokeColor: tangentColors[1],
								});
								
							}}
						/>
					</div>
				</div>
				<KatexInline content="\vec{B}(t)" /> is the <Bold>unit binormal vector</Bold> to the path <KatexInline content="\vec{c}(t)" />.
				<div className="def-graph-container">
					<div className="def-graph-def">
						<KatexBlock content="
							\vec{B}(t) = \vec{T}(t) \times \vec{N}(t)
						" />
					</div>
					<div className="def-graph-graph">
						<JSXGraphBoard3D
							boundingBox3D={[[-10, 10], [-10, 10], [-5, 5]]}
							view3DPosition={[[-10, -10], [20, 20]]}
							keepAspectRatio={true}
							axis={true}
							pan={false}
							zoom={false}
							height={24}
							// planes={[false, false, false]}
							setup={(board, view) => {
								const scale = 3;
								const c = (t: number) => [t, Math.cosh(t) - 4, -t/3 + 1];
								const dc = (t: number) => [1, Math.sinh(t), -1/3];
								const dcNorm = (t: number) => Math.sqrt(dc(t)[0] ** 2 + dc(t)[1] ** 2 + dc(t)[2] ** 2);
								const tangent = (t: number) => [scale * dc(t)[0] / dcNorm(t), scale * dc(t)[1] / dcNorm(t), scale * dc(t)[2] / dcNorm(t)];
								const dtangent = (t: number) => [
									(-Math.sinh(t) * Math.cosh(t)) / Math.pow(Math.sinh(t) ** 2 + 10/9, 1.5), 
									30 * Math.cosh(t) / Math.pow(9 * Math.sinh(t) ** 2 + 10, 1.5), 
									9 * Math.sinh(t) * Math.cosh(t) / Math.pow(9 * Math.sinh(t) ** 2 + 10, 1.5)];
								const dtangentNorm = (t: number) => Math.sqrt(dtangent(t)[0] ** 2 + dtangent(t)[1] ** 2 + dtangent(t)[2] ** 2);
								const normal = (t: number) => [scale * dtangent(t)[0] / dtangentNorm(t), scale * dtangent(t)[1] / dtangentNorm(t), scale * dtangent(t)[2] / dtangentNorm(t)];
								
								const b = (t: number) => [
									tangent(t)[1] * normal(t)[2] - tangent(t)[2] * normal(t)[1],
									tangent(t)[2] * normal(t)[0] - tangent(t)[0] * normal(t)[2],
									tangent(t)[0] * normal(t)[1] - tangent(t)[1] * normal(t)[0],
								];
								const bNorm = (t: number) => Math.sqrt(b(t)[0] ** 2 + b(t)[1] ** 2 + b(t)[2] ** 2);
								const binormal = (t: number) => [scale * b(t)[0] / bNorm(t), scale * b(t)[1] / bNorm(t), scale * b(t)[2] / bNorm(t)];

								view.create("curve3d", [
									(t: number) => c(t)[0],
									(t: number) => c(t)[1],
									(t: number) => c(t)[2],
									[-3, 3],
								], {
									strokeOpacity: 0.5,
									strokeColor: "#e63946",
									strokeWidth: 2,
								})

								const a = board.create('slider', [[-6.5, -9], [3.5, -9], [-3, 0, 3]], { name: 't', ...(sliderAttr(color0)), ...(elAttr(color0)), animationLoop: true }) as JXG.Slider & {
									startAnimation(direction: number, steps: number, delay?: number): void;
								};
								a.startAnimation(1, 60, 3000 / 60);

								// Tangent vector
								view.create('line3d', [
									[() => c(a.Value())[0], () => c(a.Value())[1], () => c(a.Value())[2]],
									[() => c(a.Value())[0] + tangent(a.Value())[0], () => c(a.Value())[1] + tangent(a.Value())[1], () => c(a.Value())[2] + tangent(a.Value())[2]],
								], {
									lastArrow: true,
									name: '$$\\vec{T}(t)$$',
									strokeColor: tangentColors[0],
								});

								// Normal vector
								view.create('line3d', [
									[() => c(a.Value())[0], () => c(a.Value())[1], () => c(a.Value())[2]],
									[() => c(a.Value())[0] + normal(a.Value())[0], () => c(a.Value())[1] + normal(a.Value())[1], () => c(a.Value())[2] + normal(a.Value())[2]],
								], {
									lastArrow: true,
									name: '$$\\vec{N}(t)$$',
									strokeColor: tangentColors[1],
								});

								// Binormal vector
								view.create('line3d', [
									[() => c(a.Value())[0], () => c(a.Value())[1], () => c(a.Value())[2]],
									[() => c(a.Value())[0] + binormal(a.Value())[0], () => c(a.Value())[1] + binormal(a.Value())[1], () => c(a.Value())[2] + binormal(a.Value())[2]],
								], {
									lastArrow: true,
									name: '$$\\vec{B}(t)$$',
									strokeColor: tangentColors[2],
								});
								
							}}
						/>
					</div>
				</div>
			</div>
			<NextPage backURL="/vector-calculus/differentiation" backLabel="Differentiation" nextURL="/vector-calculus/" nextLabel="" />
		</div>
	)
}

export default Curves;