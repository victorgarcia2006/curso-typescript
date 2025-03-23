/*
Ejercicio: Preguntar la ciudad del usuario

El programa pedira al usuario que ingrese la ciudad donde vive y luego mostrará un mensaje con la ciudad ingresada
*/
import prompt from 'prompt-sync';

const input = prompt();

// Pedir al usuario que ingrese la ciudad donde vive
let ciudad: string = input("Ingrese la ciudad donde vive: ");

// Mostrar al usuario la ciudad ingresada
console.log(`Que genial! Vives en ${ciudad}`);