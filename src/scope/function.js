const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();
console.log(fruit);

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;  // Cuidado con let, no se pueden volver a reasignar.
    // let y = 2;
    console.log(x);
    console.log(y);
}
// todas las variables creadas dentro de una funcion son de scope local.
anotherFunction();