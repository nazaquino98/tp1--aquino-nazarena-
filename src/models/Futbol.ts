import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";

export class Futbol extends Deporte{
    constructor(){
        super("Futbol", 11);
    }

    validar(equipo: Equipo): boolean {
        if (equipo.cantidad > this.maxPorEquipo){
            console.log(`El equipo ${equipo.nombre} tiene demasiados jugadores`);
           return false;
        } else
        return true;
    }
}