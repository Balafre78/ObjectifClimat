const consequencesData = [
    {
        label: "Fonte des glaces et montée des eaux",
        value: 25,
        color: "#2196f3",
        detail: "La hausse des températures provoque la fonte des glaciers et des calottes polaires, entraînant une élévation du niveau des mers et menaçant les zones côtières."
    },
    {
        label: "Événements météorologiques extrêmes",
        value: 20,
        color: "#ff9800",
        detail: "Les vagues de chaleur, tempêtes, inondations et sécheresses deviennent plus fréquentes et plus intenses, impactant les populations et les écosystèmes."
    },
    {
        label: "Perte de biodiversité",
        value: 15,
        color: "#4caf50",
        detail: "De nombreuses espèces animales et végétales disparaissent ou migrent, perturbant les équilibres naturels et menaçant la sécurité alimentaire."
    },
    {
        label: "Impacts sur la santé humaine",
        value: 10,
        color: "#e91e63",
        detail: "La pollution de l'air, la propagation de maladies et le stress thermique affectent la santé des populations, en particulier les plus vulnérables."
    },
    {
        label: "Conséquences économiques et sociales",
        value: 10,
        color: "#9c27b0",
        detail: "Les catastrophes naturelles, la baisse des rendements agricoles et les migrations climatiques entraînent des coûts économiques et sociaux importants."
    },
    {
        label: "Acidification des océans",
        value: 8,
        color: "#00bcd4",
        detail: "L’augmentation du CO₂ dissous dans les océans modifie leur pH, menaçant la faune et la flore marines."
    },
    {
        label: "Déplacement de populations",
        value: 5,
        color: "#795548",
        detail: "Les catastrophes climatiques forcent des millions de personnes à quitter leur domicile."
    },
    {
        label: "Diminution des ressources en eau",
        value: 4,
        color: "#8bc34a",
        detail: "La sécheresse et la fonte des glaciers réduisent l’accès à l’eau potable."
    },
    {
        label: "Dégradation des sols",
        value: 2,
        color: "#ffb600",
        detail: "L’érosion et la désertification rendent les terres agricoles moins productives."
    },
    {
        label: "Augmentation des incendies de forêt",
        value: 1,
        color: "#b92525",
        detail: "Les sécheresses et la chaleur favorisent la multiplication des feux de forêt."
    }
];

const svg = document.getElementById('consequencesPie');
const detailBlock = document.getElementById('consequenceDetail');
const legendBlock = document.getElementById('consequencesLegend');
const cx = 175, cy = 175, r = 120;
let total = consequencesData.reduce((sum, c) => sum + c.value, 0);
let angleStart = 0;
consequencesData.forEach((c, idx) => {
    const angle = (c.value / total) * 2 * Math.PI;
    const angleEnd = angleStart + angle;
    const x1 = cx + r * Math.cos(angleStart - Math.PI/2);
    const y1 = cy + r * Math.sin(angleStart - Math.PI/2);
    const x2 = cx + r * Math.cos(angleEnd - Math.PI/2);
    const y2 = cy + r * Math.sin(angleEnd - Math.PI/2);
    const largeArc = angle > Math.PI ? 1 : 0;
    const pathData = [
        `M ${cx} ${cy}`,
        `L ${x1} ${y1}`,
        `A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`,
        'Z'
    ].join(' ');
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("fill", c.color);
    path.setAttribute("data-idx", idx);
    path.style.cursor = "pointer";
    path.addEventListener("mousemove", () => {
        detailBlock.textContent = c.detail;
        path.setAttribute("opacity", "0.8");
    });
    path.addEventListener("mouseleave", () => {
        detailBlock.textContent = "Survolez une conséquence pour voir le détail.";
        path.setAttribute("opacity", "1");
    });
    svg.appendChild(path);
    angleStart = angleEnd;
});

legendBlock.innerHTML = consequencesData.map((c) =>
    `<span style="display:inline-block;width:16px;height:16px;background:${c.color};border-radius:3px;margin-right:8px;vertical-align:middle;"></span>
      <span style="vertical-align:middle;">${c.label}</span><br>`
).join('');