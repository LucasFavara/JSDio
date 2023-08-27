class Carro {
    nome;
    marca;
    cor;
    gastoMedio;

    constructor (nome, marca, cor, gastoMedio) {
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGasto(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedio * precoCombustivel;
    }

    descrever() {
        console.log(`O carro ${this.nome} da marca ${this.marca} da cor ${this.cor} tem uma gasto médio de ${this.gastoMedio} por Km rodado.`);
    }
}

const a10 = new Carro('a10', 'mercedes', 'verde', 1/9)
const uno = new Carro('Uno', 'Fiat', 'prata', 1/15);

a10.descrever();
console.log(a10);
uno.descrever();
console.log(uno);

console.log(a10.calcularGasto(70, 5));
console.log(uno.calcularGasto(70, 5));

