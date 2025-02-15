let cont = 0;
const img_banana = document.querySelector('.imagem img');
const spanContador = document.getElementById('cont');
const titulo = document.querySelector('.imagem p'); // Pegando corretamente o <p> dentro da div .imagem

// Função para gerar um número aleatório entre min e max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gera um número aleatório para mudar a imagem
let numero = getRandomInt(5, 20); // Alterado para testes

console.log("Número alvo para mudança de imagem:", numero); // Depuração no console

if (img_banana && spanContador && titulo) {
    img_banana.addEventListener('click', () => {
        cont++;
        spanContador.textContent = cont;

        if (cont === numero) {
            img_banana.src = "miku.png"; // Muda para a Miku
            img_banana.alt = "Imagem da Miku";
            titulo.textContent = "VOCÊ ENCONTROU A MIKU ANIVERSÁRIO DE 15 ANOS!!!!"; // Muda o texto
        } else if (cont > numero) {
            img_banana.src = "banana.png"; // Volta para a banana
            img_banana.alt = "Imagem da Banana";
            titulo.innerHTML = `VOCÊ CLICOU NA BANANA <span id="cont">${cont}</span> VEZES`; // Volta para o texto original
        }
    });
} else {
    console.error('Elementos não encontrados! Verifique os seletores.');
}
/*const somBanana = new Audio('.mp3'); 
img_banana.addEventListener('click', () => {
    cont++;
    spanContador.textContent = cont;
    somBanana.play();
});*/
