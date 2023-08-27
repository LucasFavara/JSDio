const PreçoEtanol = 4.56;
const PreçoGasolina = 6.12;
const tipo = 'Etanol';
const gastoCombustivel = 13;
const distancia = 1000;

const kmL = distancia / gastoCombustivel;

if (tipo == 'Etanol') {
    const valor = kmL * PreçoEtanol
    console.log(`O gasto é de ${valor.toFixed(2)} reais`);
} else {
    const valor = kmL * PreçoGasolina
    console.log(`O gasto é de ${valor.toFixed(2)} reais`);
}