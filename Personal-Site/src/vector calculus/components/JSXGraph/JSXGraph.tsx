import "./JSXGraph.css";
import { useEffect, useId, useRef } from "react";
import JXG from "jsxgraph";

interface JSXGraphBoardOptions {
    height?: number;
    width?: number;
    boundingBox?: [number, number, number, number];
    keepAspectRatio?: boolean;
    axis?: boolean;
    showGrid?: boolean;
    pan?: boolean;
    zoom?: boolean;
    setup: (board: JXG.Board) => void | (() => void);
}

function JSXGraphBoard({
    height = 24,
    width,
    boundingBox = [-10, 10, 10, -10],
    keepAspectRatio = true,
    axis = true,
    showGrid = false,
    pan = true,
    zoom = true,
    setup,
}: JSXGraphBoardOptions) {
    const containerId = `jxg-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
    const containerRef = useRef<HTMLDivElement>(null);

    const axisColor = "#abb2bf"; // Default axis color

    useEffect(() => {
        if (!containerRef.current) return;

        const board = JXG.JSXGraph.initBoard(containerId, {
            boundingbox: boundingBox,
            axis: axis,
            grid: showGrid,
            keepAspectRatio: keepAspectRatio,
            showCopyright: false,
            showNavigation: false,
            pan: { enabled: pan, needShift: false },
            zoom: zoom,
            resize: { enabled: true, throttle: 100 },
            defaultAxes: {
                x: {
                    strokeColor: axisColor,
                    ticks: { strokeColor: axisColor, label: { strokeColor: axisColor } },
                },
                y: {
                    strokeColor: axisColor,
                    ticks: { strokeColor: axisColor, label: { strokeColor: axisColor } },
                },
            },
        });

        // User defined setup function to add elements to the board
        setup(board);

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, [containerId]);

    return (
        <>
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
            <div className="jsxgraph-container">
                <div
                    id={containerId}
                    ref={containerRef}
                    className="jxgbox math-graph-board aa"
                    style={{ width: width ? `${width}rem` : "100%", height: `${height}rem` }}
                />
            </div>
        </>
    );
}

export default JSXGraphBoard;