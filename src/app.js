/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let quien = ["Mi perro", "Mi primo", "Mi gato", "Un Alien", "Mi cuñado"];
let accion = [
  "se comió",
  "me escondió",
  "destrozó",
  "se robó",
  "manipuló mentalmente"
];
let que = [
  "mi proyecto",
  "mi codigo",
  "mis llaves",
  "mi cargador",
  "mi portatil"
];
let cuando = [
  "justo cuando iba a terminar.",
  "al salir de casa.",
  "al llegar al trabajo.",
  "cuando ya estaba saliendo.",
  "cuando estaba de vacaciones."
];

function generarExcusa() {
  let quienRam = quien[Math.floor(Math.random() * quien.length)];
  let accionRam = accion[Math.floor(Math.random() * accion.length)];
  let queRam = que[Math.floor(Math.random() * que.length)];
  let cuandoRam = cuando[Math.floor(Math.random() * cuando.length)];

  return `${quienRam} ${accionRam} ${queRam} ${cuandoRam}`;
}

console.log(generarExcusa());
const elementoExcusa = document.getElementById("excusa");
elementoExcusa.textContent = generarExcusa();
