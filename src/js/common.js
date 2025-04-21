const storedPreference = localStorage.getItem("theme") || "light"; /* Theme claire par défaut */
document.documentElement.setAttribute("theme", storedPreference);

function toggleDarkMode() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("theme", newTheme);
    document.getElementById("theme-button").textContent = newTheme === "light" ? "🌙" : "☀️";
    localStorage.setItem("theme", newTheme);
}

/*
 * Lorsque le bouton est de menu déroulant est cliqué,
 * on ajoute/supprime la class responsive à la nav-bar.
 * Si la largeur est en dessous de 600px et que la class
 * responsive est présente, on affiche le menu déroulant.
 */
function responsiveHeaderNav() {
    var x = document.getElementById("header-nav");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

/* Ajoute le bouton pour changer de switch le thème sur toutes les pages qui importent le script */
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.textContent = '🌙';
    btn.id = "theme-button";
    btn.className = "button";
    btn.addEventListener('click', toggleDarkMode);
    document.body.appendChild(btn);
});
