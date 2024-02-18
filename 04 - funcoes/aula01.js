function teste() {
    console.log("Esta é uma função")
}

teste();

function sayMyName(name){
    console.log('Seu nome é ' + name)
};

sayMyName('Jander');

function quadrado(valor){
    return valor * valor;
};

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez)

function incrementarValor(valor, percentualJuros){
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

console.log(incrementarValor(100,10));
console.log(incrementarValor(100,15));