import { Link } from "react-router-dom";
import ThemeSwitch from "./theme switch/theme-switch";

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>

            <Link to="/goals">Goals</Link>
            <ThemeSwitch />
        </div>
    )
}

export default HomePage;