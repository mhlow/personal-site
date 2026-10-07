// import { Link } from "react-router-dom";
import NextPage from "../components/PageNavigation";
import KatexInline from "../../components/katex/KatexInline";
import KatexBlock from "../../components/katex/KatexBlock";
import { Bold } from "../../components/font styles/font styles";
import Box from "../../components/box/Box";
import ExampleBox from "../components/ExampleBox/ExampleBox";

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
						\mathbf{D} \vec{F}(\vec{x}) =
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
						\vec{g}(x, y) = (\underbrace{x^2 + 1}_{g_1}, \underbrace{y^2}_{g_2}, \underbrace{x + y}_{g_3})
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
							2x & 0 \\[1ex]
							0 & 2y \\[1ex]
							1 & 1
						\end{bmatrix}
					" />

				</ExampleBox>

				<h2>The Matrix Chain Rule</h2>
				If <KatexInline content="\vec{f}: \mathbb{R}^m \to \mathbb{R}^p" /> and <KatexInline content="\vec{g}: \mathbb{R}^n \to \mathbb{R}^m" />,
				then the derivative of the composition <KatexInline content="\vec{f} \circ \vec{g}" /> is given by:
				<KatexBlock content="
					\mathbf{D} (\vec{f} \circ \vec{g})(\vec{x}) = \mathbf{D}\vec{f} \cdot \mathbf{D}\vec{g}
				" />
				This is the matrix version of the chain rule.
				<br />
				<Bold>Importantly</Bold>, the output of the inner (right) function is the input of the outer (left) function. This means, when we
				calculate <KatexInline content="\mathbf{D}\vec{f}" />, we must use the output of the function <KatexInline content="\vec{g}" /> as the input of <KatexInline content="\vec{f}" />.
				<br />
				To make this explicit, we can write the chain rule as:
				<KatexBlock content="
					\mathbf{D} (\vec{f} \circ \vec{g})(\vec{x}) = \mathbf{D}\vec{f}(g(\vec{x})) \cdot \mathbf{D}\vec{g}(\vec{x})
				" />
				<br />
				See the example for clarification.
				<ExampleBox header={
					<>
						Find the derivative matrix of <KatexInline content="\vec{f} \circ \vec{g}" /> at <KatexInline content="(0, 1)" />, given:
						<KatexBlock content="
							\newcommand{\equalto}[2]{\underset{\scriptstyle\overset{\parallel}{#2}}{#1}}
							\vec{f} : \mathbb{R}^2 \to \mathbb{R}^3, \vec{f}(x, y) = (x^2 + 1, y^2, x + y)\\
							\vec{g} : \mathbb{R}^2 \to \mathbb{R}^2, \vec{g}(u, v) = (u^2 + v^2, u + v)
						"/>
					</>
				}>
					Let's find <KatexInline content="\mathbf{D}\vec{f}" /> and <KatexInline content="\mathbf{D}\vec{g}" />, in terms of their variables.
					<br />
					Find our <KatexInline content="f_1" />, <KatexInline content="f_2" />, and <KatexInline content="f_3" />, and <KatexInline content="g_1" />, <KatexInline content="g_2" />.

					<KatexBlock content="\vec{f}(x, y) = (\underbrace{x^2 + 1}_{f_1}, \underbrace{y^2}_{f_2}, \underbrace{x + y}_{f_3})" />
					<KatexBlock content="\vec{g}(u, v) = (\underbrace{u^2 + v^2}_{g_1}, \underbrace{u + v}_{g_2})" />
					<KatexBlock content="
						\mathbf{D}\vec{f}(x, y) =
						\begin{bmatrix}
							\frac{\partial f_1}{\partial x} & \frac{\partial f_1}{\partial y} \\[1ex]
							\frac{\partial f_2}{\partial x} & \frac{\partial f_2}{\partial y} \\[1ex]
							\frac{\partial f_3}{\partial x} & \frac{\partial f_3}{\partial y}
						\end{bmatrix}
						=
						\begin{bmatrix}
							2x & 0 \\[1ex]
							0 & 2y \\[1ex]
							1 & 1
						\end{bmatrix}
					" />
					<KatexBlock content="
						\mathbf{D}\vec{g}(u, v) =
						\begin{bmatrix}
							\frac{\partial g_1}{\partial u} & \frac{\partial g_1}{\partial v} \\[1ex]
							\frac{\partial g_2}{\partial u} & \frac{\partial g_2}{\partial v}
						\end{bmatrix}
						=
						\begin{bmatrix}
							2u & 2v \\[1ex]
							1 & 1
						\end{bmatrix}
					" />

					Now we can find <KatexInline content="\mathbf{D}\vec{g}(0, 1)" />, since <KatexInline content="(0, 1)" /> is the input to <KatexInline content="\vec{g}" />.
					<KatexBlock content="
						\mathbf{D}\vec{g}(0, 1) =
						\begin{bmatrix}
							2(0) & 2(1) \\[1ex]
							1 & 1
						\end{bmatrix} =
						\begin{bmatrix}
							0 & 2 \\[1ex]
							1 & 1
						\end{bmatrix}
					" />

					Now, to find <KatexInline content="\mathbf{D}\vec{f}" />, we need to use the output of <KatexInline content="\vec{g}" /> as the 
					input of <KatexInline content="\vec{f}" />. Computing <KatexInline content="\vec{g}(0, 1) = (1, 1)" />, thus we can see that
					we should be evaluating <KatexInline content="\mathbf{D}\vec{f}(1, 1)" />.

					<KatexBlock content="
						\mathbf{D}\vec{f}(1, 1) =
						\begin{bmatrix}
							2(1) & 0 \\[1ex]
							0 & 2(1) \\[1ex]
							1 & 1
						\end{bmatrix} =
						\begin{bmatrix}
							2 & 0 \\[1ex]
							0 & 2 \\[1ex]
							1 & 1
						\end{bmatrix}
					" />
					Now we can compute <KatexInline content="\mathbf{D}(\vec{f} \circ \vec{g})(0, 1)" />:
					<KatexBlock content="
						\mathbf{D}(\vec{f} \circ \vec{g})(0, 1) = \mathbf{D}\vec{f}(1, 1) \cdot \mathbf{D}\vec{g}(0, 1) =
						\begin{bmatrix}
							2 & 0 \\[1ex]
							0 & 2 \\[1ex]
							1 & 1
						\end{bmatrix}
						\begin{bmatrix}
							0 & 2 \\[1ex]
							1 & 1
						\end{bmatrix}
						=
						\begin{bmatrix}
							0 & 4 \\[1ex]
							2 & 2 \\[1ex]
							1 & 3
						\end{bmatrix}
					" />
				</ExampleBox>

				<ExampleBox header={
					<>
						Let <KatexInline content="\vec{f}(x, y) = (x^2, 2x + y, y^3)" />, and <KatexInline content="\vec{g}(u, v, w) = (u^2 + 2w, u - v^2)" />.
						<br /><br />
						Find <KatexInline content="\mathbf{D}(\vec{f}(\vec{g}(\vec{f}(x, y))))" /> at <KatexInline content="(1, 0)" />.
					</>
				}>
					<KatexBlock content="
						\mathbf{D}(\vec{f}) = 
						\begin{bmatrix}
							\frac{\partial f_1}{\partial x} & \frac{\partial f_1}{\partial y} \\[1ex]
							\frac{\partial f_2}{\partial x} & \frac{\partial f_2}{\partial y} \\[1ex]
							\frac{\partial f_3}{\partial x} & \frac{\partial f_3}{\partial y}
						\end{bmatrix}
						=
						\begin{bmatrix}
							2x & 0 \\[1ex]
							2 & 1 \\[1ex]
							0 & 3y^2
						\end{bmatrix}
					" />
					<KatexBlock content="
						\mathbf{D}(\vec{g}) =
						\begin{bmatrix}
							\frac{\partial g_1}{\partial u} & \frac{\partial g_1}{\partial v} & \frac{\partial g_1}{\partial w} \\[1ex]
							\frac{\partial g_2}{\partial u} & \frac{\partial g_2}{\partial v} & \frac{\partial g_2}{\partial w}
							\end{bmatrix}
						=
						\begin{bmatrix}
							2u & 0 & 2 \\[1ex]
							1 & -2v & 0
						\end{bmatrix}
					" />

					The point <KatexInline content="(1, 0)" /> goes from <KatexInline content="(1, 0) \to (1, 2, 0) \to  (1, -3)" />.
					<KatexBlock content="
						\begin{align*}
							\mathbf{D}(\vec{f}(\vec{g}(\vec{f}(1, 0)))) &=
							\begin{bmatrix}
								2(1) & 0 \\[1ex]
								2 & 1 \\[1ex]
								0 & 3(-3)^2
							\end{bmatrix}
							\begin{bmatrix}
								2(1) & 0 & 2 \\[1ex]
								1 & -2(2) & 0
							\end{bmatrix}
							\begin{bmatrix}
								2(1) & 0 \\[1ex]
								2 & 1 \\[1ex]
								0 & 3(0)^2
							\end{bmatrix} \\
							&=
							\begin{bmatrix}
								2 & 0 \\[1ex]
								2 & 1 \\[1ex]
								0 & 27
							\end{bmatrix}
							\begin{bmatrix}
								4 & 0 \\[1ex]
								-6 & -4
							\end{bmatrix} \\
							&=
							\begin{bmatrix}
								8 & 0 \\[1ex]
								2 & -4 \\[1ex]
								-162 & -108
							\end{bmatrix}
						\end{align*}
					" />
				</ExampleBox>
			</div>
			<NextPage backURL="/vector-calculus/multivariable-functions" backLabel="Multivariable Functions" nextURL="/vector-calculus/curves" nextLabel="Parametrised Curves" />
		</div>
	)
}

export default Differentiation;