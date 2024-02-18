/*
3) Elabore um algoritimo que calcule o que deve ser pago por um produto, 
    considerando o preço normal de etiqueta e a escolha de condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condiçãode pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento
- À vista Débito, recebe 10% de desconto.
- À vista no Dinheiro ou no PIX, recebe 15% de desconto.
- Em duas vezes, preço normal de etiqueta sem juros.
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%.

*/

const precoProduto = 250;
const formapagamento = 'ACIMA 2X';
const desconto10 = (10/100) * precoProduto;
const desconto15 = (15/100) * precoProduto;
const precoComAcrescimo = ((10/100) * precoProduto) + precoProduto;

//console.log(precoComAcrescimo)
//console.log(formapagamento)
//console.log(desconto10)
//console.log(desconto15)
if(formapagamento == "DEBITO"){
    console.log(precoProduto - desconto10)
}else if(formapagamento == "PIX"){
    console.log(precoProduto - desconto15)
}else if(formapagamento == "2X"){
    console.log(precoProduto)
}else if(formapagamento == "ACIMA 2X"){
    console.log(precoComAcrescimo)
};