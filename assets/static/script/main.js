document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".expBtn");
  const panes = document.querySelectorAll(".expPane");
  const defaultPane = document.getElementById("defaultExp");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target; // pega o id do pane
      const pane = document.getElementById(targetId);

      if (pane.classList.contains("active")) {
        // Se clicar no mesmo botão ativo, volta ao default
        panes.forEach(p => p.classList.remove("active"));
        defaultPane.classList.add("active");
      } else {
        // Remove active de todos os panes e ativa o selecionado
        panes.forEach(p => p.classList.remove("active"));
        pane.classList.add("active");
      }
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".StkBtn");
  const panes = document.querySelectorAll(".stkPane");
  const descriptions = document.querySelectorAll(".stkCont");

  // Toggle dos painéis (accordion)
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const targetPane = document.getElementById(targetId);

      if (targetPane.classList.contains("active")) {
        targetPane.classList.remove("active");
      } else {
        panes.forEach(p => p.classList.remove("active"));
        targetPane.classList.add("active");
      }
    });
  });

  // Hover nos ícones -> ativa descrição
  const icons = document.querySelectorAll(".stkPane img");
  icons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
      const targetId = icon.dataset.target;

      // Desativa todas as descrições
      descriptions.forEach(desc => desc.classList.remove("active"));

      // Ativa apenas a descrição correspondente
      const desc = document.getElementById(targetId);
      if (desc) desc.classList.add("active");
    });

    // Opcional: limpar ao sair do ícone
    icon.addEventListener("mouseleave", () => {
      descriptions.forEach(desc => desc.classList.remove("active"));
    });
  });
});
