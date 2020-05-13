/* Escreva a função swap, que dado um array de 3 elementos, retorna
um novo array com o primeiro e terceiro elementos trocados.
Detalhe: você precisa fazer essa função gastando 1 linha só:

Dica: use array destructuring. */

const assert = require('assert')

const myList = [1, 2, 3]

// escreva swap abaixo

//const swap = (lista) => lista.reverse()

            //Recebe a myList como parâmetro de acordo com o Array
const swap = ([a,b,c]) => [3,2,1] //Sobrescreve os valores a,b,c com 3,2,1;

//console.log(swap(myList))

const swappedList = swap(myList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)


