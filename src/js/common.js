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

function backToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
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


/**
 * Fait scroller l'utilisateur jusqu'au niveau du content (sous la forme de la classe `.content`)
 */
function scrollToContent(event) {
    document.querySelector(".content").scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
}

document.addEventListener('DOMContentLoaded', () => {
    /* Ajoute le bouton pour changer de switch le thème sur toutes les pages qui importent le script */
    const btn = document.createElement('button');
    btn.textContent = '🌙';
    btn.id = "theme-button";
    btn.classList.add("button");
    btn.classList.add("block");
    btn.addEventListener('click', toggleDarkMode);
    document.body.appendChild(btn);
});