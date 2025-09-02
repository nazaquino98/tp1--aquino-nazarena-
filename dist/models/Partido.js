export class Partido {
    id;
    local;
    visitante;
    deporte;
    resultado;
    constructor(id, local, visitante, deporte, resultado) {
        if (local.id === visitante.id) {
            console.log("Un partido no puede tener el mismo local y visitante");
        }
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        this.deporte = deporte;
        this.resultado = resultado;
    }
    jugar(resultado) {
        if (!this.deporte.validar(this.local) ||
            !this.deporte.validar(this.visitante)) {
            console.log("Alguno de los dos equipos no cumple con los requisitos de deporte");
        }
        this.resultado = resultado;
    }
    toString() {
        return (`${this.local.nombre} vs ${this.visitante.nombre} - Partido de: (${this.deporte.nombre}) ` +
            (this.resultado ? `Resultado: ${this.resultado.toString()}` : "Pendiente"));
    }
}
//# sourceMappingURL=Partido.js.map