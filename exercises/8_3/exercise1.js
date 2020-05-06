const assert = require('assert');

const soma = (a,b) => {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Parameters must be numbers');
    }
    return a+b;
}

assert.equal(soma(4,5), 9, 'O resultado não é o esperado');
assert.equal(soma(0,0), 0, 'o retorno deve ser 0');
assert.throws (() => {soma(4,'5'); }, /^Error: Parameters must be numbers/);