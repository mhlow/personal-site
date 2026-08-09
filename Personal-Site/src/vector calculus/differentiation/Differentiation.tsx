// import { Link } from "react-router-dom";
import NextPage from "../components/PageNavigation";
// import Box from "../../components/box/Box";
import KatexInline from "../../components/katex/KatexInline";
import KatexBlock from "../../components/katex/KatexBlock";
// import KatexBlock from "../../components/katex/KatexBlock";
// import ExampleBox from "../components/ExampleBox";
import { Bold, Italic } from "../../components/font styles/font styles";
import Box from "../../components/box/Box";
import Katex from "katex/katex.js";
import ExampleBox from "../components/ExampleBox";
// import JSXGraphBoard3D from "../components/JSXGraph3D/JSXGraph3D";

function Differentiation() {
	return (
		<div className="vector-calc-container">
			<div className="differentiation-content">
				<h1>Differentiation</h1>
				We all know the chain rule: <KatexInline content="\frac{\text{d}y}{\text{d}x} = \frac{\text{d}y}{\text{d}u}\frac{\text{d}u}{\text{d}x}" />.
				<br /><br />
				But what if we're working with parametric curves? Or vector fields? How do we calculate the derivative?
				<br />
				For functions with multiple inputs, we will have to extend the chain rule. For multiple outputs, we can simply treat each output
				as a separate function, and smoosh the results together in a vector.
				<h2>Differentiation in Matrix Form</h2>

				Let <KatexInline content="h = h(u, v, w)" /> and <KatexInline content="u = u(x, y, z), v = v(x, y, z), w = w(x, y, z)" />. Then:
				<KatexBlock content="
					\begin{align*}
						\frac{\partial h}{\partial x} &= \frac{\partial h}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial h}{\partial v}\frac{\partial v}{\partial x} + \frac{\partial h}{\partial w}\frac{\partial w}{\partial x} \\
						\frac{\partial h}{\partial y} &= \frac{\partial h}{\partial u}\frac{\partial u}{\partial y} + \frac{\partial h}{\partial v}\frac{\partial v}{\partial y} + \frac{\partial h}{\partial w}\frac{\partial w}{\partial y} \\
						\frac{\partial h}{\partial z} &= \frac{\partial h}{\partial u}\frac{\partial u}{\partial z} + \frac{\partial h}{\partial v}\frac{\partial v}{\partial z} + \frac{\partial h}{\partial w}\frac{\partial w}{\partial z}
					\end{align*}
				" />
				<br />
				We can also write this in matrix form:
				<KatexBlock content="
					\begin{bmatrix}
						\frac{\partial h}{\partial x} &
						\frac{\partial h}{\partial y} &
						\frac{\partial h}{\partial z}
					\end{bmatrix}
					=
					\begin{bmatrix}
						\frac{\partial h}{\partial u} &
						\frac{\partial h}{\partial v} &
						\frac{\partial h}{\partial w}
					\end{bmatrix}
					\begin{bmatrix}
						\frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} & \frac{\partial u}{\partial z} \\[1ex]
						\frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} & \frac{\partial v}{\partial z} \\[1ex]
						\frac{\partial w}{\partial x} & \frac{\partial w}{\partial y} & \frac{\partial w}{\partial z}
					\end{bmatrix}
				" />
				This 3x3 matrix is a specific case of the Jacobian matrix.
				<br />
				<Box header="Jacobian Matrix and Determinant">
					The <Bold>Jacobian matrix</Bold> is a matrix that represents the partial derivatives of a function with respect to its inputs.
					<br /><br />
					If <KatexInline content="\vec{F} : \mathbb{R}^n \to \mathbb{R}^m" />, then the Jacobian matrix is given by:
					<KatexBlock content="
						\vec{F}(\vec{x}) =
						\begin{bmatrix}
							f_1(x_1, x_2, \ldots, x_n) &
							f_2(x_1, x_2, \ldots, x_n) &
							\cdots &
							f_m(x_1, x_2, \ldots, x_n)
						\end{bmatrix}
					" />
					<KatexBlock content="
						D\vec{F}(\vec{x}) =
						\frac{\partial \vec{F}}{\partial \vec{x}} =
						\begin{bmatrix}
							\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\[1ex]
							\frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\[1ex]
							\vdots & \vdots & \ddots & \vdots \\
							\frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n}
						\end{bmatrix}
					" />
					For vector fields, it'll often be written as: <KatexInline content="\frac{\partial(u, v)}{\partial(x, y)}" /> or <KatexInline content="\frac{\partial(u, v, w)}{\partial(x, y, z)}" />.
					<br /><br />
					The determinant of the Jacobian matrix is the <Bold>Jacobian determinant</Bold>, and is used heavily in change of variables later on.
					<KatexBlock content="
						\begin{align*}
							\left| \frac{\partial(u, v)}{\partial(x, y)} \right| &= 
							\begin{vmatrix}
								\frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\[1ex]
								\frac{\partial v}{\partial x} & \frac{\partial v}{\partial y}
							\end{vmatrix} \\
							\left| \frac{\partial(u, v, w)}{\partial(x, y, z)} \right| &= 
							\begin{vmatrix}
								\frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} & \frac{\partial u}{\partial z} \\[1ex]
								\frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} & \frac{\partial v}{\partial z} \\[1ex]
								\frac{\partial w}{\partial x} & \frac{\partial w}{\partial y} & \frac{\partial w}{\partial z}
							\end{vmatrix}
						\end{align*}
						" />
				</Box>
				This is a very important concept in multivariable calculus, and will be used extensively in this course. You'll need to know how
				to calculate it.

				<ExampleBox header={
					<>
						Find the derivative matrix for <KatexInline content="\vec{g}" />, given:
						<KatexBlock content="
							\vec{g} : \mathbb{R}^2 \to \mathbb{R}^3, \vec{g}(x, y) = (x^2 + 1, y^2, x + y)\\
						"/>
					</>
				}>
					Since our function is <KatexInline content="\vec{g} : \mathbb{R}^2 \to \mathbb{R}^3" />, then we know our derivative matrix will be 3x2.
					<br />
					Let's identify our <KatexInline content="g_1" />, <KatexInline content="g_2" />, and <KatexInline content="g_3" />.
					<KatexBlock content="
 						\newcommand{\equalto}[2]{\underset{\scriptstyle\overset{\parallel}{#2}}{#1}}
						\vec{g}(x, y) = (\equalto{x^2 + 1\vphantom{y}}{g_1}, \equalto{y^2}{g_2}, \equalto{x + y}{g_3})
					"/>
					We can now compute our derivative matrix:
					<KatexBlock content="
						D\vec{g}(x, y) =
						\begin{bmatrix}
							\frac{\partial g_1}{\partial x} & \frac{\partial g_1}{\partial y} \\[1ex]
							\frac{\partial g_2}{\partial x} & \frac{\partial g_2}{\partial y} \\[1ex]
							\frac{\partial g_3}{\partial x} & \frac{\partial g_3}{\partial y}
						\end{bmatrix}
						=
						\begin{bmatrix}
							2x & 1 \\[1ex]
							0 & 2y \\[1ex]
							1 & 1
						\end{bmatrix}
					" />

				</ExampleBox>

				<h2>The Matrix Chain Rule</h2>
				If <KatexInline content="\vec{f}: \mathbb{R}^m \to \mathbb{R}^p" /> and <KatexInline content="\vec{g}: \mathbb{R}^n \to \mathbb{R}^m" />,
				then the derivative of the composition <KatexInline content="\vec{f} \circ \vec{g}" /> is given by:
				<KatexBlock content="
					D(\vec{f} \circ \vec{g})(\vec{x}) = D\vec{f} \cdot D\vec{g}
				" />
				This is the matrix version of the chain rule.
				<br />
				The functions given can often be written using the same variables, so you <Bold>must</Bold> remember that the variables used in the
				first function are different from the variables used in the second function, or it'll bite you in the ass.
				<br />
				See the example for clarification.
				<ExampleBox header={
					<>
						Find the derivative of <KatexInline content="f \circ g" /> at <KatexInline content="()" />, given:
						<KatexBlock content="
							\newcommand{\equalto}[2]{\underset{\scriptstyle\overset{\parallel}{#2}}{#1}}
							f : \mathbb{R}^2 \to \mathbb{R}^3, f(x, y) = (x^2 + 1, y^2, x + y)\\
							g : \mathbb{R}^2 \to \mathbb{R}^2, g(x, y) = (x^2 + y^2, x + y)
						"/>
					</>
				}>

				</ExampleBox>
			</div>
			<NextPage backURL="/vector-calculus/multivariable-functions" backLabel="Multivariable Functions" nextURL="/vector-calculus/differentiability" nextLabel="Differentiability" />
		</div>
	)
}

export default Differentiation;