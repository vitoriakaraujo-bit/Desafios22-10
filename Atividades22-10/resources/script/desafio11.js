let saldo = 500;
let saque = 150;

if (saque <= 0) {
    console.log("Valor de saque inválido.");
} else if (saque > saldo) {
    console.log("Saldo insuficiente.");
} else {
    saldo = saldo - saque;
    console.log("Saque realizado com sucesso.");
}

console.log("Saldo restante: R$", saldo);