let currentCategory = 1;
const totalCategories = 5;

function nextCategory() {
    document.getElementById(`category-${currentCategory}`).style.display = "none";
    currentCategory++;
    document.getElementById(`category-${currentCategory}`).style.display = "flex";
    updateButtons();
}

function prevCategory() {
    document.getElementById(`category-${currentCategory}`).style.display = "none";
    currentCategory--;
    document.getElementById(`category-${currentCategory}`).style.display = "flex";
    updateButtons();
}

function updateButtons() {
    const valid = isCurrentCategoryValid();
    console.log(valid);
    document.getElementById("prev-button").disabled = currentCategory === 1;
    document.getElementById("next-button").disabled = (currentCategory === totalCategories || !valid);
    document.getElementById("calc-button").style.display = (currentCategory === totalCategories && valid) ? "inline-block" : "none";
}

window.onload = function() {
    document.getElementById("carbon-form").addEventListener("input", updateButtons);
    updateButtons();
};

function calculateCarbon() {
    // Transport
    const carKm = parseFloat(document.getElementById("car-km").value) || 0;
    const vehiculeType = document.getElementById("vehicule-type").value;
    const bike = document.getElementById("bike").checked;
    const publicTransport = document.querySelector('input[name="public-transport"]:checked')?.value || "";

    // Logement
    const electricity = parseFloat(document.getElementById("electricity").value) || 0;
    const heating = document.getElementById("heating").value;
    const isolation = document.querySelector('input[name="isolation"]:checked')?.value || "";
    const surface = parseFloat(document.getElementById("surface").value) || 1;

    // Alimentation
    const regime = document.querySelector('input[name="regime"]:checked')?.value || "";
    const meat = parseFloat(document.getElementById("meat").value) || 0;
    const localFood = parseFloat(document.getElementById("local-food").value) || 0;
    const bio = document.getElementById("bio").value;

    // Services publics
    const eau = parseFloat(document.getElementById("eau").value) || 0;
    const dechets = parseFloat(document.getElementById("dechets").value) || 0;
    const triPlastique = document.getElementById("tri-plastique").checked;
    const triVerre = document.getElementById("tri-verre").checked;
    const triPapier = document.getElementById("tri-papier").checked;

    // Numérique
    const appareils = parseFloat(document.getElementById("appareils").value) || 0;
    const tempsEcran = parseFloat(document.getElementById("temps-ecran").value) || 0;
    const cloud = document.getElementById("cloud").value;

    // --- Calcul simplifié (coefficients fictifs) ---
    let carbonFootprint = 0;

    // Transport
    let vehiculeCoef = 0.2;
    if (vehiculeType === "essence") vehiculeCoef = 0.22;
    else if (vehiculeType === "diesel") vehiculeCoef = 0.19;
    else if (vehiculeType === "electrique") vehiculeCoef = 0.05;
    else if (vehiculeType === "hybride") vehiculeCoef = 0.12;
    carbonFootprint += carKm * vehiculeCoef;
    if (publicTransport === "quotidien") carbonFootprint += 2;
    else if (publicTransport === "occasionnel") carbonFootprint += 1;
    if (!bike) carbonFootprint += 1;

    // Logement
    let heatingCoef = 1.5;
    if (heating === "gaz") heatingCoef = 2;
    else if (heating === "electrique") heatingCoef = 1.5;
    else if (heating === "bois") heatingCoef = 0.7;
    else if (heating === "autre") heatingCoef = 2.5;
    let isolationCoef = 1;
    if (isolation === "bonne") isolationCoef = 0.8;
    else if (isolation === "moyenne") isolationCoef = 1;
    else if (isolation === "mauvaise") isolationCoef = 1.2;
    carbonFootprint += (electricity * 0.5 + surface * 0.1) * heatingCoef * isolationCoef;

    // Alimentation
    let regimeCoef = 1.5;
    if (regime === "omnivore") regimeCoef = 1.5;
    else if (regime === "vegetarien") regimeCoef = 1;
    else if (regime === "vegan") regimeCoef = 0.7;
    let bioCoef = 1;
    if (bio === "oui") bioCoef = 0.9;
    else if (bio === "parfois") bioCoef = 1;
    else if (bio === "non") bioCoef = 1.1;
    carbonFootprint += meat * regimeCoef * bioCoef;
    carbonFootprint -= localFood * 0.05;

    // Services publics
    carbonFootprint += eau * 0.3;
    carbonFootprint += dechets * 0.2;
    let triBonus = 0;
    if (triPlastique) triBonus += 0.5;
    if (triVerre) triBonus += 0.5;
    if (triPapier) triBonus += 0.5;
    carbonFootprint -= triBonus;

    // Numérique
    let cloudCoef = 0;
    if (cloud === "aucun") cloudCoef = 0;
    else if (cloud === "moins-50") cloudCoef = 1;
    else if (cloud === "plus-50") cloudCoef = 2;
    carbonFootprint += appareils * 0.8 + tempsEcran * 0.5 + cloudCoef;

    // Affichage du résultat
    document.getElementById("carbon-result").innerText =
        `Votre empreinte carbone estimée est de ${carbonFootprint.toFixed(2)} kg CO2 par semaine.`;
    document.getElementById("carbon-form").style.display = "none";
    document.getElementById("result").style.display = "block";
}

function isCurrentCategoryValid() {
    const category = document.getElementById(`category-${currentCategory}`);
    const requiredFields = category.querySelectorAll('input[required], select[required]');
    console.log(requiredFields);
    for (let field of requiredFields) {
        if (field.type === "radio") {
            // Vérifie qu'au moins un radio du même nom est coché
            const radios = category.querySelectorAll(`input[type="radio"][name="${field.name}"]`);
            if (![...radios].some(r => r.checked)) return false;
        } else if (!field.value) {
            return false;
        }
    }
    console.log("Tout les champs requis sont remplis pour la catégorie " + currentCategory);
    return true;
}