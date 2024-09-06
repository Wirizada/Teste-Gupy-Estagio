// 1) Fibonacci: Calcular se um número pertence à sequência de Fibonacci.
// A sequência começa com 0 e 1, e o próximo número é sempre a soma dos dois anteriores.

function pertenceFibonacci(n) {
    let a = 0, b = 1;
    while (a < n) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a === n ? `O número ${n} está na sequência de Fibonacci.` : `O número ${n} NÃO está na sequência de Fibonacci.`;
}

let numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));
console.log(pertenceFibonacci(numero));


// 2) Contar quantas vezes aparece a letra 'a' (maiúscula ou minúscula) em uma string.
// A ideia aqui é passar uma string e contar as ocorrências da letra 'a'.

function contarA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return `A letra 'a' aparece ${count} vezes.`;
}

let frase = prompt("Digite uma frase para contar quantas vezes a letra 'a' aparece:");
console.log(contarA(frase));


// 3) Qual o valor de SOMA no código abaixo?
// O código vai somando valores de K, que vai de 1 até 12. O valor final de SOMA será 78.

let INDICE = 12, SOMA = 0, K = 1;
while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log(SOMA);  // Vai imprimir 78


// 4) Completar a lógica das sequências numéricas:
// a) 1, 3, 5, 7, ___ (R: 9) (Sequência de ímpares)
// b) 2, 4, 8, 16, 32, 64, ___ (R: 128) (Potências de 2)
// c) 0, 1, 4, 9, 16, 25, 36, ___ (R: 49) (Quadrados perfeitos)
// d) 4, 16, 36, 64, ___ (R: 100) (Quadrados perfeitos de números pares)
// e) 1, 1, 2, 3, 5, 8, ___ (R: 13) (Sequência de Fibonacci)
// f) 2, 10, 12, 16, 17, 18, 19, ___ (R: 20) (Números sem o dígito 1 no meio)

console.log("Sequências completadas com sucesso!");


// 5) Problema dos interruptores e lâmpadas.
// Você tem três interruptores e três lâmpadas. Como descobrir qual interruptor liga qual lâmpada com apenas duas idas à sala das lâmpadas?

// Resposta: 
// 1. Ligue o primeiro interruptor e deixe por alguns minutos.
// 2. Desligue o primeiro e ligue o segundo.
// 3. Vá até a sala das lâmpadas:
//    - A lâmpada que está acesa pertence ao segundo interruptor.
//    - A lâmpada quente mas apagada é do primeiro interruptor.
//    - A lâmpada fria é do terceiro interruptor.

