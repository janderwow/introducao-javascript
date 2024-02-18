/*Calculo de IMC*/
function calcularImc(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if(imc < '18.5'){
        return 'Abaixo do peso'; 
     }else if(imc >= '18.5' && imc <='25'){
         return 'Peso Normal';
     }else if(imc > '25'){
         return 'Sobrepeso';
     }else if(imc > '25' && imc <= '29.9'){
         return 'Pre-obeso';
     }else if(imc >=30 && imc <= '34.9'){
         return 'Obeso 1';
     }else if(imc >='35' && imc <='39.9'){
         return 'Obeso 2';
     }else if(imc > '40'){
         return 'Obeso 3';
     }
     
}

//Main em funcao anonima
(function (){
    const peso = '79';
    const altura = '1.78';

    const imc = calcularImc(peso, altura);
    return console.log(classificarImc(imc));
})();


/*
function main(){
    const peso = '79';
    const altura = '1.78';

    const imc = calcularImc(peso, altura);
    return console.log(classificarImc(imc));
}

main();
*/




