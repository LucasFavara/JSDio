const nota1 = 59;
const nota2 = 59;
const nota3 = 59;
const media = (nota1 + nota2 + nota3) / 3;

console.log(`Sua nota final é ${media.toFixed(1)}`);

if (media >= 70) {
    console.log('Você está APROVADO!');
} else if (media >= 60) {
    console.log('Você está em RECUPERAÇÃO!');
} else {
    console.log('Você está REPROVADO!');
}