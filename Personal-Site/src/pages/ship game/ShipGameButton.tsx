import "./ShipGameButton.css";
import shipImage from "./ship.svg";

function ShipGameButton({ onClick }: { onClick: () => void }) {
    return (

        <button className="ship-game-button" onClick={onClick}>
            {/* Icon for ship */}

            <img src={shipImage} alt="Ship Icon" className="ship-icon" />
        </button>
    )
}

export default ShipGameButton;