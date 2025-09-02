import { IIdentificable } from "../interfaces/IIdentificable.js";
import { Deporte } from "./Deporte.js";
import { Equipo } from "./Equipo.js";
import { Resultado } from "./Resultado.js";
export declare class Partido implements IIdentificable {
    readonly id: string;
    local: Equipo;
    visitante: Equipo;
    deporte: Deporte;
    resultado?: Resultado;
    constructor(id: string, local: Equipo, visitante: Equipo, deporte: Deporte, resultado?: Resultado);
    jugar(resultado: Resultado): void;
    toString(): string;
}
//# sourceMappingURL=Partido.d.ts.map