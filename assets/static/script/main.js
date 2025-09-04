  /* Tema Dark/Light */
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    body.classList.add("dark"); // padrão
  }
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });

/*Funcionalidade para botoes de Abas*/
const tablinks = document.getElementsByClassName("tablinks");

for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", function (evt) {
    // Remove 'active' de todos os links e oculta todo o conteúdo
    document.querySelectorAll(".tablinks").forEach(link => link.classList.remove("active"));
    document.querySelectorAll(".tabcontent").forEach(content => content.style.display = "none");

    // Ativa a aba clicada e exibe seu conteúdo
    this.classList.add("active");
    document.getElementById(this.dataset.tabId).style.display = "block";
  });
}

/*Funcionalidade para botoes de Acordeon*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");
    
    var panel = this.nextElementSibling;

    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
} 