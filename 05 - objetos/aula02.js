class Pessoa  {
    nome;
    idade;

    descrever(){
        console.log(`Olá meu nome é ${this.nome} e minha idade é ${this.idade}`);
    };

};

const jander = new Pessoa();
jander.nome = 'Jander'
jander.idade = '33'


console.log(jander)
jander.descrever();
