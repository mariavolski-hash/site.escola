// Lista de complementos para a frase
const complementos = [
    "abre portas para o futuro.",
    "transforma realidades.",
    "constrói o conhecimento.",
    "muda a nossa mente.",
    "é o caminho para o sucesso.",
    "nos ajuda a evoluir."
];

// Seleciona os elementos da tela
const textoFrase = document.getElementById("frase-efeito");
const botao = document.getElementById("botao-mudar");

let indice = 0;

// Função que muda a frase em ordem
botao.addEventListener("click", function() {
    indice = (indice + 1) % complementos.length;
    textoFrase.innerText = complementos[indice];
});

