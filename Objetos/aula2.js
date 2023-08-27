class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e ano de nascimento é ${this.anoDeNascimento}`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const lucas = new Pessoa('Lucas', 27);
const bruno = new Pessoa('Bruno', 29);
const matheus = new Pessoa('Matheus', 23);
// const vitor = new Pessoa();
// vitor.nome = 'Vitor Roque';
// vitor.idade = 24;

// const lucas = new Pessoa();
// lucas.nome = 'Lucas Favarone';
// lucas.idade = 27;

//console.log(lucas);
//console.log(vitor);

vitor.descrever();
lucas.descrever();
bruno.descrever();
matheus.descrever();

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

compararPessoas(vitor, lucas);