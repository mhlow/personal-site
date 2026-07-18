

// import "./MathGraph.css";
import { useEffect, useId, useRef } from "react";
import JXG from "jsxgraph";
// import "jsxgraph/distrib/jsxgraph.css";

function XSquaredGraph() {
    const containerId = `jxg-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const board = JXG.JSXGraph.initBoard(containerId, {
            boundingbox: [-6, 20, 6, -2],
            axis: true,
            keepAspectRatio: true,
            showCopyright: false,
            showNavigation: false,
            pan: { enabled: true, needShift: false },
            zoom: { wheel: true, needShift: true, factorX: 1.25, factorY: 1.25 },
            resize: { enabled: true, throttle: 100 },
            defaultAxes: {
                x: {
                    strokeColor: "#abb2bf",
                    ticks: { strokeColor: "#abb2bf", label: { strokeColor: "#abb2bf" } },
                },
                y: {
                    strokeColor: "#abb2bf",
                    ticks: { strokeColor: "#abb2bf", label: { strokeColor: "#abb2bf" } },
                },
            },
        });

        const parabola = board.create("functiongraph", [(x: number) => x * x], {
            strokeColor: "#e5c07b",
            strokeWidth: 2,
        });

        const p1 = board.create('glider', [0, 0, parabola], { name: 'test', withLabel: true });
        const p2 = board.create('point', [4, 3], { name: '', withLabel: false });
        board.create('arrow', [p1, p2], { name: 'v', strokeWidth: 3 });

        // Slider to control length of vectors
        const s = board.create('slider', [[-3, 7], [3, 7], [0, 0.33, 1]], { name: 'length' });
        // Slider to control number of steps
        const stepsize = board.create('slider', [[-3, 6], [3, 6], [1, 20, 100]], { name: 'steps', snapWidth: 1 });

        // Defining functions
        const fx = (x: number, _y: number) => 0.2 * (Math.cos(x) - 2) * Math.sin(x);
        const fy = (x: number, _y: number) => 0.2 * (Math.cos(x) - 2) * Math.sin(x);

        board.create('vectorfield', [
            [fx, fy],        // Defining function
            [-6, () => stepsize.Value(), 6], // Horizontal mesh
            [-5, () => stepsize.Value(), 5], // Vertical mesh
        ], {
            highlightStrokeColor: JXG.palette.blue, // Make highlighting invisible

            scale: () => s.Value(), // Scaling of vectors
            
            arrowHead: {
                enabled: true,
                size: 8,  // Pixel length of arrow head
                angle: Math.PI / 16
            }
        });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, [containerId]);

    return (
        <>
            <script src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js" />
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
            <div
                id={containerId}
                ref={containerRef}
                className="jxgbox math-graph-board"
                style={{ width: "100%", height: 350 }}
            />
        </>
    );
}

export default XSquaredGraph;