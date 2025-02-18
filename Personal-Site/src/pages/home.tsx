import { Link } from "react-router-dom";
import AnimatedText from "../components/animated text hover/animated text";

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil neque autem quo vero dolorum qui ab numquam, totam perferendis eos, omnis fugit quam ducimus iure voluptates expedita doloremque consequatur voluptatum?
            <br />

            <AnimatedText>
                <Link to="/personal-site/goals">Goals</Link>
            </AnimatedText>
            <br />
            <AnimatedText>
                <Link to="/personal-site/ctf-notes">CTF Notes</Link>
            </AnimatedText>
        </div>
    )
}

export default HomePage;