import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import dictionary from "../scripts/dictionary";

export default function AttributePanel(
    { amplitude, setAmplitude, frequency, setFrequency, wavelength, setWavelength, distance, setDistance, lang }:
    {amplitude: number, setAmplitude: (n: number) => void, frequency: number, setFrequency: (n: number) => void, wavelength: number, setWavelength: (n: number) => void, distance: number, setDistance: (n: number) => void, lang: "en" | "hu"}) {
    return (
        <div className={"flex gap-2 flex-col w-xs"}>
            <Typography id={"amplitude-label"}>{dictionary.get(lang)?.get("amplitude")}</Typography>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(_, value) => setAmplitude(value as number)}
                    value={amplitude}
                    min={0}
                    max={1}
                    step={0.1}
                    aria-labelledby="amplitude-label"
                />
                <TextField
                    disabled
                    className={"w-15"}
                    variant={"standard"}
                    value={amplitude}

                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position={"end"} >m</InputAdornment>
                        },
                    }}
                />
            </div>
            <Typography id={"frequency-label"}>{dictionary.get(lang)?.get("frequency")}</Typography>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(_, value) => setFrequency(value as number)}
                    value={frequency}
                    min={0.5}
                    max={5}
                    step={0.5}
                    aria-labelledby={"frequency-label"}
                />
                <TextField
                    disabled
                    className={"w-16"}
                    variant={"standard"}
                    value={frequency}

                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position={"end"} >Hz</InputAdornment>
                        },
                    }}
                />
            </div>
            <Typography id={"wavelength-label"}>{dictionary.get(lang)?.get("wavelength")}</Typography>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(_, value) => setWavelength(value as number)}
                    value={wavelength}
                    min={0.03}
                    max={0.13}
                    step={0.01}
                    aria-labelledby={"wavelength-label"}
                />
                <TextField
                    disabled
                    className={"w-18"}
                    variant={"standard"}
                    value={wavelength}

                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position={"end"} >m</InputAdornment>
                        },
                    }}
                />
            </div>
            <Divider />
            <Typography id={"distance-label"}>{dictionary.get(lang)?.get("distance")}</Typography>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(_, value) => setDistance(value as number)}
                    value={distance}
                    min={0}
                    max={1}
                    step={0.1}
                    aria-labelledby={"distance-label"}
                />
                <TextField
                    disabled
                    className={"w-15"}
                    variant={"standard"}
                    value={distance}

                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position={"end"} >m</InputAdornment>
                        },
                    }}
                />
            </div>
        </div>
    );
}