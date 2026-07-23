import NextPage from "../components/PageNavigation";
import { Bold, Italic } from "../../components/font styles/font styles";

function Introduction() {
    return (
        <div className="vector-calc-container">
            <div className="introduction-content">
                <h1>Introduction</h1>
                <p>
                    As a disclaimer, this course is not a replacement for the actual University course for <a href="https://handbook.unimelb.edu.au/2025/subjects/mast20009" target="_blank" rel="noopener noreferrer">Vector Calculus (MAST20009)</a>.
                    <br />
                    The majority of the material in here comes from my own experiences and notes from 2024. As such, it should be used more of 
                    supplement to the already extensive resources available on the LMS. Many topics here will be covered quicker than is probably 
                    needed for a mathematics subject of this difficulty, in the hopes that you will be able to pause and reason through the material 
                    yourself.
                </p>
                <p>
                    Since this assumes to be a supplement to MAST20009, the following topics are assumed knowledge, and if not, please brush up on 
                    them. While you do not necessarily need them to complete the exam, it helps in the understanding if you can see where these 
                    formulas and concepts come from, and why we do things these ways. I promise you, everything in this course is built on things 
                    you (should) already know, so it should not be impossible to understand how we arrive at these conclusions.
                </p>
                <p>
                    You <Bold>must</Bold> have a good understanding of the below for this course.
                    <ul>
                        <li><Italic>Functions (2D and 3D)</Italic></li>
                        <li><Italic>Vectors</Italic></li>
                        <li><Italic>Linear Algebra (Vector Spaces, Matrices, Linear Transformations)</Italic></li>
                        <li><Italic>Basic Calculus (Derivatives, Integrals, Limits, Sequences, Series)</Italic></li>
                        <li><Italic>Visualising Graphs (2D and 3D)</Italic></li>
                    </ul>
                </p>

                <p>
                    I believe that's all you need to know for now, let's jump right in!
                </p>
                {/* <TestGraph /> */}
            </div>
            <NextPage nextURL="/personal-site/vector-calculus/limits" nextLabel="Limits" />
        </div>
    )
}

export default Introduction;