export class Wave {
    public amplitude: number;
    public frequency: number;
    public wavelength: number;
    public x: number;
    public y: number;

    public constructor(amplitude: number, frequency: number, wavelength: number, x: number, y: number) {
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.wavelength = wavelength;
        this.x = x;
        this.y = y;
    }

    public height(delta: number, time: number) {
        if ((2 * Math.PI / this.wavelength * delta) - (2 * Math.PI * this.frequency * time) > -1 * Math.PI) return null;
        return (this.amplitude * Math.cos((2 * Math.PI / this.wavelength * delta) - (2 * Math.PI * this.frequency * time)));
    }
}

export function height2(wave1: Wave, wave2: Wave, delta1: number, delta2: number, ido: number) {
    if ((2 * Math.PI / wave1.wavelength * delta1) - (2 * Math.PI * wave1.frequency * ido) > -1 * Math.PI) return wave2.height(delta2, ido);
    else if ((2 * Math.PI / wave2.wavelength * delta2) - (2 * Math.PI * wave2.frequency * ido) > -1 * Math.PI) return wave1.height(delta1, ido);
    return (wave1.amplitude + wave2.amplitude) * (Math.cos((2 * Math.PI / wave1.wavelength * delta1) - (2 * Math.PI * wave1.frequency * ido)) + Math.cos((2 * Math.PI / wave2.wavelength * delta2) - (2 * Math.PI * wave2.frequency * ido)));
}