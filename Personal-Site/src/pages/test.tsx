import BlockQuote from "../components/block quote/BlockQuote";
import Box from "../components/box/Box";
import "./test.css"

function Test() {
    return (
        <div className="test-container">
            <h1>Test</h1>
            <Box header = "Box Header">
                <p>This is a box</p>
            </Box>
            <Box fullWidth>
                <p>This is a box</p>
            </Box>
            <Box header="Header Header">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies ex lectus, quis facilisis nibh tristique sit amet. Praesent eget convallis orci. Nulla aliquet nisl dolor, quis ultrices est fermentum in. Ut eleifend, nulla at blandit fringilla, dolor augue porta massa, eget mattis sapien risus ut diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla mollis, mauris quis ornare placerat, sem nunc ullamcorper tellus, vel condimentum arcu nisl vel dolor. Nullam at justo in felis convallis hendrerit.</p>

                <p>Nulla tristique malesuada mi sit amet pretium. Vivamus venenatis vehicula congue. Nullam consequat, turpis tempus facilisis posuere, libero orci pretium lorem, eu commodo eros neque eget ex. Quisque sollicitudin nibh sit amet vulputate dignissim. Cras imperdiet augue ipsum, id gravida enim dictum et. Proin pretium porttitor magna a dignissim. Vivamus accumsan sit amet nulla quis gravida. Mauris sit amet eleifend tortor, vitae ullamcorper nisi. Curabitur molestie non metus ac aliquet. Nam porttitor cursus nunc eget viverra. Nulla dignissim, lectus quis fermentum mollis, erat lorem dictum ex, a pretium felis nisl id arcu. Proin congue, eros id volutpat blandit, diam libero sagittis massa, id ultricies quam nulla vel ipsum.</p>
            </Box>

            <p style={{ color: "var(--color-accent-content)" }}>Some test text</p>

            <BlockQuote>
                <p>This is a blockquote</p>
            </BlockQuote>
        </div>
    )
}

export default Test;