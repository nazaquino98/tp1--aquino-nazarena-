export class Torneo {
    id;
    nombre;
    partidos = [];
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    programaPartido(partido) {
        this.partidos.push(partido);
    }
    listarPartidos() {
        return this.partidos.map((partido) => partido.toString());
    }
    buscarPartido(id) {
        return this.partidos.find((partido) => partido.id === id);
    }
}
//# sourceMappingURL=Torneo.js.map