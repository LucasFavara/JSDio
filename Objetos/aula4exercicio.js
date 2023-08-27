class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 17) {
            return ('Muito abaixo do peso');
        } else if (imc < 18.49) {
            return ('Abaixo do peso');
        } else if (imc < 24.99) {
            return ('Peso normal');
        } else if (imc < 29.99) {
            return ('Acima do peso');
        } else if (imc < 34.99) {
            return ('Obesidade I');
        } else if (imc < 39.99) {
            return ('Obesidade II');
        } else if (imc > 40) {
            return ('Obesidade III (mórbida)');
        } 
    }

}

var lucas = new Pessoa('Lucas', 75, 1.85);
var vitor = new Pessoa('Vitor', 80, 1.70);

console.log(lucas.classificarImc());
