// Um almoxarifado precisa cadastrar quatro ferramentas. Cada ferramenta possui nome, quantidade disponível e quantidade mínima.
// O programa deve:
// ☐ Criar um array vazio para armazenar as ferramentas.
// ☐ Cadastrar 4 ferramentas usando um laço.
// ☐ Criar um objeto para cada ferramenta com nome, quantidade e minimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Percorrer o array após o cadastro.
// ☐ Quando quantidade < minimo, exibir "REPOR".
// ☐ Caso contrário, exibir "ESTOQUE SUFICIENTE".
// ☐ Apresentar nome, quantidade, mínimo e situação de cada ferramenta.

const entrada = require('readline-sync');

const ferramentas = [];

for (let i = 0; i < 4; i++) {
    console.log(`\nCadastro da ferramenta ${i + 1}`);

    const nome = entrada.question("Nome: ");
    const quantidade = entrada.questionInt("Quantidade disponivel: ");
    const minimo = entrada.questionInt("Quantidade minima: ");

    const ferramenta = {
        nome,
        quantidade,
        minimo
    };

    ferramentas.push(ferramenta);
}

console.log("\n=== RELATÓRIO DE FERRAMENTAS ===");

for (let i = 0; i < ferramentas.length; i++) {
    const item = ferramentas[i];

    console.log(`\nComponente: ${item.nome}`);
    console.log(`Quantidade: ${item.quantidade}`);
    console.log(`Estoque mínimo: ${item.minimo}`);

    if (item.quantidade < item.minimo) {
        console.log("Situação: REPOR ESTOQUE");
    } else {
        console.log("Situação: ESTOQUE OK");
    }
}