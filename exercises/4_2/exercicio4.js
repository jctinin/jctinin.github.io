let n = 7;
let simbolo="*";
let e=1;
let espaco=" ";
let meio=(n+1)/2;
let direita=0;

if(n%2==1){
for(let i=n; i>0; i--){
if(i==meio){
    for(let j=0; j<=n; j++){
    console.log(espaco.repeat(n)+simbolo.repeat(e)+simbolo.repeat(direita));
    n-=1;
    e+=1;
    direita+=1;
    }
}
}
}