const pessoa = {
    nome: 'jander wow',
    idade: 33,

    descrever: function (){
        console.log(`Olá meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();