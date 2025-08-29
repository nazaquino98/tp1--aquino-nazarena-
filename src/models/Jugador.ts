import { IIdentificable } from "../interfaces/IIdentificable";

export class Jugador implements IIdentificable {
    readonly id: string;
    nombre: string;
    edad: number;
    posicion?: string;

    constructor(id: string, nombre: string, edad: number, posicion?: string) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }

    toString(): string {
        const posicion = `this.posicion? (${this.posicion}):""`;
        return `${this.nombre} - ${posicion} - ${this.edad} años ${this.id}`;

    }
}