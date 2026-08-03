import { Link } from "react-router-dom";
import { vectorCalculusPages } from "../components/VectorCalculusRouter";

function Contents() {
    return (
        <div>
            <h1>Contents</h1>
            <ul>
                {vectorCalculusPages.map(([title, _path, _page]) => (
                    <li key={title}>
                        <Link to={`/vector-calculus/${_path}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Contents;