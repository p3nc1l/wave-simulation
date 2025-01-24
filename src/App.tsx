import KoordinataRendszer from "./components/koordinatarendszer";
import Button from "@mui/material/Button";

function App() {
    function drawLine() {
        const canvas = document.getElementById("szimulacio") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(0, 250);
        ctx.lineTo(200, 250);
        ctx.strokeStyle = "red-100";

        ctx.stroke();
    }

    return (
        <div className={"flex w-screen h-screen justify-center items-center bg-neutral-900"}>
            <KoordinataRendszer />
            <Button onClick={drawLine}>Draw Line</Button>
        </div>
    )
}

export default App;