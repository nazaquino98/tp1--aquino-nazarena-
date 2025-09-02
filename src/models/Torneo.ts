import { IIdentificable } from "../interfaces/IIdentificable";
import { Partido } from "./Partido";

export class Torneo implements IIdentificable {
  readonly id: string;
  nombre: string;
  private partidos: Partido[] = [];

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  programaPartido(partido: Partido): void {
    this.partidos.push(partido);
  }

  listarPartidos(): string[] {
    return this.partidos.map((partido) => partido.toString());
  }

  buscarPartido(id: string): Partido | undefined {
    return this.partidos.find((partido) => partido.id === id);
  }
}