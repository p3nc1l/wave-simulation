import { Hullam, magassag2 } from "../scripts/hullamok.ts";
import { useRef } from "react";

export default function Szimulacio({ canvasWidth, canvasHeight, ppm, amplitudo, frekvencia, hullamhossz, tavolsag }) {
    const startTimestamp = Date.now();
    const animationRef = useRef(0);
    const canvasRef = useRef(null);

    const hullam1 = new Hullam(amplitudo, frekvencia, hullamhossz, canvasWidth / 2 - tavolsag * 50, canvasHeight / 2);
    const hullam2 = new Hullam(amplitudo, frekvencia, hullamhossz, canvasWidth / 2 + tavolsag * 50, canvasHeight / 2);

    function Render() {
        if (canvasRef.current == null) return 0;
        const frameTimestamp = Date.now() - startTimestamp;

        for (let i = 0; i < canvasWidth; i++) {
            for (let j = 0; j < canvasHeight; j++) {
                const tavolsag1 = Math.sqrt((i - hullam1.forras.get("x")) ** 2 + (j - hullam1.forras.get("y")) ** 2) / ppm;
                const tavolsag2 = Math.sqrt((i - hullam2.forras.get("x")) ** 2 + (j - hullam2.forras.get("y")) ** 2) / ppm;
                const magassag = magassag2(hullam1, hullam2, tavolsag1, tavolsag2,  frameTimestamp / 1000);
                let color;
                if (magassag == null) color = 0;
                else color = (magassag / 2 + amplitudo) / 2 * 255;
                const ctx = canvasRef.current.getContext("2d");
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