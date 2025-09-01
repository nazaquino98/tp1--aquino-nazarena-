export class Resultado {
  golesLocal: number;
  golesVisitante: number;

  constructor(golesLocal: number, golesVisitante: number) {
    this.golesLocal = golesLocal;
    this.golesVisitante = golesVisitante;
  }

  toString(): string {
    return `Goles local: ${this.golesLocal} - Goles visitante: ${this.golesVisitante}`;
  }
}