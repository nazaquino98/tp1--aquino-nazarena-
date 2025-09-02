export class Jugador {
    id;
    nombre;
    edad;
    posicion;
    constructor(id, nombre, edad, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }
    toString() {
        const posicion = `this.posicion? (${this.posicion}):""`;
        return `${this.nombre} - ${posicion} - ${this.edad} años ${this.id}`;
    }
}
//# sourceMappingURL=Jugador.js.map