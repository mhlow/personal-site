import Callout from "../components/callout/callout";
import Checkbox from "../components/checkbox/checkbox";
import "./goals.css";

function Goals() {
    return (
        <div className="goalsOuter">
            <h1>Goals</h1>
            <p>
                Goals that I wish to accomplish, whether it be short or long term.
            </p>
            <div>
                <Callout title="General" defaultOpen={true}>
                    <div>
                        <Checkbox defaultState={true}>Learn React</Checkbox>
                        <Checkbox>Learn Rust</Checkbox>
                        <Checkbox>Finish Pentesterlab Subscription</Checkbox>
                        <Checkbox>Write up notes for CTFs</Checkbox>
                        <Checkbox>Make a playable game</Checkbox>
                    </div>
                </Callout>
                <Callout title="Personal Site">
                    <div>
                        <Checkbox>Create a personal site</Checkbox>
                        <Checkbox>Learn React</Checkbox>
                    </div>
                </Callout>
            </div>
        </div>
    );
}

export default Goals;