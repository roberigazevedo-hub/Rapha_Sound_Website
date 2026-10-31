// Obtém o botão "Voltar ao Topo" pelo seu ID
let mybutton = document.getElementById("scrollToTopBtn");

// Quando o usuário rola a página 20px para baixo, mostra o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block"; // Mostra o botão
  } else {
    mybutton.style.display = "none"; // Esconde o botão
  }
}

// Quando o usuário clica no botão, rola a página suavemente para o topo
mybutton.addEventListener("click", topFunction);

function topFunction() {
  // Para navegadores modernos (Chrome, Firefox, Edge, Safari)
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Faz a rolagem suave
  });

  // Para navegadores mais antigos (IE, ou para compatibilidade extra)
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}