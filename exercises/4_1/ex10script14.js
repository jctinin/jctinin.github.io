custo=17.85;
venda=39.5;

if(custo>=0 && venda>=0){
lucro=(1000*venda)-(1000*custo);

lucro*=0.8;

console.log(lucro);
}else{
    console.log("enter with a valid value!");
}
break;