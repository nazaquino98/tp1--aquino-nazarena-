import { IIdentificable } from "../interfaces/IIdentificable.js";
import { Partido } from "./Partido.js";
export declare class Torneo implements IIdentificable {
    readonly id: string;
    nombre: string;
    private partidos;
    constructor(id: string, nombre: string);
    programaPartido(partido: Partido): void;
    listarPartidos(): string[];
    buscarPartido(id: string): Partido | undefined;
}
//# sourceMappingURL=Torneo.d.ts.map