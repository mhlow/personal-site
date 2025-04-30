import SquareGrid from "./square grid"
import "./shapes.css"

function Shapes() {
    return (
        <div>
            <h1>Square</h1>
            <div>
                Square
            </div>
            <div className="squareGridContainer">
                <SquareGrid rows={24} cols={24} />
            </div>
        </div>
    );
}



export default Shapes;