let displayMenu = false;

let mediumScreenMenu = `
<ul>
    <li><a href="index.html">Accueil</a></li>
    <li><a href="comprendre.html">Comprendre</a></li>
    <li><a href="consequences.html">Conséquences</a></li>
    <li><a href="solutions.html">Solutions</a></li>
    <li><a href="apropos.html">À propos</a></li>
</ul>
`;

let smallScreenMenu = `
<div class="menu-standalone">
    <label onclick="toggleMenu()"> &#11166; Click to expend </label>
</div>
`;

function toggleMenu() {
    // Disable the menu - like spwan over screen
    //document.getElementById("menu").innerHTML = ""
    if (displayMenu) {
        document.getElementById("full-menu").style.visibility = "visible";
    } else {
        document.getElementById("full-menu").style.visibility = "collapse";
    }
    displayMenu = !displayMenu;

}

function analyseWidth(){
    if (document.documentElement.clientWidth > 600) {
        document.getElementById("menu").innerHTML = mediumScreenMenu;
    } else {
        document.getElementById("menu").innerHTML = smallScreenMenu;
    }
}

window.addEventListener("resize", analyseWidth, true);
analyseWidth();