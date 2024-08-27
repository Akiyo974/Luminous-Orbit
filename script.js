// Animation de gravité légère pour le vaisseau
gsap.to(".vaisseau", {
    y: -20, // Monte de 20px
    duration: 2, 
    yoyo: true, 
    repeat: -1, 
    ease: "power1.inOut" // Mouvement fluide
});

// Vérifier si un thème est déjà stocké dans localStorage
const currentTheme = localStorage.getItem('theme');
const toggleMode = document.getElementById('toggle-mode');
const body = document.body;

if (currentTheme === 'light') {
    body.classList.add('light-mode');
    toggleMode.innerHTML = '<i class="bi bi-sun"></i>';
}

// Basculer entre le mode sombre et clair et sauvegarder le choix dans localStorage
toggleMode.addEventListener('click', function() {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        toggleMode.innerHTML = '<i class="bi bi-sun"></i>';
    } else {
        localStorage.setItem('theme', 'dark');
        toggleMode.innerHTML = '<i class="bi bi-moon"></i>';
    }
});
