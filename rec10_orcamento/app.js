// ☐ Solicitar nome do cliente, valor dos materiais e horas de serviço.
// ☐ Exibir relatóirio com cliente, materiais, mão de obra, total e situação do desconto.

// const entrada = require('readline-sync');
// const {
//     calcularMaoDeObra,
//     calcularTotal,
//     verificarDesconto
// } = require("./funcoesOrcamento");

// const nome = entrada.question("Nome cliente:  ");
// const valor = entrada.questionFloat("Valor dos materiais:  ");
// const horaServico = entrada.questionInt("Horas de servico:  ");

// const maoDeObra = calcularMaoDeObra(horaServico);
// const calculo = calcularTotal(valor, horaServico);
// const desconto = verificarDesconto(calculo);

// // Relatório Final
// console.log("\n--- RELATORIO DE SERVICO ---");
// console.log(`Nome do cliente: ${nome}`)
// console.log(`Materiais: R$ ${valor.toFixed(2)}`);
// console.log(`Horas de servico:  ${horaServico}`)
// console.log(`Mao de obra:   R$ ${maoDeObra.toFixed(2)}`);
// console.log(`Total:   R$ ${calculo.toFixed(2)}`);
// console.log(`Desconto:          ${desconto}`);
// console.log("----------------------------");