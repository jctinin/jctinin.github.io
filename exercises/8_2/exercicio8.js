/* Usando o objeto criado no exercício 5, crie uma função que 
retorne o número total de estudantes em todas as aulas.
 */
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const allLessons = Object.assign({},{lesson1, lesson2, lesson3})

const totalEstudantes = (objeto) => {
  let soma = 0
  for(x in objeto){
    soma += allLessons[x].numeroEstudantes;
  }
  return soma;
}

console.log(totalEstudantes(allLessons));