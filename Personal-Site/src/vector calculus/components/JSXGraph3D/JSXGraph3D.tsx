import "../JSXGraph/JSXGraph.css";
import { useEffect, useId, useRef } from "react";
import JXG from "jsxgraph";

// Reference: https://jsxgraph.uni-bayreuth.de/share/example/3d-function-graph-assessment [22/07/2026]

interface JSXGraphBoard3DOptions {
    height?: number;
    // The x/y/z ranges of the 3D scene, e.g. [[-5,5],[-5,5],[-5,5]].
    boundingBox3D?: [[number, number], [number, number], [number, number]];
    // Where the 3D view sits within the flat board's own coordinate space:
    // [bottomLeftCorner, [width, height]].
    view3DPosition?: [[number, number], [number, number]];
    // These apply to the flat underlying board the 3D view is placed on,
    // not the 3D scene itself — the 3D scene draws its own axes/grid via
    // view3d, so these default to false/off rather than matching the 2D
    // component's defaults.
    keepAspectRatio?: boolean;
    axis?: boolean;
    pan?: boolean;
    zoom?: boolean;
    // Called once with the initialized board AND the view3d — 3D content
    // (functiongraph3d, curve3d, point3d, etc.) is created via
    // view.create(...), not board.create(...). Still receiving board too
    // in case you want 2D elements (e.g. a slider) alongside the 3D scene.
    setup: (board: JXG.Board, view: JXG.View3D) => void | (() => void);
}

function JSXGraphBoard3D({
    height = 24,
    boundingBox3D = [
        [-5, 5],
        [-5, 5],
        [-5, 5],
    ],
    view3DPosition = [
        [-10, -10],
        [20, 20],
    ],
    keepAspectRatio = true,
    axis = true,
    pan = false,
    zoom = false,
    setup,
}: JSXGraphBoard3DOptions) {
    const containerId = `jxg-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
    const containerRef = useRef<HTMLDivElement>(null);

    // const axisColor = "#abb2bf";

    useEffect(() => {
        if (!containerRef.current) return;

        const board = JXG.JSXGraph.initBoard(containerId, {
            // Fixed canvas the 3D viewport is placed on — the actual scene
            // ranges come from boundingBox3D below, not from this value.
            boundingbox: [-20, 10, 20, -10],
            keepAspectRatio: keepAspectRatio,
            showCopyright: false,
            showNavigation: false,
            pan: { enabled: pan, needShift: true },
            zoom: zoom,
        });

        const view: JXG.View3D = board.create("view3d", [
            view3DPosition[0],
            view3DPosition[1],
            boundingBox3D,
        ], {
            azimuth: 180,  // Initial camera rotation (horizontal)
            elevation: 30,  // Initial camera elevation (vertical)
            projection: "central",
            trackball: { enabled: false }, // Lowkey feels janky

            // Default axes are fine
            xAxis: {
                visible: axis,
                name: 'x',
                withLabel: true,
                label: {
                    cssStyle: `
                        font-weight: bold;
                    `
                }
            },
            yAxis: {
                visible: axis,
                name: 'y',
                withLabel: true,
            },
            zAxis: {
                visible: axis,
                name: 'z',
                withLabel: true,
            },


            xPlaneRear: {
                visible: true,
                // mesh3d: { visible: false },
                // fillColor: "#ffffff",
            },
            yPlaneRear: {
                visible: true,
                // strokeColor: "#ffffff",
                // fillColor: "#ffffff",
            },
            zPlaneRear: { visible: true },
            xPlaneFront: { visible: false },
            yPlaneFront: { visible: false },
            zPlaneFront: { visible: false },
        } as JXG.View3DAttributes);

        // User defined setup function to add elements to the board/view
        setup(board, view);

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
                    className="jxgbox math-graph-board"
                    // style={{ width: height ? `${height * 2}rem` : "100%", height: `${height}rem` }}
                    style={{ width: "100%", height: `${height}rem` }}
                />
            </div>
        </>
    );
}

export default JSXGraphBoard3D;

function sliderAttr(color: string = "#aaaaaa") {
    let slA = {
        layer: 8,
        // Background of the underlying slider
        baseline: {
            highlight: false,
            strokeWidth: 16,
            lineCap: 'round',
            strokeColor: '#eeeef3'
        },
        point1: { fixed: true },
        point2: { fixed: true },
        drawLabel: true,
        face: 'o',
        fillColor: color,
        highlightFillColor: color,
        highlightStrokeColor: color,
        highlightStrokeWidth: 5,
        // Background of the over slider
        highline: {
            highlight: false,
            strokeWidth: 16,
            lineCap: 'round',
            strokeColor: '#dddddd'
        },
        // idk
        label: {
            strokeColor: '#aaaaaa',
            anchorX: 'left',
            anchorY: 'middle',
            layer: 0,
            cssStyle: 'border: 0px solid red; padding: 1px 8px 1px 8px; border-radius: 20px;background-color: #f2f2f2',
        },
        // The button
        size: 7,
        snapValueDistance: 0.1,
        snapWidth: 0.001,
        strokeColor: '#888888',
        strokeWidth: 0,

        ticks: {
            layer: 7,
            digits: 2,
            maxLabelLength: 2,
            majorHeight: 0,
            majorTickEndings: [1, 1],
            strokeWidth: 4,
            strokeColor: '#cccccc',
        },
        visible: true
    };
    return slA;
}

function elAttr(backgroundColor: string = '#f2f2f2', labelColor: string = '#aaaaaa') {
    let elA = {
        label: {
            //display: 'internal',
            rotate: 0,
            strokeColor: labelColor,
            anchorX: 'left',
            anchorY: 'middle',
            layer: 7,
            cssStyle: `
                    border: 0px solid red;
                    padding: 1px 8px 1px 8px;
                    margin-left: 10px;
                    border-radius: 20px;
                    background-color: ${backgroundColor};
                    white-space: nowrap;
                `
        }
    }
    return elA;
}

export { sliderAttr, elAttr };