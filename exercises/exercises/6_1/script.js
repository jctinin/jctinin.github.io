const estados = document.querySelector("#todos-estados"); //ID DA TAG SELECT
var todosEstados = ["SP","BA", "MG", "SC", "AM", "TO"];
todosEstados.sort();

for(let i=0; i<todosEstados.length; i++){
let estado = document.createElement('option');
estado.innerHTML = todosEstados[i]
console.log(estado);
estados.appendChild(estado);
}