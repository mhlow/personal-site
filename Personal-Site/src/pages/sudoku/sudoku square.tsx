import './sudoku square.css'

function SudokuSquare( { value }: { value?: number | null } ) {
    return (
        <div className="sudokuSquare">
            <span>{value !== null ? value : ''}</span>
        </div>
    );
}

export default SudokuSquare;