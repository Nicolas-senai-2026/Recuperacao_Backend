// Um sensor mede o nível de vibração de um equipamento em mm/s.
// O programa deve:
// ☐ Até 3 mm/s: situação ESTÁVEL.
// ☐ Acima de 3 até 6 mm/s: situação ATENÇÃO.
// ☐ Acima de 6 mm/s: situação CRÍTICA.
// ☐ Solicitar o valor da vibração pelo terminal.
// ☐ Exibir o valor informado e a classificação.

const entrada = require('readline-sync');

const valorVibracao = entrada.questionFloat("Valor da vibracao: ");

let classificacao;

if (valorVibracao <= 3) {
    classificacao = "situacao ESTAVEL";
} else if (valorVibracao > 3 && valorVibracao <= 6) {
    classificacao = "situacao ATENCAO";
} else {
    classificacao = "situacao CRITICA";
}

console.log(`Valor da vibracao: ${valorVibracao}`);
console.log(`Classificacao: ${classificacao}`);