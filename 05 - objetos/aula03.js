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

const jander = new Pessoa('Jander', 34);


console.log(jander)
jander.descrever();
