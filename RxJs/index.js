import { Observable } from "rxjs";
import { of, from, timer, interval, fromEvent } from "rxjs";

// observables (next, error, complete)

/** observables = (flujo de datos [stream]) se componen de 3 elementos:
 *
 * next: valores del flujo de datos (cada uno de los valores por individual)
 * error: cuando algun dato en el flujo lanza error
 * complete: acccion cuando el flujo de datos termina
 *
 * **/
const obj$ = new Observable((subcriber) => {
  subcriber.next(1);
  subcriber.next(2);
  subcriber.next(3);

  subcriber.complete();
});

obj$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
  error: () => console.error("erorr"),
});

/** Creadores de observables - Creator observables
 *
 * funciones 👇
 *
 * of() ->  crea un observable con valores secuenciales hasta completar el flujo
 * from() -> convierte estructuras de datos en flujo de datos (observables) hasta completar el flujo
 * timer() -> lanza cada dato de la secuencia de flujo en un retardo y tiempo especificado
 * interval() -> emite un dato en cada intervalo de tiempo que tu le asignes
 * fromEvent() [DOM] -> convierte cualquier evento del DOM en un stream de datos
 *
 *
 */

const streamData = of(1, 2, 3, 4, 5).subscribe((value) => console.log(value));

const streamData2 = from([
  "bryan",
  1,
  [1, 2, 4, 5],
  { "value ": 3 },
  () => console.log("gol"),
]).subscribe((data) => {
  console.log(data);
});

const streamData3 = timer(1000).subscribe(data => console.log(data))
const streamData4 = interval(1000).subscribe(data => console.log(data))
