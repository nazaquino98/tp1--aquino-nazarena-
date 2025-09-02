export class Equipo {
    id;
    nombre;
    jugadores = [];
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    agregarJugador(jugador) {
        const existe = this.jugadores.find(jugador => jugador.id === jugador.id);
        if (existe) {
            console.log(`El jugador ${jugador.nombre} ya forma parte del equipo ${this.nombre}`);
        }
        this.jugadores.push(jugador);
    }
    listarIntegrantes() {
        return this.jugadores.map(jugador => jugador.toString());
    }
    get cantidad() {
        return this.jugadores.length;
    }
    toString() {
        return `El equipo ${this.nombre} tiene ${this.cantidad} de jugadores`;
    }
}
//# sourceMappingURL=Equipo.js.map