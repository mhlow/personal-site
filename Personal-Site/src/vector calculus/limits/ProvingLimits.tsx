import NextPage from "../components/PageNavigation";
import { Bold, Italic } from "../../components/font styles/font styles";
import KatexBlock from "../../components/katex/KatexBlock";
import KatexInline from "../../components/katex/KatexInline";
import Box from "../../components/box/Box";
import JSXGraphBoard3D, { sliderAttr, elAttr } from "../components/JSXGraph3D/JSXGraph3D";
import ExampleBox from "../components/ExampleBox";

function ProvingLimits() {
    const xLineColor = "#987ad5";
    const yLineColor = "#db598e";

    return (
        <div className="vector-calc-container">
            <div className="limits-content">
                <h1>Proving Limits</h1>

                The only method we have to definitely prove a limit in this course is through the Sandwich/Squeeze Theorem.
                <Box header="Sandwich/Squeeze Theorem">
                    Suppose for a limit point <KatexInline content="(x, y)" /> near <KatexInline content="(a, b)" />,
                    that <KatexInline content="f" />,  <KatexInline content="g" /> and <KatexInline content="h" /> are functions such that
                    <KatexBlock content={`
                        g(x, y) \\leq f(x, y) \\leq h(x, y)
                    `} />
                    If <KatexInline content="\lim_{(x, y) \to (a, b)} g(x, y) = L = \lim_{(x, y) \to (a, b)} h(x, y)" />, then
                    <KatexBlock content={`
                        \\lim_{(x, y) \\to (a, b)} f(x, y) = L
                    `} />
                </Box>

                <ExampleBox header={
                    <>
                        Find
                        <KatexBlock content={`\\lim_{(x, y) \\to (0, 0)} \\frac{x^2}{\\sqrt{x^2 + y^2}}`} />
                    </>
                }
                    openByDefault={false}>
                    If <KatexInline content="(x, y) \neq (0, 0)" />, then
                    <KatexBlock content={`
                        0 < \\frac{x^2}{\\sqrt{x^2 + y^2}} < \\frac{x^2 + y^2}{\\sqrt{x^2 + y^2}} = \\sqrt{x^2 + y^2}
                    `} />
                    Apply limits:
                    <KatexBlock content={`
                        \\begin{align*}
                            \\lim_{(x, y) \\to (0, 0)} 0 &< \\lim_{(x, y) \\to (0, 0)} \\frac{x^2}{\\sqrt{x^2 + y^2}} &&< \\lim_{(x, y) \\to (0, 0)} \\sqrt{x^2 + y^2} \\\\
                            0 &= \\lim_{(x, y) \\to (0, 0)} \\frac{x^2}{\\sqrt{x^2 + y^2}} &&< 0 
                        \\end{align*}
                    `} />
                    Hence, by the Sandwich/Squeeze Theorem, the limit approaches <KatexInline content="0" />.
                </ExampleBox>
            </div>
            <NextPage backURL="/personal-site/vector-calculus/Limits" backLabel="Limits" nextURL="/personal-site/vector-calculus/continuity" nextLabel="Continuity" />
        </div >
    )
}

export default ProvingLimits;