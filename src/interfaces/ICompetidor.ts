import{ IIdentificable } from "./IIdentificable.js";

export interface ICompetidor extends IIdentificable{
    nombre: string;
    listarIntegrantes():string[];
}