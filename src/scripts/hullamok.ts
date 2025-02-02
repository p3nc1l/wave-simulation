export class Hullam {
    public amplitudo: number;
    public frekvencia: number;
    public hullamhossz: number;
    public x: number;
    public y: number;

    public constructor(amplitudo: number, frekvencia: number, hullamhossz: number, x: number, y: number) {
        this.amplitudo = amplitudo;
        this.frekvencia = frekvencia;
        this.hullamhossz = hullamhossz;
        this.x = x;
        this.y = y;
    }

    public magassag(elmozdulas: number, ido: number) {
        if ((2 * Math.PI / this.hullamhossz * elmozdulas) - (2 * Math.PI * this.frekvencia * ido) > -1 * Math.PI) return null;
        return (this.amplitudo * Math.cos((2 * Math.PI / this.hullamhossz * elmozdulas) - (2 * Math.PI * this.frekvencia * ido)));
    }
}

export function magassag2(hullam1: Hullam, hullam2: Hullam, elmozdulas1: number, elmozdulas2: number, ido: number) {
    if ((2 * Math.PI / hullam1.hullamhossz * elmozdulas1) - (2 * Math.PI * hullam1.frekvencia * ido) > -1 * Math.PI) return hullam2.magassag(elmozdulas2, ido);
    else if ((2 * Math.PI / hullam2.hullamhossz * elmozdulas2) - (2 * Math.PI * hullam2.frekvencia * ido) > -1 * Math.PI) return hullam1.magassag(elmozdulas1, ido);
    return (hullam1.amplitudo + hullam2.amplitudo) * (Math.cos((2 * Math.PI / hullam1.hullamhossz * elmozdulas1) - (2 * Math.PI * hullam1.frekvencia * ido)) + Math.cos((2 * Math.PI / hullam2.hullamhossz * elmozdulas2) - (2 * Math.PI * hullam2.frekvencia * ido)));
}