document.addEventListener('DOMContentLoaded', function () {
    const modoBtn = document.getElementById('modo-btn');
    const conteudo = document.body;

    // Função para verificar a preferência do usuário nos cookies
    function verificarPreferencia() {
        const modoPreferido = getCookie('modoPreferido');
        if (modoPreferido === 'modo-claro') {
            conteudo.classList.remove('modo-escuro');
            conteudo.classList.add('modo-claro');
            modoBtn.textContent = 'Modo Escuro';
        } else {
            conteudo.classList.remove('modo-claro');
            conteudo.classList.add('modo-escuro');
            modoBtn.textContent = 'Modo Claro';
        }
    }

    verificarPreferencia(); // Verificar preferência ao carregar a página

    modoBtn.addEventListener('click', () => {
        if (conteudo.classList.contains('modo-claro')) {
            conteudo.classList.remove('modo-claro');
            conteudo.classList.add('modo-escuro');
            modoBtn.textContent = 'Modo Claro';
            setCookie('modoPreferido', 'modo-escuro', 365); // Definir cookie com preferência
        } else {
            conteudo.classList.remove('modo-escuro');
            conteudo.classList.add('modo-claro');
            modoBtn.textContent = 'Modo Escuro';
            setCookie('modoPreferido', 'modo-claro', 365); // Definir cookie com preferência
        }
    });

    // Função para definir um cookie
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    // Função para obter o valor de um cookie
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName.trim() === name) {
                return cookieValue;
            }
        }
        return null;
    }
});
