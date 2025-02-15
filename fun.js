let cont = 0;
const img_banana = document.querySelector('.imagem img');
const spanContador = document.getElementById('cont');

// Verifica se os elementos existem antes de adicionar o evento
if (img_banana && spanContador) {
    img_banana.addEventListener('click', () => {
        cont++;
        spanContador.textContent = cont;
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
