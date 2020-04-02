let salBruto=1200;

if(salBruto<=1556.94){
    salBruto=salBruto-(salBruto*0.08);
    
}else if(salBruto<=2594.92){
    salBruto=salBruto-(salBruto*0.09);
 
}else if(salBruto<=5189.82){
    salBruto=salBruto-(salBruto*0.11);

}else if(salBruto>5189.82){
    salBruto-=570.88; 

}

if(salBruto>1903.98){
    salBruto=salBruto-(salBruto*0.075)+142.80;
}else if(salBruto>2826.65){
    salBruto=salBruto-(salBruto*0.15)+354.80;
}else if(salBruto>3751.06){
    salBruto=salBruto-(salBruto*0.225+636.13);
}else if(salBruto>4664.68){
    salBruto=salBruto-(salBruto*0.275)+869.36;
}

console.log("O valor do salário à receber é: R$"+salBruto);