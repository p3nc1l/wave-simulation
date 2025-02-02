import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function TulajdonsagPanel(
    { amplitudo, setAmplitudo, frekvencia, setFrekvencia, hullamhossz, setHullamhossz, tavolsag, setTavolsag }:
    {amplitudo: number, setAmplitudo: (n: number) => void, frekvencia: number, setFrekvencia: (n: number) => void, hullamhossz: number, setHullamhossz: (n: number) => void, tavolsag: number, setTavolsag: (n: number) => void}) {
    return (
        <div className={"flex gap-2 flex-col w-xs"}>
            <Typography id={"amplitudo-label"}>Amplitúdó</Typography>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(_, value) => setAmplitudo(value as number)}
                    value={amplitudo}
                    min={0}
                    max={1}
                    step={0.1}
                    aria-labelledby="amplitudo-label"
                />
                <TextField
                    disabled
                    className={"w-15"}
                    variant={"standard"}
                    value={amplitudo}

                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position={"end"} >m</InputAdornment>
                        },
                    }}
                />
            </div>
            <Typography id={"frekvencia-label"}>Frekvencia</Typography>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(_, value) => setFrekvencia(value as number)}
                    value={frekvencia}
                    min={0.5}
                    max={5}
                    step={0.5}
                    aria-labelledby={"frekvencia-label"}
                />
                <TextField
                    disabled
                    className={"w-16"}
                    variant={"standard"}
                    value={frekvencia}

                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position={"end"} >Hz</InputAdornment>
                        },
                    }}
                />
            </div>
            <Typography id={"hullamhossz-label"}>Hullámhossz</Typography>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(_, value) => setHullamhossz(value as number)}
                    value={hullamhossz}
                    min={0.03}
                    max={0.13}
                    step={0.01}
                    aria-labelledby={"hullamhossz-label"}
                />
                <TextField
                    disabled
                    className={"w-18"}
                    variant={"standard"}
                    value={hullamhossz}

                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position={"end"} >m</InputAdornment>
                        },
                    }}
                />
            </div>
            <Divider />
            <Typography id={"tavolsag-label"}>Távolság</Typography>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(_, value) => setTavolsag(value as number)}
                    value={tavolsag}
                    min={0}
                    max={1}
                    step={0.1}
                    aria-labelledby={"tavolsag-label"}
                />
                <TextField
                    disabled
                    className={"w-15"}
                    variant={"standard"}
                    value={tavolsag}

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