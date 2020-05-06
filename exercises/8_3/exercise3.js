const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
assert.equal(mySum([1,2,3,4]), 10, "Resultado errado!");
assert.equal(mySum([1, -2, -3, 4]), 0, "Verifique os números negativos!");