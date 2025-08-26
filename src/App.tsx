import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Simulation from "./components/Simulation.tsx";
import AttributePanel from "./components/AttributePanel.tsx";

const canvasWidth = 100;
const canvasHeight = canvasWidth;
const ppm = canvasWidth; //pixel per meter

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
});

function App() {
    const [amplitude, setAmplitude] = useState(0.5);
    const [frequency, setFrequency] = useState(2.5);
    const [wavelength, setWavelength] = useState(0.06);
    const [distance, setDistance] = useState(0.5);

    return (
        <ThemeProvider theme={theme}>
            <div className="flex items-center justify-center w-screen h-screen gap-5 flex-col md:flex-row">
                <Simulation
                    canvasWidth={canvasWidth}
                    canvasHeight={canvasHeight}
                    ppm={ppm}
                    amplitude={amplitude}
                    frequency={frequency}
                    wavelength={wavelength}
                    distance={distance}
                />
                <AttributePanel
                    amplitude={amplitude}
                    setAmplitude={setAmplitude}
                    frequency={frequency}
                    setFrequency={setFrequency}
                    wavelength={wavelength}
                    setWavelength={setWavelength}
                    distance={distance}
                    setDistance={setDistance}
                />
            </div>
        </ThemeProvider>
    )
}

export default App;