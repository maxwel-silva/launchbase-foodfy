/* ====================================================

    OPERADORES DE COMPARAÇÃO

    >     Maior
    <     Menor
    >=    Maior igual a
    <=    Menor igual a
    ==    Igual a
    ===   Igual e do mesmo tipo
    !=    Diferente de
    !==   Diferente, inclusive do tipo

==================================================== */

/*

console.log(5 > 4)  // true
console.log(5 < 4)  // false
console.log(5 >= 4) // true
console.log(4 <= 4) // true

console.log(4 == "4")  // true
console.log(4 === "4") // false 
console.log(4 != "5")  // true
console.log(4 !== "5") // true

*/

// DESAFIO 1

// Verificar se uma pessoa é maior ou igual a 18 anos. Se sim, deixar entrar, se não, bloquear a entrada

/* 

const idade = 17

if (idade >= 18) {
  console.log(`Você tem ${idade} anos de idade, seu acesso está liberado para entrar`)

} else {
  console.log(`Você tem ${idade} anos de idade, seu acesso está bloqueado para entrar`)
}

if (idade === 17) {
  console.log(`Volte quando estiver com 18 anos de idade`)
}

*/


/* ====================================================

    OPERADORES DE LÓGICOS

    &&    "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira

    ||    "OU" Uma das condições deve ser verdadeira para que a condição final seja verdadeira

    !     "NÃO" Nega uma condição

==================================================== */

/* 

console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 != 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!(5 > 6)) // true
console.log(!(5 < 6)) // false

*/

// DESAFIO 1

// Verificar se uma pessoa é maior ou igual a 18 anos. Se sim, deixar entrar, se não, bloquear a entrada

/* 

const idade = 17

if (!(idade >= 18) || idade === 17) {
  console.log(`Você tem ${idade} anos de idade, seu acesso está bloqueado para entrar`)

} else {
  console.log(`Você tem ${idade} anos de idade, seu acesso está liberado para entrar`)
}

*/


/* ====================================================

    OPERADORES DE ARITMÉTICOS

    *     Multiplicação
    /     Divisão
    %     Resto da Divisão
    +     Adição
    -     Subtração

==================================================== */

/* 

console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0

*/

