import { Link } from "react-router-dom";
import AnimatedText from "../components/animated text hover/animated text";
import "./home.css";

function HomePage() {
    return (
        <div>
            <h1>Hey there! :D</h1>
            This site has the (intended) purpose of noting down my current and future projects, goals or anything else I wish to keep track of.
            <br /><br />
            I have built this site using Vite, React, and TypeScript. Trying to make this site using as little external libraries as possible, 
            so that I can fully understand the underlying concepts of React.

            <br />
            <div className="linksContainer">
                <AnimatedText>
                    <Link to="/personal-site/goals">Goals</Link>
                </AnimatedText>
                <br />
                <AnimatedText>
                    <Link to="/personal-site/ctf-notes">CTF Notes</Link>
                </AnimatedText>
            </div>
        </div>
    )
}

export default HomePage;