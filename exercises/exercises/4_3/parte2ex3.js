let test = [2,4,-155,7,10,0,-3];

function retornaMaiorValor(vetor){

    let indice=0;
    let menor=0;
    for(x in vetor){
        if(vetor[x]<menor){
            menor=vetor[x];
            indice=x;
            
        }
    
    }
console.log(menor);
console.log(indice);
}

retornaMaiorValor(test);