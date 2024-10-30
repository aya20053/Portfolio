
    // Récupérer tous les liens de la navbar
const navLinks = document.querySelectorAll('.nav-link');

// Fonction pour mettre à jour la classe active
function setActiveLink() {
    // Supprimer la classe active de tous les liens
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Ajouter la classe active à l'élément cliqué
    this.classList.add('active');
}

// Ajouter un écouteur d'événement pour chaque lien
navLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});

    document.addEventListener("scroll", function() {
        var sections = document.querySelectorAll("section");
        var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    
        sections.forEach(function(section) {
            var sectionTop = section.offsetTop - 100; // Ajuster pour tenir compte de la hauteur de la navbar
            var sectionHeight = section.offsetHeight;
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.parentElement.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.getAttribute("id")) {
                        link.parentElement.classList.add("active");
                    }
                });
            }
        });
    });
  
        
        document.addEventListener("DOMContentLoaded", function () {
    const diplomas = document.querySelectorAll(".diploma");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Ajout du délai progressif en fonction de l'index de l'élément
                    entry.target.style.animationDelay = `${index * 0.3}s`; // Par exemple, 0.3s d'intervalle entre chaque élément
                    entry.target.classList.add("fade-in"); // Choisissez fade-in ou une autre animation
                    observer.unobserve(entry.target); // Arrête l'observation une fois que l'animation est déclenchée
                }
            });
        },
        { threshold: 0.1 }
    );

    diplomas.forEach((diploma) => {
        observer.observe(diploma);
    });
});

  
    document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Délai progressif pour chaque compétence
                    entry.target.style.animationDelay = `${index * 0.2}s`; // Ajustez le délai pour un intervalle agréable
                    entry.target.classList.add("fade-in"); // Ajout de l'animation
                    observer.unobserve(entry.target); // Stoppe l'observation une fois déclenché
                }
            });
        },
        { threshold: 0.1 }
    );

    skills.forEach((skill) => {
        observer.observe(skill);
    });
});

    document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Applique un délai progressif pour chaque carte de projet
                    entry.target.style.animationDelay = `${index * 0.3}s`; // Ajustez le délai pour un intervalle agréable
                    entry.target.classList.add("fade-in"); // Ajoute la classe d'animation
                    observer.unobserve(entry.target); // Stop l'observation après animation
                }
            });
        },
        { threshold: 0.1 }
    );

    projectCards.forEach((card) => {
        observer.observe(card);
    });
});

