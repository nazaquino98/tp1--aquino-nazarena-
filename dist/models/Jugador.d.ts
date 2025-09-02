import { IIdentificable } from "../interfaces/IIdentificable.js";
export declare class Jugador implements IIdentificable {
    readonly id: string;
    nombre: string;
    edad: number;
    posicion?: string;
    constructor(id: string, nombre: string, edad: number, posicion?: string);
    toString(): string;
}
//# sourceMappingURL=Jugador.d.ts.map