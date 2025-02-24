import { Callout } from "../components/callout/callout";
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
                        <Checkbox>Web scraping</Checkbox>
                        <Checkbox>Zebbys idea</Checkbox>
                    </div>
                </Callout>
                <Callout title="Personal Site">
                    <div>
                        <Checkbox defaultState={true}>Figure out why open callouts close without animation</Checkbox>
                        <Checkbox><b>A BACK OR HOME BUTTON</b></Checkbox>
                        <Checkbox>Fix nested callouts</Checkbox>
                        <Checkbox>CTF notes</Checkbox>
                        <Checkbox>Code Blocks</Checkbox>
                        <Checkbox>How do I put HTML comments</Checkbox>
                        {/* https://www.youtube.com/watch?v=u1B_RA89Gxg */}
                    </div>
                </Callout>
            </div>
        </div>
    );
}

export default Goals;