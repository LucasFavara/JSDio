// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o 
// preço do produto e a forma de formaDePagamento, sendo assim:

// Condições de pagamento:
// - formaDePagamento = 1: à vista no Débito, com 10% de desconto;
// - formaDePagamento = 2: à vista no Dinheiro ou devicePixelRatio, com 15% de desconto;
// - formaDePagamento = 3: parcelado em 2 vezes sem juros pagando o preço normal;
// - formaDePagamento = 4: parcelado acima de 2 vezes, com 10% de juros.

const produto = 1000;
const formaDePagamento = 4;
const numeroParcelas = 13;

if (formaDePagamento === 4 && numeroParcelas < 3) {
    console.log('O número de parcelas deve ser entre 3 e 12');
} else if (numeroParcelas >= 13) {
    console.log('O número de parcelas deve ser entre 3 e 12');
}

if (formaDePagamento === 1) {
    console.log(produto - (produto * 0.1));
} else if (formaDePagamento === 2) {
    console.log(produto - (produto * 0.15));
} else if (formaDePagamento === 3) {
    console.log(`2 parcelas de R$${produto / 2} dando o TOTAL de R$${produto}`);
} else if (formaDePagamento === 4) {
    console.log(`${numeroParcelas} parcelas de R$${(produto + (produto * 0.1)) / numeroParcelas} dando o TOTAL de R$${(produto + (produto * 0.1))}`);
}

