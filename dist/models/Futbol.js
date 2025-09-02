import { Deporte } from "./Deporte.js";
export class Futbol extends Deporte {
    constructor() {
        super("Futbol", 11);
    }
    validar(equipo) {
        if (equipo.cantidad > this.maxPorEquipo) {
            console.log(`El equipo ${equipo.nombre} tiene demasiados jugadores`);
            return false;
        }
        else
            return true;
    }
}
//# sourceMappingURL=Futbol.js.map