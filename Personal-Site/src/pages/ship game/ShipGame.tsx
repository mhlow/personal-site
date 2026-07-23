import { useEffect, useRef } from "react";
import "./ShipGame.css";
import shipImage from "./ship.svg";

type ShipState = {
    x: number;
    y: number;
    angle: number;
    vx: number;
    vy: number;
};

const CONTROL_KEYS = new Set(["w", "a", "s", "d", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);

function ShipGame() {
    // Container required because shrinking canvas size doesn't shrink actual drawing area
    const containerRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const keysRef = useRef(new Set<string>());
    const animationFrameRef = useRef<number | null>(null);
    const shipRef = useRef<ShipState>({ x: 0, y: 0, angle: 0, vx: 0, vy: 0 });
    // const starsRef = useRef<Array<{ x: number; y: number; radius: number; alpha: number }>>([]);
    const shipImageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const img = new Image();
        img.src = shipImage;

        img.onload = () => {
            shipImageRef.current = img;
        };

        if (!canvas || !container) {
            return;
        }

        const context = canvas.getContext("2d");

        if (!context) {
            return;
        }

        const shipRadius = 24;
        const thrust = 420;
        const drag = 1.4;
        const maxSpeed = 320;
        const dpr = window.devicePixelRatio || 1;

        const resizeCanvas = () => {
            const width = Math.max(576, container.clientWidth);
            const height = Math.max(360, container.clientHeight);

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            context.setTransform(dpr, 0, 0, dpr, 0, 0);

            shipRef.current = {
                x: width / 2,
                y: height / 2,
                angle: -Math.PI / 2,
                vx: 0,
                vy: 0,
            };
        };

        const drawScene = (width: number, height: number, ship: ShipState, _moving: boolean) => {
            context.clearRect(0, 0, width, height);

            // const background = context.createLinearGradient(0, 0, width, height);
            // background.addColorStop(0, "#0d1226");
            // background.addColorStop(1, "#101b33");
            // const background = rgba(0, 0, 0, 0);
            // context.fillStyle = background;
            // context.fillRect(0, 0, width, height);

            // const glow = context.createRadialGradient(width * 0.75, height * 0.2, 12, width * 0.75, height * 0.2, width * 0.45);
            // glow.addColorStop(0, "rgba(117, 193, 255, 0.16)");
            // glow.addColorStop(1, "rgba(117, 193, 255, 0)");
            // context.fillStyle = glow;
            // context.fillRect(0, 0, width, height);

            // context.fillStyle = "rgba(255, 255, 255, 0.9)";
            // for (const star of starsRef.current) {
            //     context.globalAlpha = star.alpha;
            //     context.beginPath();
            //     context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            //     context.fill();
            // }
            context.globalAlpha = 1;

            context.save();
            context.translate(ship.x, ship.y);
            context.rotate(ship.angle);

            // Moving animation
            // if (moving) {
            //     context.fillStyle = "rgba(255, 164, 77, 0.75)";
            //     context.beginPath();
            //     context.moveTo(0, 24);
            //     context.lineTo(-7, 38);
            //     context.lineTo(0, 32);
            //     context.lineTo(7, 38);
            //     context.closePath();
            //     context.fill();
            // }

            // Ship
            // use ship svg
            context.drawImage(img, -shipRadius, -shipRadius, shipRadius * 2, shipRadius * 2);
            // context.fillStyle = "#d8e6ff";
            // context.beginPath();
            // context.moveTo(0, -20);
            // context.lineTo(13, 16);
            // context.lineTo(0, 9);
            // context.lineTo(-13, 16);
            // context.closePath();
            // context.fill();

            // context.strokeStyle = "rgba(104, 187, 255, 0.85)";
            // context.lineWidth = 2;
            // context.stroke();

            // context.fillStyle = "rgba(30, 42, 71, 0.95)";
            // context.beginPath();
            // context.ellipse(0, 3, 4, 7, 0, 0, Math.PI * 2);
            // context.fill();
            // --

            context.restore();

            // Grid
            context.strokeStyle = "rgba(255, 255, 255, 0.08)";
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(0, height * 0.5);
            context.lineTo(width, height * 0.5);
            context.moveTo(width * 0.5, 0);
            context.lineTo(width * 0.5, height);
            context.stroke();

            // UI Text
            context.fillStyle = "rgba(255, 255, 255, 0.7)";
            context.font = "600 13px system-ui, sans-serif";
            context.fillText("WASD or arrow keys to move", 16, 24);
            context.fillText(`Position: ${Math.round(ship.x)}, ${Math.round(ship.y)}`, 16, 44);
            context.fillText(`Speed: ${Math.round(Math.hypot(ship.vx, ship.vy))}`, 16, 64);
        };

        resizeCanvas();

        const resizeObserver = new ResizeObserver(() => {
            resizeCanvas();
        });

        resizeObserver.observe(container);

        const handleKeyDown = (event: KeyboardEvent) => {
            if (!CONTROL_KEYS.has(event.key)) {
                return;
            }

            event.preventDefault();
            keysRef.current.add(event.key);
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (!CONTROL_KEYS.has(event.key)) {
                return;
            }

            event.preventDefault();
            keysRef.current.delete(event.key);
        };

        const handleBlur = () => {
            keysRef.current.clear();
        };

        window.addEventListener("keydown", handleKeyDown, { passive: false });
        window.addEventListener("keyup", handleKeyUp, { passive: false });
        window.addEventListener("blur", handleBlur);

        let previousTime = performance.now();

        const frame = (time: number) => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const delta = Math.min((time - previousTime) / 1000, 0.05);
            previousTime = time;

            const horizontal = (keysRef.current.has("d") || keysRef.current.has("ArrowRight") ? 1 : 0) - (keysRef.current.has("a") || keysRef.current.has("ArrowLeft") ? 1 : 0);
            const vertical = (keysRef.current.has("s") || keysRef.current.has("ArrowDown") ? 1 : 0) - (keysRef.current.has("w") || keysRef.current.has("ArrowUp") ? 1 : 0);
            const magnitude = Math.hypot(horizontal, vertical);
            const ship = shipRef.current;
            let moving = false;

            if (magnitude > 0) {
                const normalizedX = horizontal / magnitude;
                const normalizedY = vertical / magnitude;
                const accelerationX = normalizedX * thrust * delta;
                const accelerationY = normalizedY * thrust * delta;

                ship.vx += accelerationX;
                ship.vy += accelerationY;
                ship.angle = Math.atan2(normalizedY, normalizedX) + Math.PI / 2;
                moving = true;
            }

            const speed = Math.hypot(ship.vx, ship.vy);

            if (speed > 0) {
                const dragFactor = Math.max(0, 1 - drag * delta);
                ship.vx *= dragFactor;
                ship.vy *= dragFactor;

                const slowedSpeed = Math.hypot(ship.vx, ship.vy);
                if (slowedSpeed > maxSpeed) {
                    const scale = maxSpeed / slowedSpeed;
                    ship.vx *= scale;
                    ship.vy *= scale;
                }

                if (magnitude === 0 && Math.hypot(ship.vx, ship.vy) < 1) {
                    ship.vx = 0;
                    ship.vy = 0;
                }
            }

            ship.x += ship.vx * delta;
            ship.y += ship.vy * delta;

            // Wrap
            if (ship.x < -shipRadius) {
                ship.x = width + shipRadius;
            } else if (ship.x > width + shipRadius) {
                ship.x = -shipRadius;
            }

            if (ship.y < -shipRadius) {
                ship.y = height + shipRadius;
            } else if (ship.y > height + shipRadius) {
                ship.y = -shipRadius;
            }

            if (!moving && Math.hypot(ship.vx, ship.vy) > 0) {
                moving = true;
            }

            drawScene(width, height, ship, moving || Math.hypot(ship.vx, ship.vy) > 0);
            animationFrameRef.current = window.requestAnimationFrame(frame);
        };

        animationFrameRef.current = window.requestAnimationFrame(frame);

        // 1. Disable scrolling when the component mounts
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';


        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("blur", handleBlur);

            if (animationFrameRef.current !== null) {
                window.cancelAnimationFrame(animationFrameRef.current);
            }
            // 2. Re-enable scrolling when the component unmounts
            document.body.style.overflow = originalStyle;
        };

    }, []);

    return (
        <div className="ship-game-container" ref={containerRef}>
            <canvas ref={canvasRef} className="ship-game-canvas" aria-label="Ship movement canvas" />
        </div>
    );
}

export default ShipGame;