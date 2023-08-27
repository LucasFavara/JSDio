function aplicarDesconto(valor, desconto) {
    return (valor - (valor * desconto / 100));
}

function parcelar2(valor) {
    return (valor / 2);
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * juros / 100));
}

const produto = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(produto, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(produto, 15));
} else if (formaDePagamento === 3) {
    console.log(parcelar2(produto));
} else if (formaDePagamento === 4) {
    console.log(aplicarJuros(produto, 10));
}

console.log(200 * 0.10);
console.log(10 / 100);