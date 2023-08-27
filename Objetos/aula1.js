const pessoa = {
    nome: "Lucas N Favarel",
    idade: 27,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};



const atributo = 'idade';

console.log(pessoa['nome']);

//lucas.descrever();

// lucas.altura = 1.85;

// delete lucas.nome;

// console.log(lucas);
