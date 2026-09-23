// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.
// O programa deve:
// ☐ Importar a biblioteca readline-sync.
// ☐ Solicitar o nome da peça.
// ☐ Solicitar a quantidade comprada.
// ☐ Solicitar o preço unitário.
// ☐ Calcular o valor total da compra.
// ☐ Exibir um resumo contendo nome, quantidade, preço unitário e total

const entrada = require('readline-sync');

const nomePeca = entrada.question("Nome da peca: ");

const QntdComprada = entrada.questionInt("Quantidade de pecas compradas: ");

const precoUnitario = entrada.questionFloat("Preco da peca: ");

const valorTotal = precoUnitario * QntdComprada;


console.log("\n=== RESUMO DA COMPRA ===");
console.log(`Nome da peca: ${nomePeca}`);
console.log(`Quantidade comprada: ${QntdComprada.toFixed(2)}`);
console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);