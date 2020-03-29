let n = 5
let simbolo="*";
let e=1;
let espaco=" ";


for(let i=n; i>0; i--){
    console.log(espaco.repeat(n)+simbolo.repeat(e));
    n-=1;
    e+=1;
}
