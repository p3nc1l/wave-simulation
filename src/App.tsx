import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
import { Hullam, magassag2 } from "./scripts/hullamok.ts";
import { useState, useRef } from "react";

const canvasWidth = 100;
const canvasHeight = canvasWidth;
const ppm = canvasWidth; //pixel per meter

function App() {
    const [amplitudo, setAmplitudo] = useState(0.5);
    const [frekvencia, setFrekvencia] = useState(2.5);
    const [hullamhossz, setHullamhossz] = useState(0.06);
    const [tavolsag, setTavolsag] = useState(50);

    const canvasRef = useRef(null);
    const animationRef = useRef(0);

    let start: number = 0;
    let hullam1: Hullam;
    let hullam2: Hullam;

    function Render() {
        if (start != 0) {
            const frameStart = Date.now();
            for (let i = 0; i < canvasWidth; i++) {
                for (let j = 0; j < canvasHeight; j++) {
                    const tavolsag1 = Math.sqrt((i - hullam1.forras.get("x")) ** 2 + (j - hullam1.forras.get("y")) ** 2) / ppm;
                    const tavolsag2 = Math.sqrt((i - hullam2.forras.get("x")) ** 2 + (j - hullam2.forras.get("y")) ** 2) / ppm;
                    const canvas = canvasRef.current;
                    if (canvas != null) {
                        const ctx = canvas.getContext("2d");
                        const y = magassag2(hullam1, hullam2, tavolsag1, tavolsag2, (frameStart - start) / 1000);
                        let color;
                        if (y == null) color = 0;
                        else color = (y / 2 + amplitudo) / 2 * 255;
                        ctx.fillStyle = `rgb(${color}, 0, 0)`;
                        ctx.fillRect(i, j, 1, 1);
                    }
                }
            }
        }
        animationRef.current = requestAnimationFrame(Render);
    }

    function valtozas() {
        if (!(frekvencia == 0 || hullamhossz == 0)) {
            hullam1 = new Hullam(amplitudo, frekvencia, hullamhossz, canvasWidth / 2 + tavolsag / 2, canvasHeight / 2);
            hullam2 = new Hullam(amplitudo, frekvencia, hullamhossz, canvasWidth / 2 - tavolsag / 2, canvasHeight / 2);
            start = Date.now();
            cancelAnimationFrame(animationRef.current);
            animationRef.current = requestAnimationFrame(Render);
        }
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className={"flex items-center justify-center gap-5"}>
                <canvas ref={canvasRef} className={"bg-black my-5 w-200"} id="szimulacio" width={canvasWidth} height={canvasHeight}></canvas>
                <div className={"flex gap-2 flex-col w-xs"}>
                    <span className={"text-black"}>Amplitudo</span>
                    <Slider
                        onChange={(e) => {
                            setAmplitudo(e.target.value);
                            valtozas()
                        }}
                        value={amplitudo}
                        min={0}
                        max={1}
                        step={0.1}
                    />
                    <span className={"text-black"}>Frekvencia</span>
                    <Slider
                        onChange={(e) => {
                            setFrekvencia(e.target.value);
                            valtozas()
                        }}
                        value={frekvencia}
                        min={0.5}
                        max={5}
                        step={0.5}
                    />
                    <span className={"text-black"}>Hullamhossz</span>
                    <Slider
                        onChange={(e) => {
                            setHullamhossz(e.target.value);
                            valtozas()
                        }}
                        value={hullamhossz}
                        min={0.03}
                        max={0.13}
                        step={0.01}
                    />
                    <Divider />
                    <span className={"text-black"}>Tavolsag</span>
                    <Slider
                        onChange={(e) => {
                            setTavolsag(e.target.value);
                            valtozas()
                        }}
                        value={tavolsag}
                        min={0}
                        max={100}
                        step={10}
                    />
                </div>
            </div>

        </div>
    )
}

export default App;