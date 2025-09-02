import { Deporte } from "./Deporte.js";
export class Basquet extends Deporte {
    constructor() {
        super("Basquet", 5);
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
//# sourceMappingURL=Basquet.js.map