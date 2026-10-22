let precos = [80, 35, 65, 20, 100];
let total = 0;

precos.forEach(function(preco, indice) {
    console.log((indice + 1) + " - R$ " + preco);
    total = total + preco;
});

console.log("Total: R$", total);