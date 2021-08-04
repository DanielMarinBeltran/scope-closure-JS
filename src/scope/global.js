var hello = 'Hello'; // Asignacion global, por lo tanto se puede usar donde sea.
let world = 'World';
var hello = 'Hello +';
const helloworld = 'Hello World!'; // Con let y const no se puede reasignar una variable.

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = 'Im global'; // Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
}
helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global';
}
// La doble asignación de una variable también es una mala práctica.
anotherFunction();
console.log(globalVar); 