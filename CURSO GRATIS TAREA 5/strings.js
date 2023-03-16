let nombre = "Francisco";
let apellido = "Meglia";

let estudiante = `${nombre} ${apellido}`
let estudianteenmayus = estudiante.toUpperCase();
let estudianteenminus= estudiante.toLowerCase();

let letrasenestudiante = estudiante.length;
let primeraletranombre = nombre.startsWith("F");
let ultimaletraapellido= apellido.endsWith("a");

let nuevoestudiante= estudiante.replace(" " , "");

let contienenombre= estudiante.includes("Francisco");

////// APARTE

let palabra = "Hola como estas ,estas bien ?"

console.log(palabra.match(/estas/g));

console.log(palabra.includes("hola"));

console.log(palabra.startsWith("H"));

console.log(palabra.endsWith("."))

