import { useState } from "react";
import "./square.css"

function Square() {

    enum SquareState {
        Default,
        Selected,
        Disabled,
    }

    enum SquareUserAction {
        Default,
        Hover,
        Active,
    }

    const [state, setState] = useState<SquareState>(SquareState.Default);
    const [userAction, setUserAction] = useState<SquareUserAction>(SquareUserAction.Default);

    const handleMouseEnter = () => {
        setUserAction(SquareUserAction.Hover);
    }
    const handleMouseLeave = () => {
        setUserAction(SquareUserAction.Default);
    };
    const handleMouseDown = () => {
        setUserAction(SquareUserAction.Active);
    };
    const handleMouseUp = () => {
        setUserAction(SquareUserAction.Hover);
    };
    const handleClick = () => {
        if (state === SquareState.Default) {
            setState(SquareState.Selected);
        } else if (state === SquareState.Selected) {
            setState(SquareState.Default);
        }
    };

    return (
        <div
            className={`square state${SquareState[state]} userAction${SquareUserAction[userAction]}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
        >
        </div>
    );
}

export default Square;