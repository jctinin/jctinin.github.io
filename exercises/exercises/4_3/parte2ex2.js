let test = [2,4,6,7,10,1,8];

function retornaMaiorValor(vetor){

    let indice=0;
    let maior=0;
    for(x in vetor){
        if(vetor[x]>maior){
            maior=vetor[x];
            indice=x;
            
        }
    
    }
console.log(maior)
console.log(indice)
}

retornaMaiorValor(test);