// // Numeros: 
// 1, 2, 3

// // Strings (cadenas de texto)
// // "Hola, soy texto"
// // 'Hola, soy texto'
// // `Hola, soy texto`

// // Booleanos
// true
// false 

// // Variables 
// let nombre = "Malena"
// let leGustaLeer = true 
// let edad = 33
// let anio = 1

// // Operadores
// // + - * / 
// // + 
// // > < 
// // ()

// // Metodos 
// let mensaje = "Hola, soy un mensaje"
// // alert
// // alert(mensaje)
// let resultadoDelPrompt = prompt(mensaje)
// let resultadoDelConfirm = confirm(mensaje)

// // Para ver en consola
// console.log(resultadoDelConfirm)

// // typeof 

// // coercionar a un tipo
// // Number(), Boolean() y String()


// 4 cosas a tener en cuenta con parametros
// El orden en el que los escribo, es el orden en el que la funcion les asigna valor
// Si la funcion espera 2 parametros y yo le pase 3, el 3ro es ignorado
// Si la funcion espera 3 parametros y yo le paso 2, el 3ro toma como valor "undefined"
// Si no defino un parametro en la declaracion de la funcion pero lo uso dentro de la funcion, hay un error

const sumar = (num1, num2) => {
  return num1 + num2
}

const resultado = sumar(1, 2)
// Las funciones son un tipo de dato en JS
// (se pueden guardar adentro de variables)

// las funciones definen un bloque de codigo reutilizable
// Reciben parametros, los procesan y retornan la informacion procesada 


