import NextPage from "../components/PageNavigation";
import { Bold, Italic } from "../../components/font styles/font styles";
import KatexBlock from "../../components/katex/KatexBlock";
import KatexInline from "../../components/katex/KatexInline";
import Box from "../../components/box/Box";
import JSXGraphBoard3D, { sliderAttr, elAttr } from "../components/JSXGraph3D/JSXGraph3D";
import ExampleBox from "../components/ExampleBox";

function Limits() {
    const xLineColor = "#987ad5";
    const yLineColor = "#db598e";

    return (
        <div className="vector-calc-container">
            <div className="limits-content">
                <h1>Limits</h1>

                Simply put, a <Bold>limit</Bold> of a function at a point is what the function <Italic>looks like</Italic> it's approaching as
                it gets closer to that point.
                <br />
                It does not matter what the function is doing at that point, just ignore it.
                <br /><br />
                You already know what the 1-dimensional limit is.

                <Box header="Formal defintion of the 2D limit">
                    Formally, (I'm probably going to do this for every definition, but the notation is
                    {" "}<a href="https://handbook.unimelb.edu.au/subjects/mast20026" target="_blank" rel="noopener noreferrer">Real Analysis</a>{" "}
                    level, so lowkey don't worry if you can't understand it),
                    we say that the <Bold>2-dimensional limit</Bold> of a function <KatexInline content="f : \mathbb{R}^2 \to \mathbb{R}" /> at a point
                    {" "}<KatexInline content="(x, y) = (a, b)" /> is equal to <KatexInline content="L" />{" "}
                    (written as <KatexInline content="\lim_{(x, y) \to (a, b)} f(x, y) = L" />) if:
                    <KatexBlock content={`
                            (\\forall \\epsilon > 0) (\\exists \\delta > 0) (\\forall (x, y) \\in \\mathbb{R}^2) 
                            (0 < \\left| (x - a, y - b) \\right| < \\delta) \\implies |f(x, y) - L| < \\epsilon
                        `} />
                    A whole lot of mumbo jumbo if you ask me.
                </Box>

                In plain English, we say a function <KatexInline content="f : \mathbb{R}^2 \to \mathbb{R}" /> has a limit
                {" "}<KatexInline content="L" /> at a point <KatexInline content="(a, b)" /> if for <Italic>any</Italic> path approaching
                {" "}<KatexInline content="(a, b)" /> in the domain, <KatexInline content="f(x, y)" /> gets close to <KatexInline content="L" />.
                <br /><br />
                Regular limit laws are the same.
                <br />
                Let <KatexInline content="\displaystyle \lim_{(x, y) \to (a, b)} f(x, y) = L" /> and <KatexInline content="\displaystyle \lim_{(x, y) \to (a, b)} g(x, y) = M" />.

                <KatexBlock content={`
                    \\begin{aligned}
                        &(1) \\quad \\lim_{(x, y) \\to (a, b)} [f(x, y) + g(x, y)] &&= L + M \\\\
                        &(2) \\quad \\lim_{(x, y) \\to (a, b)} [cf(x, y)] &&= cL \\\\
                        &(3) \\quad \\lim_{(x, y) \\to (a, b)} [f(x, y)g(x, y)] &&= LM \\\\
                        &(4) \\quad \\lim_{(x, y) \\to (a, b)} \\frac{f(x, y)}{g(x, y)} &&= \\frac{L}{M} \\quad \\text{if } M \\neq 0 \\\\
                    \\end{aligned}
                `} />

                Since we have to prove that the limit exists and is the same for all paths to the limit point, without more powerful methods, it is
                usually easier to show that the limit does <Italic>not</Italic> exist by finding two paths that approach the limit point but give
                different values.
                <br /><br />
                When we are trying to find simple limits, we need to try finding two paths (usually lines, although not always) that approach
                the limit point but give different values.
                <br />
                We do this by substituting the path into the function and taking the limit along that path. Such as <KatexInline content="x = 0" />
                {" "}or <KatexInline content="y = 0" /> or <KatexInline content="y = kx" />.

                <ExampleBox header={
                    <>
                        Find
                        <KatexBlock content={`\\lim_{(x, y) \\to (0, 0)} \\frac{x^2}{x^2 + y^2}`} />
                    </>
                }
                    openByDefault={false}>
                    Let's plot this so we can get a better feel for it.
                    <JSXGraphBoard3D
                        boundingBox3D={[[-4, 4], [-4, 4], [0, 0]]}
                        view3DPosition={[[-10, -10], [20, 20]]}
                        keepAspectRatio={true}
                        axis={true}
                        pan={false}
                        zoom={false}
                        setup={(board, view) => {
                            view.create("functiongraph3d", [
                                (x: number, y: number) => x ** 2 / (x ** 2 + y ** 2),
                                [-4, 4],
                                [-4, 4],
                            ], {
                                strokeOpacity: 0.75,
                                // stepsU: 50,
                                // stepsV: 50,
                            });

                            const a: JXG.Slider = board.create('slider', [[-15, -9], [-5, -9], [-4, 1, 4]], { name: 'a', ...(sliderAttr(xLineColor)), ...(elAttr(xLineColor, "#222222")) });
                            const b: JXG.Slider = board.create('slider', [[1.5, -9], [11.5, -9], [-4, 1, 4]], { name: 'b', ...(sliderAttr(yLineColor)), ...(elAttr(yLineColor, "#222222")) });

                            // Case 1
                            view.create("curve3d", [
                                (_t: number) => 0,
                                (t: number) => t,
                                (_t: number) => 0,
                                [-4, 4],
                            ], {
                                strokeOpacity: 0.75,
                                strokeColor: xLineColor,
                                strokeWidth: 2,
                            })
                            view.create("point3d", [() => 0, () => a.Value(), () => 0], {
                                // name: 'xGlider',
                                // withLabel: true,
                                fixed: true,
                                strokeColor: xLineColor,
                                fillColor: xLineColor,
                                highlightStrokeColor: xLineColor,
                                highlightFillColor: xLineColor,
                                size: 5,
                            } as JXG.Point3DAttributes);

                            // Case 2
                            view.create("curve3d", [
                                (t: number) => t,
                                (_t: number) => 0,
                                (_t: number) => 1,
                                [-4, 4],
                            ], {
                                strokeOpacity: 0.75,
                                strokeColor: yLineColor,
                                strokeWidth: 2,
                            })
                            view.create("point3d", [() => b.Value(), () => 0, () => 1], {
                                // name: 'yGlider',
                                // withLabel: true,
                                fixed: true,
                                strokeColor: yLineColor,
                                fillColor: yLineColor,
                                highlightStrokeColor: yLineColor,
                                highlightFillColor: yLineColor,
                                size: 5,
                            } as JXG.Point3DAttributes);

                        }}
                    />
                    Notice how when we approach <KatexInline content={`(x, y) \\to (0, 0)`} /> along the <KatexInline content="x" /> axis and
                    the <KatexInline content="y" /> axis, they approach different points.
                    <br /><br />
                    <br />
                    Remember that we are working in 3D, so there is an <KatexInline content="x" />, <KatexInline content="y" /> and
                    {" "}<KatexInline content="z" /> component.
                    <br />
                    By direct substitution, this is in an indeterminate form.
                    <br /><br />
                    Let's find the limits of this function along two different paths, <KatexInline content="x = 0" /> and <KatexInline content="y = 0" />.
                    <br /><br />
                    <dl>
                        <dt>Case 1: <KatexInline content="x = 0" /></dt>
                        <dd>
                            Let <KatexInline content="x = 0" />.
                            <KatexBlock content={`
                                \\begin{align*}
                                    \\lim_{x \\to 0} \\frac{x^2}{x^2 + y^2} &= \\lim_{x \\to 0} \\frac{0}{y^2} \\\\
                                    &= 0
                                \\end{align*}
                            `} />
                        </dd>
                        <dt>Case 2: <KatexInline content="y = 0" /></dt>
                        <dd>
                            Let <KatexInline content="y = 0" />.
                            <KatexBlock content={`
                                \\begin{align*}
                                    \\lim_{y \\to 0} \\frac{x^2}{x^2 + y^2} &= \\lim_{y \\to 0} \\frac{x^2}{x^2} \\\\
                                    &= 1
                                \\end{align*}
                            `} />
                        </dd>
                    </dl>

                    Since we have found two paths that approach the same point but give different values, we can conclude that the limit does not
                    exist.

                </ExampleBox>

                <ExampleBox header={
                    <>
                        Find
                        <KatexBlock content={`\\lim_{(x, y) \\to (0, 0)} \\frac{xy}{x^2 + y^2}`} />
                    </>
                }
                    openByDefault={false}>
                    Let's do the maths first this time.
                    <br /><br />
                    Substitute straight in gives indeterminate.
                    <br />
                    Let <KatexInline content="x = 0" />.
                    <KatexBlock content={`
                        \\begin{align*}
                            \\lim_{(x, y) \\to (0, 0)} \\frac{xy}{x^2 + y^2} &= \\lim_{(x, y) \\to (0, 0)} \\frac{0 \\cdot y}{0} \\\\
                            &= 0
                        \\end{align*}
                    `} />
                    <br />
                    Let <KatexInline content="y = 0" />.
                    <KatexBlock content={`
                        \\begin{align*}
                            \\lim_{(x, y) \\to (0, 0)} \\frac{xy}{x^2 + y^2} &= \\lim_{(x, y) \\to (0, 0)} \\frac{x \\cdot 0}{x^2} \\\\
                            &= 0
                        \\end{align*}
                    `} />
                    <br /><br />
                    They both approach the same value, good right? Let's try a different path.
                    <br />
                    Let <KatexInline content="y = kx, \quad k \in \mathbb{R}" />.
                    <KatexBlock content={`
                        \\begin{align*}
                            \\lim_{(x, y) \\to (0, 0)} \\frac{xy}{x^2 + y^2} &= \\lim_{(x, y) \\to (0, 0)} \\frac{x \\cdot kx}{x^2 + (kx)^2} \\\\
                            &= \\lim_{(x, y) \\to (0, 0)} \\frac{kx^2}{x^2 + k^2x^2} \\\\
                            &= \\lim_{(x, y) \\to (0, 0)} \\frac{kx^2}{x^2(1 + k^2)} \\\\
                            &= \\lim_{(x, y) \\to (0, 0)} \\frac{k}{1 + k^2} \\\\
                            &= \\frac{k}{1 + k^2} \\neq 0
                        \\end{align*}
                    `} />
                    As no value of <KatexInline content="k" /> will show that the limit approaches <KatexInline content="0" />, we see that the
                    limit depends on the path taken, so the limit must not exist.
                    <br /><br />
                    Lets graph this.
                    <br />
                    The point <KatexInline content="A" /> represents the limit point at <KatexInline content="(0, 0)" /> along the path <KatexInline content="y = kx" />.
                    <JSXGraphBoard3D
                        boundingBox3D={[[-4, 4], [-4, 4], [0, 0]]}
                        view3DPosition={[[-10, -10], [20, 20]]}
                        keepAspectRatio={true}
                        axis={true}
                        pan={false}
                        zoom={true}
                        setup={(board, view) => {
                            view.create("functiongraph3d", [
                                (x: number, y: number) => x * y / (x ** 2 + y ** 2),
                                [-4, 4],
                                [-4, 4],
                            ], {
                                strokeOpacity: 0.75,
                                // stepsU: 50,
                                // stepsV: 50,
                            });

                            const a: JXG.Slider = board.create('slider', [[-6.5, -9], [3.5, -9], [-4, 1, 4]], { name: 'k', ...(sliderAttr(xLineColor)), ...(elAttr(xLineColor, "#222222")) });
                            // const b: JXG.Slider = board.create('slider', [[1.5, -9], [11.5, -9], [-4, 1, 4]], { name: 'b', ...(sliderAttr(yLineColor)), ...(elAttr(yLineColor, "#222222")) });

                            const line = view.create("curve3d", [
                                (t: number) => { return Math.abs(a.Value() * t) < 4 ? t : NaN },
                                (t: number) => a.Value() * t,
                                (_t: number) => a.Value() / (1 + Math.pow(a.Value(), 2)),
                                [-4, 4],
                            ], {
                                strokeOpacity: 0.75,
                                strokeColor: xLineColor,
                                strokeWidth: 2,
                                name: 'y = kx',
                                withLabel: true,
                            })

                            view.create("point3d", [() => 0, () => 0, () => line.Z(0)], {
                                // name: 'xGlider',
                                // withLabel: true,
                                fixed: true,
                                strokeColor: xLineColor,
                                fillColor: xLineColor,
                                highlightStrokeColor: xLineColor,
                                highlightFillColor: xLineColor,
                                size: 5,
                            } as JXG.Point3DAttributes);
                        }}
                    />
                </ExampleBox>

                <ExampleBox header={
                    <>
                        Find
                        <KatexBlock content={`\\lim_{(x, y) \\to (0, 0)} \\frac{\\sin(xy)}{x + y}`} />
                    </>
                }
                    openByDefault={false}>
                    Let <KatexInline content="y = kx" />.
                    <KatexBlock content={`
                        \\begin{align*}
                            \\hspace{5cm} & \\hspace{5cm} \\\\
                            \\lim_{(x, y) \\to (0, 0)} \\frac{\\sin(xy)}{x + y} &= \\lim_{(x, y) \\to (0, 0)} \\frac{\\sin(x \\cdot kx)}{x + kx} \\\\
                            &= \\lim_{(x, y) \\to (0, 0)} \\frac{\\sin(kx^2)}{x(1 + k)} \\\\
                            &= \\lim_{(x, y) \\to (0, 0)} \\frac{\\sin(kx^2)}{x} \\cdot \\frac{1}{1 + k} \\\\
                        \\end{align*}
                    `} />
                    L'Hopital's rule!!!
                    <KatexBlock content={`
                        \\begin{align*}
                            \\hspace{5cm} & \\hspace{5cm} \\\\
                            &= \\lim_{(x, y) \\to (0, 0)} \\frac{2kx\\cos(kx^2)}{1} \\cdot \\frac{1}{1 + k} \\\\
                            &= 0 \\\\
                        \\end{align*}
                    `} />
                    Let <KatexInline content="y = -\sin(x)" />.
                    <br />
                    Won't do it here, but after double L'Hopital's, you will get a limit in the form <KatexInline content="\frac{2}{0}" />.
                    This just means L'Hopital's rule is invalid, and so this doesn't help us (just like in 1D limits).
                    <br /><br />
                    I won't prove it here, but there's a method if you let <KatexInline content="y = -x + x^2" />, which I implore you to try.
                </ExampleBox>
            </div>
            <NextPage backURL="/vector-calculus/introduction" backLabel="Introduction" nextURL="/vector-calculus/proving-limits" nextLabel="Proving Limits" />
        </div >
    )
}

export default Limits;