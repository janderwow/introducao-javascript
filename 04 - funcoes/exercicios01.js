function escrevaMeuNome (){
    console.log("Meu nome é Janderwow")
};

escrevaMeuNome();


function verificarIdade (idade){
    if(idade >= 18){
        console.log("É maior de idade");
    }else if(idade < 18){
        console.log("É menor de idade");
    }
};

verificarIdade(33);


function calcularValor(precoProduto, formapagamento){
    if(formapagamento === 1){
        return precoProduto - (10/100) * precoProduto;
    }else if(formapagamento === 2){
        return precoProduto - (15/100) * precoProduto;
    }else if(formapagamento === 3){
        return precoProduto;
    }else if(formapagamento === 4){
        return ((10/100) * precoProduto) + precoProduto;
    };
}


 //forma pagamento 1 - a vista 2- pix 3-preco normal 4-duas vezes
function main(){
    const resultado = calcularValor(250,3);
    console.log(resultado)
};
main();