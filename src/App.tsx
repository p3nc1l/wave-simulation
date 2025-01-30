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
    const [frekvencia, setFrekvencia] = useState(0);
    const [hullamhossz, setHullamhossz] = useState(0);
    const [tavolsag, setTavolsag] = useState(50);
    const canvasRef = useRef(null);

    let start: number;
    let hullam1: Hullam;
    let hullam2: Hullam;
    const loopRef = useRef(0);

    function Render() {
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

    function valtozas() {
        if (!(frekvencia == 0 || hullamhossz == 0)) {
            hullam1 = new Hullam(amplitudo, frekvencia, hullamhossz, canvasWidth / 2 + tavolsag / 2, canvasHeight / 2);
            hullam2 = new Hullam(amplitudo, frekvencia, hullamhossz, canvasWidth / 2 - tavolsag / 2, canvasHeight / 2);
            start = Date.now();
            clearInterval(loopRef.current);
            loopRef.current = setInterval(Render, 16);
        }
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className={"flex items-center justify-center gap-5"}>
                <canvas ref={canvasRef} className={"bg-black my-5 w-150"} id="szimulacio" width={canvasWidth} height={canvasHeight}></canvas>
                <div className={"flex gap-2 flex-col"}>
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
                    <TextField
                        label={"Frekvencia (ν)"}
                        onChange={(e) => {
                            setFrekvencia(parseFloat(e.target.value));
                            valtozas()
                        }}
                    />
                    <TextField
                        label={"Hullamhossz (λ)"}
                        onChange={(e) => {
                            setHullamhossz(parseFloat(e.target.value));
                            valtozas()
                        }}
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