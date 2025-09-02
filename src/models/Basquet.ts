import { Deporte } from "./Deporte.js";
import { Equipo } from "./Equipo.js";

export class Basquet extends Deporte{
    constructor(){
        super("Basquet", 5);
    }

    validar(equipo: Equipo): boolean {
        if (equipo.cantidad > this.maxPorEquipo){
            console.log(`El equipo ${equipo.nombre} tiene demasiados jugadores`);
            return false;
        } else
        return true;
    }
}