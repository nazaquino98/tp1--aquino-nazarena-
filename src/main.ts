import { Basquet } from "./models/Basquet.js";
import { Equipo } from "./models/Equipo.js";
import { Futbol } from "./models/Futbol.js";
import { Jugador } from "./models/Jugador.js";
import { Partido } from "./models/Partido.js";
import { Resultado } from "./models/Resultado.js";
import { Torneo } from "./models/Torneo.js";

// Jugadores de Fútbol

const jf1 = new Jugador("jf1", "Hernan", 22, "Delantero");
const jf2 = new Jugador("jf2", "Axel", 20, "Extremo");
const jf3 = new Jugador("jf3", "Alejandro", 30, "Mediocampista");
const jf4 = new Jugador("jf4", "Leandro", 22, "Defensor");

// Jugadores de Básquet

const jb1 = new Jugador("jb1", "Nahuel", 22, "Alero");
const jb2 = new Jugador("jb2", "Mariano", 25, "Base");
const jb3 = new Jugador("jb3", "Ezequiel", 34, "Alero");
const jb4 = new Jugador("jb4", "Brandon", 28, "Pívot");
const jb5 = new Jugador("jb5", "Lucas", 32, "Ala-Pívot");

// Equipos de Fútbol

const equipoFutbol1 = new Equipo("fc1", "Sol de america FC");
equipoFutbol1.agregarJugador(jf1);
equipoFutbol1.agregarJugador(jf2);

const equipoFutbol2 = new Equipo("fc2", "San Martin FC");
equipoFutbol2.agregarJugador(jf3);
equipoFutbol2.agregarJugador(jf4);

// Equipos de Básquet

const equipoBasquet1 = new Equipo("bc1", "Sarmiento");
equipoBasquet1.agregarJugador(jb1);
equipoBasquet1.agregarJugador(jb2);

const equipoBasquet2 = new Equipo("bc2", "Colegiales");
equipoBasquet2.agregarJugador(jb3);
equipoBasquet2.agregarJugador(jb4);
equipoBasquet2.agregarJugador(jb5);

// Crear deportes

const futbol = new Futbol();
const basquet = new Basquet();

// Crear torneos

const torneoFutbol = new Torneo("tf1", "Copa Fútbol");
const torneoBasquet = new Torneo("tb1", "Copa Básquet");

// Crear partidos

const partidoFutbol1 = new Partido("pf1", equipoFutbol1, equipoFutbol2, futbol);
const partidoFutbol2 = new Partido("pf2", equipoFutbol2, equipoFutbol1, futbol);

const partidoBasquet1 = new Partido(
  "pb1",
  equipoBasquet1,
  equipoBasquet2,
  basquet
);
const partidoBasquet2 = new Partido(
  "pb2",
  equipoBasquet2,
  equipoBasquet1,
  basquet
);

// Programar partidos en torneo

torneoFutbol.programaPartido(partidoFutbol1);
torneoFutbol.programaPartido(partidoFutbol2);

torneoBasquet.programaPartido(partidoBasquet1);
torneoBasquet.programaPartido(partidoBasquet2);

// Jugar partidos con validación

try {
  // Fútbol
  if (futbol.validar(equipoFutbol1) && futbol.validar(equipoFutbol2)) {
    partidoFutbol1.jugar(new Resultado(3, 2));
    partidoFutbol2.jugar(new Resultado(1, 1));
  }

  // Básquet
  if (basquet.validar(equipoBasquet1) && basquet.validar(equipoBasquet2)) {
    partidoBasquet1.jugar(new Resultado(102, 98));
    partidoBasquet2.jugar(new Resultado(110, 105));
  }
} catch (err) {
  console.log("Error al jugar el partido:");
}

// Mostrar resultados

console.log("\n- Resultados Torneo Fútbol -");
torneoFutbol.listarPartidos().forEach((partido) => console.log(partido));

console.log("\n- Resultados Torneo Básquet -");
torneoBasquet.listarPartidos().forEach((partido) => console.log(partido));
