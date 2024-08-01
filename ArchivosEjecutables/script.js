/* Escribir una cadena de texto (string) del revés:

    - Típico algoritmo de JavaScript con el que te puedes encontrar en una entrevista de trabajo para un puesto relacionado con el Desarrollo de JavaScript.

    - Y luego, lo vamos a resolver de 8 maneras distintas...

    - Por último, al final del proyecto, se muestra la forma más fácil de hacerlo... y también se muestra una forma un poco más avanzada de hacerlo (usando .reduce()). 
    
*/

function stringReverse(str)
{
    let miMensaje = "";

    for (let i = str.length - 1; i >= 0; i--)
    {
        miMensaje = miMensaje + str.charAt(i);
    }

    return miMensaje;
}

console.log(stringReverse("MarsForever"));

/*

OTRA FORMA DE RESOLVERLO:

USANDO LAS BUILT-IN FUNCTIONS DE JAVASCRIPT.

*/

function stringReversePart2(str)
{
    let miMensaje = str.split('');
    let mensajeInverso = miMensaje.reverse();
    let inversoFinal = mensajeInverso.join('');
    // return inversoFinal; // FORMA 1.
    return str.split('').reverse().join(''); // FORMA 2.
}

console.log(stringReversePart2("AutinFit Youtube"));

// USANDO LAS FUNCIONES DE FLECHA:

let stringReves = (str) => str.split('').reverse().join('');

console.log(stringReves("Hi there. How are you today"));

// TAMBIÉN LO PODEMOS RESOLVER USANDO UN BUCLE 'for of':

function stringInverso(str)
{
    let mensajeInvertido = "";

    for (let myChar of str)
    {
        mensajeInvertido = myChar + mensajeInvertido;
        console.log("Iterating on for of loop: ", mensajeInvertido);
    }

    return mensajeInvertido;
}

console.log(stringInverso("Youtube"));

// ¿Y SI USAMOS LAS ARROW FUNCTIONS COMBINADAS CON EL BUCLE 'for of'?

// LA SOLUCIÓN ES MUY SENCILLA...

function invertirString(str)
{
    return [...str].reverse().join('');
}

console.log(invertirString('Reverse a string using Spread Operator'));

// ¿TODAVÍA SIGUES AHÍ?

// ENTONCES, TE DEJARÉ UNA FORMA MÁS AVANZADA DE SOLUCIONAR ESTE ALGORITMO:

const invertirString2 = str => {
    return str.split("").reduce((rev, myChar) => myChar + rev, "");
};

console.log(invertirString2('Hola que tal'));