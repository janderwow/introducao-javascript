/*Faça um programa para calcular o valor de uma viagem.

Voce terá 3 variáveis. Sendo elas:
1 - Preço do combustível; 1 litro = 5.00
2 - Gasto médio de combustível do carro por KM; 1 litro/10km
3 - Distância em KM da viagem; 10km

= em uma viagem de 100km com gasto medio de combustivel a 1L/10km voce gastara  reais

Imprima no console o valor que será gastp de combustível para realizar a viagem.
*/


const pCombustivel = 5.59;
const kmPorLitro = 11;
const distanciaViagem = 100;
const litrosConsumidos = distanciaViagem / kmPorLitro;
const valorGasto = litrosConsumidos * pCombustivel;

console.log('Em uma viagem de ', distanciaViagem ,'km de distancia serao gastos', valorGasto.toFixed(2), 'com gasolina a', pCombustivel, 'reais');



