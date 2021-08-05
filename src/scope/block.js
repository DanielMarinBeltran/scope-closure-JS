const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana'; // Var: es scope local dentro de la funcion.
        const fruits3 = 'kiwi'; // Let y Const: son scope dentro del bloque por lo tanto no podriamos acceder fuera de el.
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}

fruits()


let x = 1;
{
    let x=2;  // Si la variable fuera var, se cambiaria el dato de x que esta fuera del bloque.
    console.log(x);
}
console.log(x);

const anotherFunction = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(()=> {
            console.log(i)
        }, 1000)
    }
}

anotherFunction();