import { useState } from "react";
import SudokuSquare from "./sudoku square";

interface SquareData {
    value: number | null;
    // add more properties as needed
}

function SudokuGrid() {
    const [squares, setSquares] = useState<SquareData[]>(Array(81).fill({ value: null }));
    

    return (
        <>
        {
            squares.map((squareData, index) => (
                <SudokuSquare 
                    key={index}
                    value={squareData.value}
                />
            ))
        }
        </>
    );
}

export default SudokuGrid;