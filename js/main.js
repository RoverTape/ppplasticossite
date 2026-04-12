// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('aberto');
  });

  // Fechar menu ao clicar em um link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('aberto');
    });
  });
}

// Marcar link ativo na navegação
const linksNav = document.querySelectorAll('nav a');
const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

linksNav.forEach(link => {
  const href = link.getAttribute('href');
  if (href === paginaAtual || (paginaAtual === '' && href === 'index.html')) {
    link.classList.add('ativo');
  }
});

// Formulário de contato
const forms = document.querySelectorAll('.form-contato');

forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sucesso = form.querySelector('.form-sucesso');
    const botao = form.querySelector('.btn-enviar');

    if (sucesso) {
      sucesso.classList.add('visivel');
      form.reset();
      if (botao) botao.style.display = 'none';

      setTimeout(() => {
        sucesso.classList.remove('visivel');
        if (botao) botao.style.display = '';
      }, 5000);
    }
  });
});
