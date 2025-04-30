import { useState, Fragment } from "react";
import Square from "./square";
import "./square grid.css";

function SquareGrid({ rows, cols }: { rows: number; cols: number }) {
    const [cells, setCells] = useState(
        Array(rows * cols).fill(<Square />)
    );

    

    return (
        <div className="squareGrid">
        {cells.map((cell, index) => (
            <Fragment key={index}>
            {cell}
            </Fragment>
        ))}
        </div>
    );
};

export default SquareGrid;