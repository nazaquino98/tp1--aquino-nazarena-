import { IIdentificable } from "../interfaces/IIdentificable";
import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";
import { Resultado } from "./Resultado";

export class Partido implements IIdentificable {
  readonly id: string;
  local: Equipo;
  visitante: Equipo;
  deporte: Deporte;
  resultado?: Resultado;

  constructor(
    id: string,
    local: Equipo,
    visitante: Equipo,
    deporte: Deporte,
    resultado?: Resultado
  ) {
    if (local.id === visitante.id) {
      console.log("Un partido no puede tener el mismo local y visitante");
    }
    this.id = id;
    this.local = local;
    this.visitante = visitante;
    this.deporte = deporte;
    this.resultado = resultado;
  }

  jugar(resultado: Resultado): void {
    if (
      !this.deporte.validar(this.local) ||
      !this.deporte.validar(this.visitante)
    ) {
      console.log("Alguno de los dos equipos no cumple con los requisitos de deporte");
    }
    this.resultado = resultado;
  }

  toString(): string {
    return (
      `${this.local.nombre} vs ${this.visitante.nombre} - Partido de: (${this.deporte.nombre}) ` +
      (this.resultado ? `Resultado: ${this.resultado.toString()}` : "Pendiente")
    );
  }
}