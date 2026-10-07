// import { Link } from "react-router-dom";
import NextPage from "../components/PageNavigation";
// import Box from "../../components/box/Box";
import KatexInline from "../../components/katex/KatexInline";
// import KatexBlock from "../../components/katex/KatexBlock";
// import ExampleBox from "../components/ExampleBox";
import { Bold, Italic } from "../../components/font styles/font styles";
import JSXGraphBoard3D, { sliderAttr, elAttr, curveColor } from "../components/JSXGraph3D/JSXGraph3D";
import JSXGraphBoard from "../components/JSXGraph/JSXGraph";
import Box from "../../components/box/Box";

function MultivariableFunctions() {
    const color0 = 0;
    const color1 = 1;

    return (
        <div className="vector-calc-container">
            <div className="multivariable-functions-content">
                <h1>Multivariable Functions</h1>
                We're familiar with our regular one dimensional functions, <KatexInline content="f : \mathbb{R} \to \mathbb{R}" />.
                <br />
                It takes in one real number and outputs another real number, defined by some sort of rule. That's what the
                {" "}<KatexInline content="\mathbb{R}^1 \to \mathbb{R}^1" /> means.
                <br />
                The <KatexInline content="\mathbb{R}^1" /> on the left means that it has a singular input, and maps it to a singular output,
                represent by the <KatexInline content="\mathbb{R}^1" /> on the right.
                <br /><br />
                But what if we want multiple inputs? What if we want multiple outputs? What if we want a function that takes in multiple inputs
                and outputs multiple outputs?

                <h2>Functions with multiple inputs</h2>
                <Italic>Functions of several variables </Italic> are in the general form <KatexInline content="f : \mathbb{R}^n \to \mathbb{R}" />.
                <br /><br />
                We've already seen functions with multiple inputs, for 2 dimensions, for example
                <KatexInline content="f : \mathbb{R}^2 \to \mathbb{R}, f(x, y) = e^{-x^2 - y^2}" />.
                The whole function can be represented in three dimensions.

                <JSXGraphBoard3D
                    boundingBox3D={[[-3, 3], [-3, 3], [0, 2]]}
                    view3DPosition={[[-10, -7], [20, 20]]}
                    keepAspectRatio={true}
                    axis={true}
                    pan={false}
                    zoom={false}
                    setup={(board, view) => {
                        view.create("functiongraph3d", [
                            (x: number, y: number) => Math.exp(-(x ** 2) - (y ** 2)),
                            [-3, 3],
                            [-3, 3],
                            [0, 3],
                        ], {
                            strokeOpacity: 0.75,
                            stepsU: 50,
                            stepsV: 50,
                        });

                        board.create('text', [-3.2, 8, '$$f(x, y) = e^{-x^2 - y^2}$$'], {
                            fontSize: 18,
                            strokeColor: 'black',
                            fixed: true,
                            highlight: false,
                            useMathJax: true,
                        });
                    }}
                />

                We can also have 3 inputs and 1 output, but this becomes a 4 dimensional space.
                You can do it by thinking of the output (the fourth dimension) as a density (or colour), and the inputs as the position of points
                in 3D space.
                <br />
                So the object you are thinking about is a block of material, with varying density on the inside.


                <h2>Functions with multiple outputs</h2>
                <Italic>Vector-valued functions </Italic> of one variable are in the general form <KatexInline content="\vec{f} : \mathbb{R} \to \mathbb{R}^m" />.
                <br /><br />
                In general, they are functions that take a single input, and output multiple values, or vectors.
                <br />
                It can be thought of as a vector (from the origin) tracing out a path with it's tip over time.
                <br /><br />
                We only really deal with <Bold>parametric curves</Bold>; that is <KatexInline content="\vec{f} : \mathbb{R} \to \mathbb{R}^3" />.

                <JSXGraphBoard3D
                    boundingBox3D={[[-3, 3], [-3, 3], [0, 3]]}
                    view3DPosition={[[-10, -7], [20, 20]]}
                    keepAspectRatio={true}
                    axis={true}
                    pan={false}
                    zoom={false}
                    setup={(board, view) => {
                        view.create("curve3d", [
                            (t: number) => Math.sin(t),
                            (t: number) => Math.cos(t),
                            (t: number) => Math.exp((t - 10) / 2),
                            [0, 12],
                        ], {
                            strokeOpacity: 0.75,
                        });

                        board.create('text', [-5.6, 8, '$$\\vec{f}(t) = \\left( \\sin(t), \\cos(t), e^{\\frac{t - 10}{2}} \\right), \\qquad t \\in [0, 12]$$'], {
                            fontSize: 18,
                            strokeColor: 'black',
                            fixed: true,
                            highlight: false,
                            useMathJax: true,
                        });

                        const a = board.create('slider', [[-6.5, -9], [3.5, -9], [0, 0, 12]], { name: 't', ...(sliderAttr(color0)), ...(elAttr(color0)), animationLoop: true }) as JXG.Slider & {
                            startAnimation(direction: number, steps: number, delay?: number): void;
                        };
                        a.startAnimation(1, 120, 3000 / 120);

                        view.create('line3d', [
                            [0, 0, 0],
                            [() => Math.sin(a.Value()), () => Math.cos(a.Value()), () => Math.exp((a.Value() - 10) / 2)],
                        ], {
                            lastArrow: true,
                        });
                    }}
                />

                <Italic>Vector-valued functions </Italic> of multiple variables are in the general form <KatexInline content="\vec{f} : \mathbb{R}^n \to \mathbb{R}^m, n \neq m" />.
                <br /><br />
                The only one we deal with in this course is <Bold>parametric surfaces</Bold>; <KatexInline content="\vec{f} : \mathbb{R}^2 \to \mathbb{R}^3" />.
                <br />
                These are surfaces that are defined by two parameters, <KatexInline content="u" /> and <KatexInline content="v" />, and output a point
                in 3D space.
                <br />
                You should think of <KatexInline content="u" /> and <KatexInline content="v" /> as the basis vectors of a plane, each pointing in
                different directions along the surface.

                <JSXGraphBoard3D
                    boundingBox3D={[[-5, 5], [-5, 5], [-2, 3]]}
                    view3DPosition={[[-10, -10], [20, 20]]}
                    keepAspectRatio={true}
                    axis={true}
                    pan={false}
                    zoom={false}
                    setup={(board, view) => {

                        // Slider for u
                        const u: JXG.Slider = board.create('slider', [[-15, -9], [-5, -9], [-3, 0, 3]], { name: 'u', ...(sliderAttr(color0)), ...(elAttr(color0)) });
                        // Slider for v
                        const v: JXG.Slider = board.create('slider', [[1.5, -9], [11.5, -9], [-3, -1, 3]], { name: 'v', ...(sliderAttr(color1)), ...(elAttr(color1)) });

                        const x = (u: number, v: number) => u / 2 + v;
                        const y = (u: number, v: number) => u + Math.sin(v);
                        const z = (u: number, v: number) => Math.exp(-((u + v) ** 2));

                        const dxdu = (_u: number, _v: number) => 1 / 2;
                        const dydu = (_u: number, _v: number) => 1;
                        const dzdu = (u: number, v: number) => -2 * Math.exp(-((u + v) ** 2)) * (u + v);
                        const dxdv = (_u: number, _v: number) => 1;
                        const dydv = (_u: number, v: number) => Math.cos(v);
                        const dzdv = (u: number, v: number) => -2 * Math.exp(-((u + v) ** 2)) * (u + v);


                        view.create("parametricsurface3d", [
                            x,
                            y,
                            z,
                            [-3, 3],
                            [-3, 3],
                        ], {
                            strokeOpacity: 0.75,
                            stepsU: 60,
                            stepsV: 60,
                        });

                        // u Vector
                        view.create('line3d', [
                            [
                                () => x(u.Value(), v.Value()),
                                () => y(u.Value(), v.Value()),
                                () => z(u.Value(), v.Value())
                            ],
                            [
                                () => x(u.Value(), v.Value()) + dxdu(u.Value(), v.Value()),
                                () => y(u.Value(), v.Value()) + dydu(u.Value(), v.Value()),
                                () => z(u.Value(), v.Value()) + dzdu(u.Value(), v.Value())
                            ],
                        ], {
                            strokeColor: curveColor[color0],
                            lastArrow: true,
                        });

                        // v Vector
                        view.create('line3d', [
                            [
                                () => x(u.Value(), v.Value()),
                                () => y(u.Value(), v.Value()),
                                () => z(u.Value(), v.Value())
                            ],
                            [
                                () => x(u.Value(), v.Value()) + dxdv(u.Value(), v.Value()),
                                () => y(u.Value(), v.Value()) + dydv(u.Value(), v.Value()),
                                () => z(u.Value(), v.Value()) + dzdv(u.Value(), v.Value())
                            ],
                        ], {
                            strokeColor: curveColor[color1],
                            lastArrow: true,
                        });

                        board.create('text', [-8, 8, '$$\\vec{f}(u, v) = \\left( \\frac{u}{2} + v, \\;\\; u + \\sin(v), \\;\\; e^{-(u + v)^2} \\right), \\qquad u \\in [-3, 3], v \\in [-3, 3]$$'], {
                            fontSize: 18,
                            strokeColor: 'black',
                            fixed: true,
                            highlight: false,
                            useMathJax: true,
                        });
                    }}
                />

                <h2>Vector Fields</h2>
                <Bold>Vector fields</Bold> are in the general form <KatexInline content="\vec{F} : \mathbb{R}^n \to \mathbb{R}^n" />.
                <br /><br />
                In this course we only deal with <KatexInline content="\vec{F} : \mathbb{R}^3 \to \mathbb{R}^3" />, and the occaisional
                {" "}<KatexInline content="\vec{F} : \mathbb{R}^2 \to \mathbb{R}^2" />.
                <br />
                A vector field is a function that takes in a point in space, and outputs a vector at that point. They essentially draw a vector for
                each point.
                <br />
                Remember that a vector is just an arrow, so it will begin at the point, and end at the point plus the vector.

                <JSXGraphBoard
                    boundingBox={[-5, 5, 5, -5]}
                    keepAspectRatio={true}
                    axis={true}
                    pan={true}
                    zoom={true}
                    showGrid={true}
                    setup={(board) => {
                        const fx = (x: number, _y: number) => x / 4;
                        const fy = (_x: number, y: number) => y / 8;

                        board.create('vectorfield', [
                            [fx, fy],    // Defining function
                            [-5, 10, 5], // Horizontal mesh
                            [-3, 6, 3], // Vertical mesh
                        ], {
                            strokeOpacity: 0.75,
                            strokeWidth: 2,
                        });

                        board.create('text', [-2, 4.2, '$$\\vec{f}(x, y) = \\left( \\frac{x}{4}, \\;\\; \\frac{y}{8} \\right), \\qquad x \\in [-5, 5], y \\in [-3, 3]$$'], {
                            fontSize: 18,
                            strokeColor: 'black',
                            fixed: true,
                            highlight: false,
                            useMathJax: true,
                        });
                    }}
                />
                <JSXGraphBoard3D
                    boundingBox3D={[[-4, 4], [-2, 6], [-4, 4]]}
                    view3DPosition={[[-10, -10], [20, 20]]}
                    keepAspectRatio={true}
                    axis={true}
                    pan={false}
                    zoom={false}
                    setup={(board, view) => {
                        (view as any).create("vectorfield3d", [
                            [
                                (x: number, _y: number) => x / 3,
                                (_x: number, y: number) => y **2 / 12,
                                (_x: number, _y: number) => 0,
                            ],
                            [-3, 6, 3],
                            [0, 6, 3],
                            [-3, 6, 3],
                        ], {
                            // strokeOpacity: 0.75,
                            // strokeWidth: 2,
                            arrowHead: {
                                enabled: true,
                                size: 4,  // Pixel length of arrow head
                                angle: Math.PI / 16
                            }
                        });

                        board.create('text', [-4.8, 8.2, '$$\\vec{f}(x, y) = \\left( \\frac{x}{3}, \\;\\; \\frac{y^2}{30}, \\;\\; 0 \\right), \\qquad x \\in [-3, 3], \\quad y \\in [0, 3], \\quad z \\in [-3, 3]$$'], {
                            fontSize: 18,
                            strokeColor: 'black',
                            fixed: true,
                            highlight: false,
                            useMathJax: true,
                        });
                    }}
                />

                <Box header="Main Takeaway">
                    We really only deal with a few of them:
                    <ul>
                        <li>3D functions: <KatexInline content="f : \mathbb{R}^2 \to \mathbb{R}" /></li>
                        <li><Bold>Parametric curves</Bold>: <KatexInline content="\vec{c} : \mathbb{R} \to \mathbb{R}^3" /></li>
                        <li><Bold>Parametric surfaces</Bold>: <KatexInline content="\vec{\phi} : \mathbb{R}^2 \to \mathbb{R}^3" /></li>
                        <li><Bold>Vector fields</Bold>: <KatexInline content="\vec{F} : \mathbb{R}^2 \to \mathbb{R}^2, \mathbb{R}^3 \to \mathbb{R}^3" /></li>
                    </ul>
                </Box>

            </div>
            <NextPage backURL="/vector-calculus/differentiability" backLabel="Differentiability" nextURL="/vector-calculus/differentiation" nextLabel="Differentiation" />
        </div>
    )
}

export default MultivariableFunctions;