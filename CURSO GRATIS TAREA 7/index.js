// COMPRAS

const compras = ["Aceite" , "Pan" , "Carne" , "Pescado" , "Agua" ];
// agregar aceite de girasol
compras.push("Aceite de Girasol");
// eliminar aceite de girasol
compras.pop();

// PELICULAS

const pelis = [
    {titulo: "Rambo" , director: "Juan" , fecha: 2000},
    {titulo: "Pepe" , director: "Carlos" , fecha: 1995},
    {titulo: "Secret" , director: "Jose" , fecha: 2011},
]

// PELICULAS MAS ACTUALES DESDE 2010
const pelisM2010 = pelis.filter(valor => valor.fecha > 2010);

// DIRECTORES
const directores = pelis.map(valor => valor.director);

// TITULOS
const titulos = pelis.map(valor => valor.titulo);

// ARRAY QUE CONCATENE TITULOS Y DIRECTORES
const titDirec = titulos.concat(directores);

// ARRAY QUE CONCATENE TITULOS Y DIRECTORES CON FACTOR DE PROPAGACION:
const titDirecProp = [...titulos , ...directores];

