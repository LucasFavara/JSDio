function calcularImc(peso, altura) {
   return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 17) {
        return 'Muito abaixo do peso';
    } else if (imc < 18.49) {
        return 'Abaixo do peso';
    } else if (imc < 24.99) {
        return 'Peso normal';
    } else if (imc < 29.99) {
        return 'Acima do peso';
    } else if (imc < 34.99) {
        return 'Obesidade I';
    } else if (imc < 39.99) {
        return 'Obesidade II';
    } else if (imc > 40) {
        return 'Obesidade III (mórbida)';
    } 
}

function main() {

var peso = 75;
var altura = 1.85;
var imc = calcularImc(peso, altura);
console.log(imc.toFixed(2));
console.log(classificarImc(imc));

}

main()