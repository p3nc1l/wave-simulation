import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Szimulacio from "./components/Szimulacio.tsx";
import TulajdonsagPanel from "./components/TulajdonsagPanel.tsx";

const canvasWidth = 100;
const canvasHeight = canvasWidth;
const ppm = canvasWidth; //pixel per meter

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
});

function App() {
    const [amplitudo, setAmplitudo] = useState(0.5);
    const [frekvencia, setFrekvencia] = useState(2.5);
    const [hullamhossz, setHullamhossz] = useState(0.06);
    const [tavolsag, setTavolsag] = useState(0.5);

    return (
        <ThemeProvider theme={theme}>
            <div className="flex items-center justify-center w-screen h-screen gap-5 flex-col md:flex-row">
                <Szimulacio
                    canvasWidth={canvasWidth}
                    canvasHeight={canvasHeight}
                    ppm={ppm}
                    amplitudo={amplitudo}
                    frekvencia={frekvencia}
                    hullamhossz={hullamhossz}
                    tavolsag={tavolsag}
                />
                <TulajdonsagPanel
                    amplitudo={amplitudo}
                    setAmplitudo={setAmplitudo}
                    frekvencia={frekvencia}
                    setFrekvencia={setFrekvencia}
                    hullamhossz={hullamhossz}
                    setHullamhossz={setHullamhossz}
                    tavolsag={tavolsag}
                    setTavolsag={setTavolsag}
                />
            </div>
        </ThemeProvider>
    )
}

export default App;