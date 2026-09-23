// Uma máquina de embalagem produz uma quantidade fixa de caixas por hora. Crie um programa que calcule quantas caixas serão produzidas durante um dia de trabalho.
// O programa deve:
// ☐ Criar uma variável para a quantidade de caixas produzidas por hora.
// ☐ Criar uma variável para a quantidade de horas trabalhadas no dia.
// ☐ Calcular a produção total.
// ☐ Exibir uma frase informando caixas por hora, horas trabalhadas e total produzido

const entrada = require('readline-sync');

const caixasHora = entrada.questionInt("Quantas caixas sao produzidas por hora: ");

const horasTrabalhadas = entrada.questionInt("Quantas horas trabalhadas: ");

const producaoTotal = caixasHora * horasTrabalhadas;

console.log("=== RESULTADO PRODUÇÃO MAQUINA DE EMBALAGEM ===");
console.log(`Produção de caixas por hora: ${caixasHora} caixas`);
console.log(`Horas trabalhadas: ${horasTrabalhadas} horas`);
console.log(`Produção total: ${producaoTotal} caixas`);