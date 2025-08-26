import { Wave, height2 } from "../scripts/waves.ts";
import { useRef } from "react";

type SimulationProps = {
    canvasWidth: number;
    canvasHeight: number;
    ppm: number;
    amplitude: number;
    frequency: number;
    wavelength: number;
    distance: number;
}

export default function Simulation({ canvasWidth, canvasHeight, ppm, amplitude, frequency, wavelength, distance }: SimulationProps) {
    const startTimestamp = Date.now();
    const animationRef = useRef(0);
    const canvasRef = useRef(null);

    const wave1 = new Wave(amplitude, frequency, wavelength, canvasWidth / 2 - distance * 50, canvasHeight / 2);
    const wave2 = new Wave(amplitude, frequency, wavelength, canvasWidth / 2 + distance * 50, canvasHeight / 2);

    function Render() {
        if (canvasRef.current == null) return 0;

        if (wave1 == undefined) return 0;

        const frameTimestamp = Date.now() - startTimestamp;

        for (let i = 0; i < canvasWidth; i++) {
            for (let j = 0; j < canvasHeight; j++) {
                const distance1 = Math.sqrt((i - wave1.x) ** 2 + (j - wave1.y) ** 2) / ppm;
                const distance2 = Math.sqrt((i - wave2.x) ** 2 + (j - wave2.y) ** 2) / ppm;
                const height = height2(wave1, wave2, distance1, distance2,  frameTimestamp / 1000);
                let color;
                if (height == null) color = 0;
                else color = (height / 2 + amplitude) / 2 * 255;
                const canvas = canvasRef.current as HTMLCanvasElement;
                const ctx = canvas.getContext("2d");
                if (ctx == null) return 0;
                ctx.fillStyle = `rgb(${color}, 0, 0)`;
                ctx.fillRect(i, j, 1, 1);
            }
        }
        animationRef.current =  requestAnimationFrame(Render);
    }

    cancelAnimationFrame(animationRef.current);
    animationRef.current =  requestAnimationFrame(Render);

    return (<canvas
        ref={canvasRef}
        className={"bg-black my-5 w-150 max-w-9/10 md:max-w-4/10"}
        width={canvasWidth}
        height={canvasHeight}
    />)
}