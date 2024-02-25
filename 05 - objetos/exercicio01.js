/*criar classe carro e metodo para calcular valor de uma viagem*/

class Carro  {
    marca;
    cor;
    GastoMedioPorLitro;

    constructor (marca, cor, GastoMedioPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.GastoMedioPorLitro = GastoMedioPorLitro;
    };

    calcularViagem (pCombustivel, distanciaEmKm){
        return distanciaEmKm * this.GastoMedioPorLitro *  pCombustivel;
    };
};



const uno = new Carro('fiat','preto',1/12);
const palio = new Carro('fiat', 'azul', 1/11);

console.log(uno);
console.log(uno.calcularViagem(70,5));
console.log(palio);
console.log(palio.calcularViagem(70,5));