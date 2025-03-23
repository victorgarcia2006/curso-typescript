/*
Ejercicio: Area de un triangulo

Realice un programa en donde pida al usuario que ingrese la base y la altura de un
triangulo y luego calcula y muestra el area
*/

import prompt from 'prompt-sync';

const input = prompt();

// Pedir al usuario que ingrese la base y la altura
let base: number = Number(input("Ingrese la base del triangulo: "));
let altura: number = Number(input("Ingrese la altura del triangulo: "));

// Calcular el area del triangulo
let area: number = (base * altura) / 2;

// Mostrar el resultado
console.log(`El area del triangulo es: ${area}`);