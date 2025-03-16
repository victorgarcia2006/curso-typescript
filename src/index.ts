import prompt from 'prompt-sync';

const input = prompt();
let name: string = input("Ingrese su nombre: ");
console.log(`Hola ${name}`);