import NextPage from "../components/PageNavigation";
import { Bold, Italic } from "../../components/font styles/font styles";
import KatexBlock from "../../components/katex/KatexBlock";
import KatexInline from "../../components/katex/KatexInline";
import Box from "../../components/box/Box";
import JSXGraphBoard from "../components/JSXGraph/JSXGraph";
import JSXGraphBoard3D from "../components/JSXGraph3D/JSXGraph3D";
import ExampleBox from "../components/ExampleBox";

function Limits() {
    const xLineColor = "#987ad5";
    const yLineColor = "#db598e";

    function sliderAttr(color: string = "#aaaaaa") {
        let slA = {
            layer: 8,
            // Background of the underlying slider
            baseline: {
                highlight: false,
                strokeWidth: 16,
                lineCap: 'round',
                strokeColor: '#eeeef3'
            },
            point1: { frozen: false, fixed: false },
            point2: { frozen: false, fixed: false },
            drawLabel: true,
            face: 'o',
            fillColor: color,
            highlightFillColor: color,
            highlightStrokeColor: color,
            highlightStrokeWidth: 5,
            // Background of the over slider
            highline: {
                highlight: false,
                strokeWidth: 16,
                lineCap: 'round',
                strokeColor: '#dddddd'
            },
            // idk
            label: {
                strokeColor: '#aaaaaa',
                anchorX: 'left',
                anchorY: 'middle',
                layer: 0,
                cssStyle: 'border: 0px solid red; padding: 1px 8px 1px 8px; border-radius: 20px;background-color: #f2f2f2',
            },
            // The button
            size: 7,
            snapValueDistance: 0.1,
            snapWidth: 0.001,
            strokeColor: '#888888',
            strokeWidth: 0,

            ticks: {
                layer: 7,
                digits: 2,
                maxLabelLength: 2,
                majorHeight: 0,
                majorTickEndings: [1, 1],
                strokeWidth: 4,
                strokeColor: '#cccccc'
            },
            visible: true
        };
        return slA;
    }
    function elAttr(backgroundColor: string = '#f2f2f2', labelColor: string = '#aaaaaa') {
        let elA = {
            label: {
                //display: 'internal',
                rotate: 0,
                strokeColor: labelColor,
                anchorX: 'left',
                anchorY: 'middle',
                layer: 7,
                cssStyle: `
                    border: 0px solid red;
                    padding: 1px 8px 1px 8px;
                    margin-left: 10px;
                    border-radius: 20px;
                    background-color: ${backgroundColor};
                    white-space: nowrap;
                `
            }
        }
        return elA;
    }

    return (
        <div className="vector-calc-container">
            <div className="limits-content">
                <h1>Limits</h1>

                {/* <JSXGraphBoard
                    boundingBox={[-10, 10, 10, -10]}
                    keepAspectRatio={true}
                    axis={true}
                    showGrid={true}
                    pan={false}
                    zoom={true}
                    setup={(board) => {
                        const parabola = board.create("functiongraph", [(x: number) => x * x], {
                            strokeColor: "#e5c07b",
                            strokeWidth: 2,
                        });
                        const p1 = board.create('glider', [0, 0, parabola], { name: 'test', withLabel: true });
                        const p2 = board.create('point', [4, 3], { name: '', withLabel: false });
                        board.create('arrow', [p1, p2], { name: 'v', strokeWidth: 3 });
                    }}
                /> */}
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

                <ExampleBox header={
                    <>
                        Find
                        <KatexBlock content={`\\lim_{(x, y) \\to (0, 0)} \\frac{x^2}{x^2 + y^2}`} />
                    </>
                }
                    openByDefault={true}>
                    Let's plot this so we can get a better feel for it.
                    <JSXGraphBoard3D
                        boundingBox3D={[[-4, 4], [-4, 4], [0, 0]]}
                        view3DPosition={[[-10, -10], [20, 20]]}
                        keepAspectRatio={true}
                        axis={true}
                        pan={false}
                        zoom={false}
                        setup={(board, view) => {
                            const graph = view.create("functiongraph3d", [
                                (x: number, y: number) => x ** 2 / (x ** 2 + y ** 2),
                                [-4, 4],
                                [-4, 4],
                            ], {
                                strokeOpacity: 0.75,
                                // stepsU: 30,
                                // stepsV: 30,
                            });

                            const a: JXG.Slider = board.create('slider', [[-15, -9], [-5, -9], [-4, 1, 4]], { name: 'a', ...(sliderAttr(xLineColor)), ...(elAttr(xLineColor, "#222222")) });
                            const b: JXG.Slider = board.create('slider', [[1.5, -9], [11.5, -9], [-4, 1, 4]], { name: 'b', ...(sliderAttr(yLineColor)), ...(elAttr(yLineColor, "#222222")) });

                            // Case 1
                            const xLine = view.create("curve3d", [
                                (t: number) => 0,
                                (t: number) => t,
                                (t: number) => 0,
                                [-4, 4],
                            ], {
                                strokeOpacity: 0.75,
                                strokeColor: xLineColor,
                                strokeWidth: 2,
                            })
                            const xGlider = view.create("point3d", [() => 0, () => a.Value(), () => 0], {
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
                            const yLine = view.create("curve3d", [
                                (t: number) => t,
                                (t: number) => 0,
                                (t: number) => 1,
                                [-4, 4],
                            ], {
                                strokeOpacity: 0.75,
                                strokeColor: yLineColor,
                                strokeWidth: 2,
                            })
                            const yGlider = view.create("point3d", [() => b.Value(), () => 0, () => 1], {
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
                    the <KatexInline content="y" /> they approach different points.
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
            </div>
            <NextPage backURL="/personal-site/vector-calculus/introduction" backLabel="Introduction" nextURL="/personal-site/vector-calculus/limits" nextLabel="" />
        </div >
    )
}

export default Limits;