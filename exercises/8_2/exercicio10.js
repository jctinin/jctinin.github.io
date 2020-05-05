/* Crie uma função que verifique se o par (chave / valor)
existem na função. Essa função deve possuir três parâmetros, sendo eles: 
o objeto, o nome da chave e o valor da chave. Exemplo:
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

  const verificaValores = (objeto, chave, valor) => {
      const valorChave = Object.keys(objeto).includes(`${chave}`);
      if(valorChave == true){
          const valorItem = Object.values(objeto).includes(`${valor}`)
      if(valorChave == true && valorItem == true){
        return true
      }else{
          return false
      }
      
      }
  }

console.log(verificaValores(lesson3,'turno','vespertino'))

  //console.log(Object.keys(lesson3).includes("materia"));