let palavra="julio";

function verificaPalindrome(palavra){


let reverso=palavra.split("").reverse().join("");

console.log(reverso);
console.log(palavra);

if(palavra==reverso){
    console.log(true);
}else{
    console.log(false);
}

}

verificaPalindrome(palavra);
