// /**Objetivo: Recibe un array de personas y devuelve sus nombres y edades en una nueva lista de objetos. */

// type Persona = {
//   nombre: string;
//   edad: number;
//   profesion: string;
// };

// const personas: Persona[] = [
//   { nombre: "Luis", edad: 28, profesion: "Desarrollador" },
//   { nombre: "Ana", edad: 32, profesion: "Diseñadora" },
//   { nombre: "Carlos", edad: 25, profesion: "QA" },
// ];

// // Crea una función que devuelva solo el nombre y la edad
// function extraerNombreEdad(lista: Persona[]): { nombre: string; edad: number }[] {
//   return lista.map(({ nombre, edad }) => ({ nombre, edad }));
// }

// console.log(extraerNombreEdad(personas));


/**Objetivo: Crea una función genérica que reciba una respuesta del servidor y actúe dependiendo del tipo de datos. */

type Respuesta<T> = {
  exito: boolean;
  datos: T;
};

function manejarRespuesta<T>(respuesta: Respuesta<T>) {
  // Si es string, muestra como mensaje
  // Si es array, recórrelo y muéstralo en consola
  // Si es objeto, usa Object.entries y muestra clave: valor

  
}

const r1: Respuesta<string> = { exito: true, datos: "Usuario creado" };
const r2: Respuesta<string[]> = { exito: true, datos: ["a", "b", "c"] };
const r3: Respuesta<{ nombre: string; edad: number }> = {
  exito: true,
  datos: { nombre: "Luis", edad: 28 }
};

manejarRespuesta(r1);
manejarRespuesta(r2);
manejarRespuesta(r3);
