import NextPage from "../components/PageNavigation";
import { Bold, Italic } from "../../components/font styles/font styles";
import KatexBlock from "../../components/katex/KatexBlock";
import KatexInline from "../../components/katex/KatexInline";
import Box from "../../components/box/Box";
import Katex from "katex/katex.js";
import BlockQuote from "../../components/block quote/BlockQuote";
import ExampleBox from "../components/ExampleBox";

function Limits() {
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

                <ExampleBox header={
                    <>
                        Find
                        <KatexBlock content={`\\lim_{(x, y) \\to (0, 0)} \\frac{x^2}{x^2 + y^2}`} />
                    </>
                }
                openByDefault={false}>
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