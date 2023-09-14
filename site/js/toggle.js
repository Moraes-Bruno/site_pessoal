// JavaScript para alternar entre os modos claro e escuro
document.addEventListener('DOMContentLoaded', function () {
    const modoBtn = document.getElementById('modo-btn');
    const conteudo = document.body;

    // Inicialize a página no modo escuro
    conteudo.classList.add('modo-escuro');
    modoBtn.textContent = 'Modo Claro'; // Altere o texto do botão

    modoBtn.addEventListener('click', () => {
        if (conteudo.classList.contains('modo-claro')) {
            conteudo.classList.remove('modo-claro');
            conteudo.classList.add('modo-escuro');
            modoBtn.textContent = 'Modo Claro';
        } else {
            conteudo.classList.remove('modo-escuro');
            conteudo.classList.add('modo-claro');
            modoBtn.textContent = 'Modo Escuro';
        }
    });
});
