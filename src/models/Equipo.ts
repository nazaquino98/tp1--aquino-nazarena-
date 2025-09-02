import { ICompetidor } from "../interfaces/ICompetidor.js";
import { Jugador } from "./Jugador.js";

export class Equipo implements ICompetidor{
    readonly id: string;
    nombre: string;


    private jugadores: Jugador[] = [];

    constructor(id:string, nombre:string){
        this.id = id;
        this.nombre = nombre;
    }

    agregarJugador(jugador:Jugador): void{
        const existe = this.jugadores.find(jugador => jugador.id === jugador.id);
        if (existe){
            console.log(`El jugador ${jugador.nombre} ya forma parte del equipo ${this.nombre}`);
        }
        this.jugadores.push(jugador)
    }

    listarIntegrantes(): string[] {
        return this.jugadores.map(jugador => jugador.toString());

    }

    get cantidad(): number{
        return this.jugadores.length;
    }

    toString(): string{
        return `El equipo ${this.nombre} tiene ${this.cantidad} de jugadores`;
    }
}