//CALCULO DE IMC

var peso = 74;
var altura = 1.69;
var quadrado = altura * altura;
var imc = peso / quadrado;

console.log(imc.toFixed(2));

if (imc < 17) {
    console.log('Muito abaixo do peso');
} else if (imc < 18.49) {
    console.log ('Abaixo do peso');
} else if (imc < 24.99) {
    console.log ('Peso normal');
} else if (imc < 29.99) {
    console.log ('Acima do peso');
} else if (imc < 34.99) {
    console.log ('Obesidade I');
} else if (imc < 39.99) {
    console.log ('Obesidade II');
} else if (imc > 40) {
    console.log ('Obesidade III (mórbida)');
} 