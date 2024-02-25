/*2) crie  uma classe para representar pessoas.
Para cada pessoas teremos  os atributos nome, peso e altura.
Pessoas devem ter capacidade de dizer o valor do seu imc(IMC = peso / (altura * altura)).
Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça para
José dizer o valor do seu IMC
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    responderIMC () {
        return this.peso / (this.altura * this.altura);
    }
}


const Jander = new Pessoa('Jander', 79, 1.79);
console.log(Jander);

console.log(Jander.responderIMC());