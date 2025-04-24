// =====================
// MENU RESPONSIVO
// =====================

// Seleciona o botão de menu (ícone ☰)
const menuToggle = document.querySelector('.menu-toggle');

// Seleciona o menu de navegação
const navMenu = document.querySelector('.nav-menu');

// Ao clicar no botão, alterna a classe "open" no menu (mostrando ou escondendo ele)
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});


// =====================
// SCROLL SUAVE ENTRE SEÇÕES
// =====================

// Seleciona todos os links internos (com href começando com "#")
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o pulo instantâneo

        const destino = document.querySelector(this.getAttribute('href')); // Pega o destino
        destino.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente
    });
});


// =====================
// TOOLTIP NAS HABILIDADES
// =====================

// Seleciona todos os elementos com a classe "habilidade"
const habilidades = document.querySelectorAll('.habilidade');

// Cria uma tooltip personalizada para cada habilidade
habilidades.forEach((item, index) => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip'); // Aplica a classe CSS de estilo

    // Define mensagens personalizadas para cada habilidade
    const mensagens = [
        'Experiência de 3 anos com ReactJS.',
        'Projetos utilizando HTML5 modernos.',
        'Estilização avançada com CSS3.',
        'JavaScript moderno com boas práticas.'
    ];

    tooltip.innerText = mensagens[index] || 'Habilidade'; // Define o texto da tooltip
    item.appendChild(tooltip); // Adiciona a tooltip como filho da habilidade

    // Mostra a tooltip ao passar o mouse
    item.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    // Esconde a tooltip ao sair com o mouse
    item.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});


// =====================
// ALERTA AO CLICAR EM UM PROJETO
// =====================

// Seleciona todos os projetos
const projetos = document.querySelectorAll('.project');

// Exibe alerta ao clicar em um projeto
projetos.forEach((projeto) => {
    projeto.addEventListener('click', () => {
        alert('Projeto ainda em desenvolvimento. Em breve mais informações!');
    });
});


// =====================
// FADE-IN AO ROLAR A TELA (Intersection Observer)
// =====================

// Cria um observador que adiciona a classe "mostrar" quando o elemento aparece na tela
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        }
    });
});

// Aplica o efeito nas seções visíveis na rolagem
document.querySelectorAll('.sobre, .habilidades, .projetos').forEach((el) => {
    el.classList.add('escondido'); // Começa escondido
    observador.observe(el); // Observa o elemento
});


// =====================
// EFEITO DE DIGITAÇÃO NO TÍTULO
// =====================

// Função que simula digitação letra por letra
function escreverTitulo(texto, elementoId, velocidade = 100) {
    const elemento = document.getElementById(elementoId);
    elemento.innerHTML = ''; // Limpa o conteúdo anterior
    let i = 0;

    function digitar() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i); // Adiciona letra por letra
            i++;
            setTimeout(digitar, velocidade); // Aguarda antes da próxima letra
        }
    }

    digitar(); // Inicia a digitação
}

// Chama a digitação quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    escreverTitulo("Brayan Cardoso", "titulo", 120);
});


// =====================
// BOTÃO VOLTAR AO TOPO
// =====================

// Seleciona o botão "voltar ao topo"
const btnTopo = document.getElementById('btn-topo');

// Mostra/esconde o botão ao rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.classList.add('mostrar');
        btnTopo.classList.remove('ocultar');
    } else {
        btnTopo.classList.remove('mostrar');
        btnTopo.classList.add('ocultar');
    }
});

// Ao clicar no botão, rola suavemente até o topo
btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// =====================
// FLUTUAÇÃO COM ROTAÇÃO (ANIMAÇÃO VIA JS)
// =====================

// Função para animar flutuação + rotação suave
function flutuarElementos(selector) {
    const elementos = document.querySelectorAll(selector); // Seleciona os elementos
    let tempo = 0; // Controla o tempo da animação

    function animar() {
        tempo += 0.02; // Velocidade da animação

        elementos.forEach((el, i) => {
            // Calcula a posição de flutuação (sobe e desce)
            const deslocamento = Math.sin(tempo + i) * 5;

            // Calcula a rotação suave (gira levemente para os lados)
            const rotacao = Math.sin(tempo + i) * 2;

            // Aplica o efeito no elemento
            el.style.transform = `translateY(${deslocamento}px) rotate(${rotacao}deg)`;
        });

        requestAnimationFrame(animar); // Continua o loop da animação
    }

    animar(); // Inicia a animação
}

// Aplica a flutuação nas habilidades e projetos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    flutuarElementos('.habilidade');
    flutuarElementos('.project');
    flutuarElementos('.social-icon')
});
