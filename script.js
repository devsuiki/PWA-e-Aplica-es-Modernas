alert('Bom Dia!')

document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".sidebar-link");
    const sidebar = document.querySelector(".sidebar-container");
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    
    // 1. Abre e fecha a barra ao clicar no botão de 2 tracinhos
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("open");
      sidebar.classList.toggle("open");
    });
  
    // 2. Rola suavemente até a seção e esconde a barra após o clique
    menuLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
  
        // Fecha o menu imediatamente após escolher a seção
        hamburgerBtn.classList.remove("open");
        sidebar.classList.remove("open");
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  
    // 3. Monitora qual seção está visível para marcar no menu dinamicamente
    const secoes = document.querySelectorAll("[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idAtivo = entry.target.getAttribute("id");
          
          menuLinks.forEach(link => {
            if (link.getAttribute("href") === `#${idAtivo}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);
  
    secoes.forEach(secao => observer.observe(secao));
  });
  
