import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";

export default function TulajdonsagPanel({ amplitudo, setAmplitudo, frekvencia, setFrekvencia, hullamhossz, setHullamhossz, tavolsag, setTavolsag }) {
    return (<div className={"flex gap-2 flex-col w-xs"}>
            <span className={"text-black dark:text-white"}>Amplitúdó</span>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(e) => setAmplitudo(e.target.value)}
                    value={amplitudo}
                    min={0}
                    max={1}
                    step={0.1}
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
            <span className={"text-black dark:text-white"}>Frekvencia</span>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(e) => setFrekvencia(e.target.value)}
                    value={frekvencia}
                    min={0.5}
                    max={5}
                    step={0.5}
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
            <span className={"text-black dark:text-white"}>Hullámhossz</span>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(e) => setHullamhossz(e.target.value)}
                    value={hullamhossz}
                    min={0.03}
                    max={0.13}
                    step={0.01}
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
            <span className={"text-black dark:text-white"}>Távolság</span>
            <div className={"flex flex-row gap-3"}>
                <Slider
                    onChange={(e) => setTavolsag(e.target.value)}
                    value={tavolsag}
                    min={0}
                    max={1}
                    step={0.1}
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