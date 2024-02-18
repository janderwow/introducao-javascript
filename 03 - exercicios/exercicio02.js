/*Calculo de IMC*/

const peso = '79';
const altura = '1.78';

const imc = peso / Math.pow(altura,2);

/*
> 18.5 = baixo peso
< 18.5 e >= 24.9 = normal
< 25 = sobrepeso
<= 25 e >=29.9 = pre-obeso
>= 30 e >=34.0 = obeso 1
<= 35 e >= 39.9 = obeso 2
>= 40 = obeso 3
*/
console.log(imc)

if(imc < '18.5'){
   console.log("Abaixo do peso") 
}else if(imc >= '18.5' && imc <='25'){
    console.log("Peso Normal")
}else if(imc > '25'){
    console.log("Sobrepeso")
}else if(imc > '25' && imc <= '29.9'){
    console.log("Pre-obeso")
}else if(imc >=30 && imc <= '34.9'){
    console.log("Obeso 1")
}else if(imc >='35' && imc <='39.9'){
    console.log("Obeso 2")
}else if(imc > '40'){
    console.log("Obeso o3")
}

