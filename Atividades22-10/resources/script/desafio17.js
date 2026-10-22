let notas = [6, 7.5, 8, 9.5, 5, 10];

let nota = notas.find(n => n >= 9);

if (nota) {
    console.log("Primeira nota encontrada:", nota);
} else {
    console.log("Não existe nota maior ou igual a 9.");
}