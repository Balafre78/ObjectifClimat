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

/* Ajoute le bouton pour changer de switch le thème sur toutes les pages qui importent le script */
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.textContent = '🌙';
    btn.id = "theme-button";
    btn.className = "button";
    btn.addEventListener('click', toggleDarkMode);
    document.body.appendChild(btn);
});
