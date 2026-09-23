// Uma equipe registrou o tempo, em minutos, de seis atendimentos técnicos e deseja calcular a média.
// O programa deve:
// ☐ Criar um acumulador iniciado em zero.
// ☐ Usar um laço para solicitar exatamente 6 tempos.
// ☐ Somar cada valor ao acumulador.
// ☐ Calcular a média ao final.
// ☐ Exibir a soma dos tempos e a média.

const entrada = require('readline-sync');

let acumulador = 0;

for (let tempo = 1; tempo <= 6; tempo++) {
    const tempo = entrada.questionFloat("Digite o tempo: ");
    acumulador += tempo;
}

const media = acumulador / 6;

console.log("\n=== RESULTADO DA MEDIA ===");
console.log(`Soma do acumulador ${acumulador}`);
console.log(`Média final: ${media}`);