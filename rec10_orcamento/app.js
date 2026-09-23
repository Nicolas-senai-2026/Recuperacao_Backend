// ☐ Solicitar nome do cliente, valor dos materiais e horas de serviço.
// ☐ Exibir relatório com cliente, materiais, mão de obra, total e situação do desconto.

const entrada = require('readline-sync');
const { verificarDesconto } = require('./funcoesOrcamento');

const {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
} = require("./funcoesOrcamento")

console.log("=== SISTEMA DE ORCAMENTO ===");

// Entradas de dados
const cliente = entrada.question("Nome cliente: ");
const materiais = entrada.questionInt("Valor materiais: R$ ")
const horasServico = entrada.questionInt("Horas de servico: ");

const calculo = calcularMaoDeObra(materiais, horasServico);
const orcamentoTotal = calcularTotal(horasServico);
const desconto = verificarDesconto(orcamentoTotal);

// Relatório Final
console.log("\n--- RELATORIO DE SERVICO ---");
console.log(`Nome do cliente: ${cliente}`)
console.log(`Materiais: R$ ${materiais.toFixed(2)}`);
console.log(`Mao de obra:   R$ ${horasServico.toFixed(2)}`);
console.log(`Total:   R$ ${calculo.toFixed(2)}`);
console.log(`Desconto:          ${desconto}`);
console.log("----------------------------");