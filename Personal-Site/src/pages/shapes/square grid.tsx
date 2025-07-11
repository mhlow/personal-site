import { useState, useCallback } from "react";
import Square from "./square";
import "./square grid.css";

export enum SquareState {
    Default,
    Selected,
    Disabled,
}

export enum SquareUserAction {
    Default,
    Hover,
    Active,
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array : any[]): void {
    let currentIndex = array.length;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

let directions : string[] = [
    "right",
    "left",
    "up",
    "down",
]

function SquareGrid({ rows, cols }: { rows: number; cols: number }) {
    // optimise later
    function spreadSquares(centre: number, total: number): number[] {
        let squares : number[] = [centre];
        while (total > 0) {
            // Choose random square
            let randomSquare = squares[Math.floor(Math.random() * squares.length)];
            shuffle(directions);
            
            let squaresLength = squares.length;
            for (let direction of directions) {
                let newSquare: number = 0;
                if (direction === "right" && (randomSquare + 1) % cols !== 0) {
                    newSquare = randomSquare + 1;
                } else if (direction === "left" && randomSquare % cols !== 0) {
                    newSquare = randomSquare - 1;
                } else if (direction === "up") {
                    newSquare = randomSquare - cols;
                } else if (direction === "down") {
                    newSquare = randomSquare + cols;
                } else {
                    continue;
                }
                // Check if newSquare is valid
                if (newSquare >= 0 && newSquare < rows * cols && !squares.includes(newSquare)) {
                    squares.push(newSquare);
                    break; // Exit the loop once a valid square is found
                }
            }

            if (squares.length === squaresLength) {
                continue;
            }          
            total--;
        }
        return squares;
    }

    const [affectedSquares, setAffectedSquares] = useState<number[]>([]);
    const handleMouseEnter = useCallback((id: number) => {
        // console.log(`Mouse entered square ${id}`);
        // setUserAction(SquareUserAction.Hover);
        const newAffectedSquares = spreadSquares(id, 3);
        setAffectedSquares(newAffectedSquares);

        setUserAction(prev => {
            const newUserAction = [...prev];
            for (let squareID of newAffectedSquares) {
                newUserAction[squareID] = SquareUserAction.Hover;
            }
            return newUserAction;
        });
    }, [affectedSquares]);

    const handleMouseLeave = () => {
        // console.log(`Mouse left square ${id}`);
        // setUserAction(SquareUserAction.Default);
        setUserAction(prev => {
            const newUserAction = [...prev];
            // reset all squares to default
            newUserAction.forEach((_, index) => {
                newUserAction[index] = SquareUserAction.Default;
            });
            return newUserAction;
        });
    };

    const handleMouseDown = () => {
        // console.log(`Mouse down on square ${id}`);
        // setUserAction(SquareUserAction.Active);
        setUserAction(prev => {
            const newUserAction = [...prev];
            for (let squareID of affectedSquares) {
                newUserAction[squareID] = SquareUserAction.Active;
            }
            return newUserAction;
        });
    };

    const handleMouseUp = () => {
        // console.log(`Mouse up on square ${id}`);
        // setUserAction(SquareUserAction.Hover);
        setUserAction(prev => {
            const newUserAction = [...prev];
            for (let squareID of affectedSquares) {
                newUserAction[squareID] = SquareUserAction.Hover;
            }
            return newUserAction;
        });
    };

    const handleClick = (id: number) => {
        // console.log(`Square ${id} clicked`);
        if (cellState[id] === SquareState.Default) {
            setCellState(prev => {
                const newCellState = [...prev];
                for (let squareID of affectedSquares) {
                    newCellState[squareID] = SquareState.Selected;
                }
                return newCellState;
            });
        } else if (cellState[id] === SquareState.Selected) {
            setCellState(prev => {
                const newCellState = [...prev];
                for (let squareID of affectedSquares) {
                    newCellState[squareID] = SquareState.Default;
                }
                return newCellState;
            });
        }
    };

    const [cellState, setCellState] = useState<SquareState[]>(Array(rows * cols).fill(SquareState.Default));
    const [userAction, setUserAction] = useState<SquareUserAction[]>(Array(rows * cols).fill(SquareUserAction.Default));

    
    return (
        <div className="squareGrid">
        {[...Array(rows * cols)].map((_, index) => (
            <Square
                key={index}
                id={index}
                click={handleClick}
                mouseEnter={handleMouseEnter}
                mouseLeave={handleMouseLeave}
                mouseDown={handleMouseDown}
                mouseUp={handleMouseUp}
                state={cellState[index]}
                userAction={userAction[index]}
            />
        ))}
        </div>
    );
};

export default SquareGrid;