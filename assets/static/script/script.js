// ==================== CONFIGURAÇÕES ====================
const config = {
    theme: 'dark',
    animationSpeed: 300
};

// ==================== FUNÇÕES GERAIS ====================
function toggleTheme() {
    // Lógica de tema claro/escuro
}

function debounce(func, wait) {
    // Função utilitária
}

// ==================== TABS DE EXPERIÊNCIAS ====================
function initExperienceTabs() {
    const buttons = document.querySelectorAll('.expBtn');
    const panes = document.querySelectorAll('.expPane');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('id');

            // 1. Remover active de tudo
            buttons.forEach(btn => btn.classList.remove('active'));
            panes.forEach(pane => pane.classList.remove('active'));

            // 2. Ativar botão clicado
            button.classList.add('active');

            // 3. Ativar conteúdo correspondente
            document.querySelector(`.expPane#${targetId}`).classList.add('active');
        });
    });
}

// Rodar ao carregar a página
document.addEventListener('DOMContentLoaded', initExperienceTabs);


// ==================== MENU MOBILE ====================
function initMobileMenu() {
    // Lógica do menu mobile (se tiver)
}

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', function() {
    initExperienceTabs();
    initMobileMenu();
    
    console.log('Site carregado!');
});