const { gets, print } = require('./aula1');

const numeroSorteado = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numeroSorteado.push(numeroSorteado);
}

print(numeroSorteado);

// print(gets());
// print(gets());
// print(gets());
// print(gets());
// print(gets());