import Callout from "./callout/callout";
import "./goals.css";

function Goals() {
    // Checkbox for each goal
    // one of them being finish this site
    return (
        <div className="goalsOuter">
            <h1>Goals</h1>
            <p>
                Goals that I wish to accomplish, whether it be short or long term.
            </p>
            <div>
                <input type="checkbox" id="goal1" name="goal1" value="goal1"></input>
                <label>Finish this site</label>
                <Callout title="Personal Site">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sed perspiciatis iste eaque at id, laboriosam eos vero accusamus! Excepturi, dolores. Quidem consequatur ut delectus natus! Esse labore quam nobis!
                    </div>
                </Callout>
            </div>
        </div>
    );
}

export default Goals;