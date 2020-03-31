test = ['José','Lucas','Nádia','Fernanda','Cairo','Joana','Antetokumpo'];

function contaCaractere(vector){
    let palavra="";
    let tamanho=0;
    let word="";
    for(x in vector){
        palavra=vector[x];
        if(palavra.length>tamanho){
        tamanho=palavra.length;
        word=palavra;
    }
    }
    console.log(word);
}

contaCaractere(test);