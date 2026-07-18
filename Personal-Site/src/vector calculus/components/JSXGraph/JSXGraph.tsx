import { useEffect, useId, useRef } from "react";
import JXG from "jsxgraph";
import "jsxgraph/distrib/jsxgraph.css";

interface UseJSXGraphBoardOptions {
    boundingBox?: [number, number, number, number];
    keepAspectRatio?: boolean;
    axisColor?: string;
    showGrid?: boolean;
    pan?: boolean;
    zoom?: boolean;
    // Called once with the initialized board — do whatever you want here:
    // board.create(...) for 2D, view3d + functiongraph3d for 3D, sliders,
    // vector fields, animation loops, anything JSXGraph supports.
    // Return an optional extra cleanup function (e.g. to stop an animation
    // loop) if your setup needs more than just freeing the board.
    setup: (board: JXG.Board) => void | (() => void);
}

function JSXGraphBoard({
    boundingBox = [-10, 10, 10, -10],
    keepAspectRatio = false,
    axisColor = "#abb2bf",
    showGrid = false,
    pan = true,
    zoom = true,
    setup,
}: UseJSXGraphBoardOptions) {
    const containerId = `jxg-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
    const containerRef = useRef<HTMLDivElement>(null);

    // Locked in at mount — this hook is for hardcoded graphs, so refs (not
    // the props directly) are read inside the effect. That way a parent
    // re-render passing new object/array literals doesn't tear down and
    // rebuild the whole JSXGraph board on every render.
    const setupRef = useRef(setup);
    const boundingBoxRef = useRef(boundingBox);
    const keepAspectRatioRef = useRef(keepAspectRatio);
    const axisColorRef = useRef(axisColor);
    const showGridRef = useRef(showGrid);
    const panRef = useRef(pan);
    const zoomRef = useRef(zoom);

    useEffect(() => {
        if (!containerRef.current) return;

        const board = JXG.JSXGraph.initBoard(containerId, {
            boundingbox: boundingBoxRef.current,
            axis: true,
            grid: showGridRef.current,
            keepAspectRatio: keepAspectRatioRef.current,
            showCopyright: false,
            showNavigation: false,
            pan: { enabled: panRef.current, needShift: false },
            zoom: zoomRef.current,
            resize: { enabled: true, throttle: 100 },
            defaultAxes: {
                x: {
                    strokeColor: axisColorRef.current,
                    ticks: {
                        strokeColor: axisColorRef.current,
                        label: { strokeColor: axisColorRef.current },
                    },
                },
                y: {
                    strokeColor: axisColorRef.current,
                    ticks: {
                        strokeColor: axisColorRef.current,
                        label: { strokeColor: axisColorRef.current },
                    },
                },
            },
        });

        const extraCleanup = setupRef.current(board);

        return () => {
            if (typeof extraCleanup === "function") {
                extraCleanup();
            }
            JXG.JSXGraph.freeBoard(board);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerId]);

    return { containerId, containerRef };
}

export default JSXGraphBoard;