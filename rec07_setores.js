// Crie um programa para cadastrar seis setores de uma fábrica e, ao final, listar todos os setores numerados.
// O programa deve:
// ☐ Criar um array vazio.
// ☐ Usar um laço para solicitar 6 nomes de setores.
// ☐ Adicionar cada nome ao array usando push().
// ☐ Percorrer o array novamente após o cadastro.
// ☐ Exibir no formato "1 - Montagem", "2 - Qualidade" etc.
// ☐ Usar a propriedade length em pelo menos um dos laços.

const entrada = require('readline-sync');

const setor = [];

for (let i = 1; i <= 6; i++) {
    const nome = entrada.question("Digite o nome do setor: ");
    setor.push(nome);
}

console.log("\n=== SETORES CADASTRADOS ===");

for (let i = 0; i < setor.length; i++) {
    console.log(`${i + 1} - ${setor[i]}`);
}