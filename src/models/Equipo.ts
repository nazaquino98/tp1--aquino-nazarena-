import { ICompetidor } from "../interfaces/ICompetidor";
import { Jugador } from "./Jugador";

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
            console.log(`El jugador con id ${jugador.id} ya esta en el equipo ${this.nombre}`);
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
        return `El equipo ${this.nombre} id: ${this.id} tiene ${this.cantidad} de jugadores`;
    }
}