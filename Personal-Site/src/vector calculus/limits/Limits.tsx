import NextPage from "../components/PageNavigation";
import { Bold, Italic } from "../../components/font styles/font styles";
import KatexBlock from "../../components/katex/KatexBlock";
import KatexInline from "../../components/katex/KatexInline";

function Limits() {
    return (
        <div className="vector-calc-container">
            <div className="limits-content">
                <h1>Limits</h1>
                <p>
                    Simply put, a <Bold>limit</Bold> of a function at a point is what the function <Italic>looks like</Italic> it's approaching as
                    it gets closer to that point.
                    <br />
                    It does not matter what the function is doing at that point, just ignore it.
                </p>
                <p>
                    You already know what the 1-dimensional limit is.
                </p>
                <p>
                    Formally, (I'm probably going to do this for every definition, but the notation is
                    {" "}<a href="https://handbook.unimelb.edu.au/subjects/mast20026" target="_blank" rel="noopener noreferrer">Real Analysis</a>{" "}
                    level, so lowkey don't worry if you can't understand it),
                    <br />
                    we say that the <Bold>2-dimensional limit</Bold> of a function <KatexInline content="f : \mathbb{R}^2 \to \mathbb{R}" /> at a point
                    {" "}<KatexInline content="(x, y) = (a, b)" /> is equal to <KatexInline content="L" />{" "}
                    (written as <KatexInline content="\lim_{(x, y) \to (a, b)} f(x, y) = L" />) if:
                    <KatexBlock content={`
                        (\\forall \\epsilon > 0) (\\exists \\delta > 0) (\\forall (x, y) \\in \\mathbb{R}^2) (0 < \\left| (x - a, y - b) \\right| < \\delta) \\implies |f(x, y) - L| < \\epsilon
                    `} />
                    A whole lot of mumbo jumbo if you ask me.
                </p>
                <p>

                </p>
            </div>
            <NextPage backURL="/personal-site/vector-calculus/introduction" backLabel="Introduction" nextURL="/personal-site/vector-calculus/limits" nextLabel="" />
        </div>
    )
}

export default Limits;