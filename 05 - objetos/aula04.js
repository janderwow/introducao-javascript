class Pessoa  {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.idade = idade;
        this.nome = nome;
        this.anoNascimento = 2024 - idade;
    };

    descrever(){
        console.log(`Olá meu nome é ${this.nome} e minha idade é ${this.idade} meu ano de nascimento é ${this.anoNascimento}`);
    };

};

function compararIdade(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`)
    }
}

const jander = new Pessoa('Jander WoW', 33);
const melo    = new Pessoa('Jander Melo', 33)

compararIdade(jander,melo);

