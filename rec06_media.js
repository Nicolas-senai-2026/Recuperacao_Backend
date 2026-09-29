// // ☐ Criar um acumulador iniciado em zero.
// // ☐ Usar um laço para solicitar exatamente 6 tempos.
// // ☐ Somar cada valor ao acumulador.
// // ☐ Calcular a média ao final.
// // ☐ Exibir a soma dos tempos e a média.

// const entrada = require('readline-sync');

// let acumulador = 0;

// for (let i = 1; i <= 6; i++) {
//     const tempo = entrada.questionFloat(`Digite o tempo ${i}: `);
//     acumulador += tempo;
// }

// const media = acumulador / 6;

// console.log("\n=== RESULTADO DA MEDIA ===");
// console.log(`Soma do acumulador: ${acumulador}`);
// console.log(`Média final: ${media.toFixed(2)}`);