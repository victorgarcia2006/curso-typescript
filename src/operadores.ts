import prompt from 'prompt-sync';

const input = prompt();

// Pedir dos numeros al usuario 
let num1: number = Number(input("Ingrese el numero 1: "));
let num2: number = Number(input("Ingrese el numero 2: "));

// Realizar las operaciones
console.log(`La suma de ${num1} + ${num2} es: ${num1 + num2}`);
console.log(`La resta de ${num1} - ${num2} es: ${num1 - num2}`);
console.log(`La multiplicacion de ${num1} * ${num2} es ${num1 * num2}`);
console.log(`La division de ${num1} / ${num2} es ${num1 / num2}`);
console.log(`El modulo de ${num1} % ${num2} es ${num1 % num2}`);