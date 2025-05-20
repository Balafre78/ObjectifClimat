let currentCategory = 1;

function nextCategory(category) {
    document.getElementById(`category-${category}`).style.display = "none";
    document.getElementById(`category-${category + 1}`).style.display = "flex";
    currentCategory++;
}

function prevCategory(category) {
    document.getElementById(`category-${category}`).style.display = "none";
    document.getElementById(`category-${category - 1}`).style.display = "flex";
    currentCategory--;
}

function calculateCarbon() {
    const carKm = parseFloat(document.getElementById("car-km").value) || 0;
    const publicTransport = parseFloat(document.getElementById("public-transport").value) || 0;
    const electricity = parseFloat(document.getElementById("electricity").value) || 0;
    const meat = parseFloat(document.getElementById("meat").value) || 0;
    const localFood = parseFloat(document.getElementById("local-food").value) || 0;

    // Exemple de calcul simplifié
    const carbonFootprint = (carKm * 0.2) + (publicTransport * 0.1) + (electricity * 0.5) + (meat * 1.5) - (localFood * 0.05);

    document.getElementById("carbon-result").innerText = `Votre empreinte carbone estimée est de ${carbonFootprint.toFixed(2)} kg CO2 par semaine.`;
    document.getElementById("carbon-form").style.display = "none";
    document.getElementById("result").style.display = "block";
}

function restart() {
    document.getElementById("carbon-form").reset();
    document.getElementById("result").style.display = "none";
    document.getElementById("category-1").style.display = "block";
    currentCategory = 1;
}