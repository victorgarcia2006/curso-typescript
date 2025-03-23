/*
Ejercicio: Conversion de temperatura

Crea un programa que pida una temperatura en grados Celsius y la convierta a grados 
Fahrenheit usando la formula
*/

import prompt from 'prompt-sync';

const input = prompt();

// Pedir al usuario que ingrese la temperatura en grados Celsius
let celsius: number = Number(input("Ingrese la temperatura en grados Celsius: "));

// Convertir la temperatura de Celsius a Fahrenheit
let fahrenheit: number = (celsius * (9 / 5)) + 32;

// Mostrar resultado de la conversion al usuario
console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit}`);