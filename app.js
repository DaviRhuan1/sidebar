const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

/* Projeto 11 */

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

var imagens = ["img/vecteezy_white-clipboard-task-management-todo-check-list-efficient_8879446.png", "img/vecteezy_carrinho-de-compras-vermelho_9339337.png", 
"img/vecteezy_ilustracao-3d-do-icone-vermelho-da-cesta-de-compras-ou_8470415.png"];
var imgElement = document.getElementById('imgElement');
var currentIndex = 0;

function alternarImagens() {
    // Altera a imagem para a próxima no array
    imgElement.src = imagens[currentIndex];

    // Atualiza o índice para a próxima imagem
    currentIndex = (currentIndex + 1) % imagens.length;
}

// Define um intervalo para chamar a função a cada 6 segundos (3000 milissegundos)
setInterval(alternarImagens, 3000);