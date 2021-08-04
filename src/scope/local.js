const helloWorld = () => {
    const hello = 'Hello world';
    console.log(hello);
}

helloWorld()
console.log(hello);

// En el anterior ejemplo podemos ver como funciona una variable local.

var scope ='I am global';

const functionScope = () => {
    var scope = 'I am just a local';
    const funct = () => {
        return scope;
    }
    console.log(funct());
}
functionScope();

console.log(scope);
// En este ejemplo podemos ver el Lexical Scope o ambito lexico que se representa en JS.