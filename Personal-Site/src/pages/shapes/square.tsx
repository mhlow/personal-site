import { ReactElement } from "react";
import "./square.css"
import { SquareState, SquareUserAction } from "./square grid";



function Square( {
    id, 
    click, 
    mouseEnter, 
    mouseLeave, 
    mouseDown, 
    mouseUp, 
    state, 
    userAction 
} : {
    id: number, 
    click: (id:number) => void, 
    mouseEnter: (id:number) => void, 
    mouseLeave: () => void, 
    mouseDown: () => void, 
    mouseUp: () => void 
    state: SquareState,
    userAction: SquareUserAction
} ): ReactElement {
    
    return (
        <div
            className={`square state${SquareState[state]} userAction${SquareUserAction[userAction]}`}
            onMouseEnter={() => mouseEnter(id)}
            onMouseLeave={() => mouseLeave()}
            onMouseDown={() => mouseDown()}
            onMouseUp={() => mouseUp()}
            onClick={() => click(id)}
        >
        </div>
    );
}

export default Square;