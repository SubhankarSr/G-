// Initialize AOS
AOS.init();

// Initialize Particles.js
particlesJS("particles-js", {
"particles": {
"number": { "value": 120 },
"color": { "value": "#00f7ff" },
"shape": { "type": "circle" },
"opacity": { "value": 0.5, "random": true },
"size": { "value": 3, "random": true },
"line_linked": {
"enable": true,
"distance": 150,
"color": "#00f7ff",
"opacity": 0.4,
"width": 1
},
"move": {
"enable": true,
"speed": 3,
"direction": "none",
"random": false,
"out_mode": "out"
}
},
"interactivity": {
"events": {
"onhover": { "enable": true, "mode": "repulse" }
}
},
"retina_detect": true
});

// Popup Logic
function openPopup(service) {
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
popupTitle.innerText = service === 'diet' ? "Personalized Diet Plan"
: service === 'fitness' ? "Customized Fitness Plan"
: "AI Health Insights";
popup.style.display = 'flex';
}

function closePopup() {
const popup = document.getElementById('popup');
popup.style.display = 'none';
document.getElementById('popup-form').reset();
document.getElementById('popup-form').style.display = 'flex';
document.getElementById('generated-plan').innerText = '';
document.getElementById('download-btn').style.display = 'none';
}

// Form Handling
document.getElementById('popup-form').addEventListener('submit', function(e) {
e.preventDefault();
const age = parseInt(document.getElementById('age').value);
const weight = parseFloat(document.getElementById('weight').value);
const allergies = document.getElementById('allergies').value.trim();
const diseases = document.getElementById('diseases').value.trim();
const goals = document.getElementById('goals').value.trim();

let plan = `🌟 Personalized Health & Wellness Plan 🌟\n\n`;
plan += `🧠 Age: ${age} years\n`;
plan += `🏋️ Weight: ${weight} kg\n`;
plan += `🎯 Goals: ${goals}\n\n`;

if (allergies) plan += `⚠️ Allergies: ${allergies}\n`;
if (diseases) plan += `🩺 Pre-existing Conditions: ${diseases}\n`;

plan += `\n👉 DIET PLAN:\n`;
if (weight > 80) {
plan += `- Focus on a calorie deficit: Avoid sugary and processed foods.\n- Prioritize vegetables, lean proteins (chicken, fish, tofu), and whole grains.\n- Drink at least 3 liters of water daily.\n`;
} else if (weight < 50) {
plan += `- Focus on a calorie surplus: Include healthy fats (avocado, nuts) and protein shakes.\n- Frequent meals: 5–6 times a day.\n`;
} else {
plan += `- Balanced diet: Include colorful veggies, healthy fats, and moderate carbs.\n- Maintain hydration and small frequent meals.\n`;
}

if (allergies.includes('gluten')) {
plan += `- Choose gluten-free grains like quinoa and rice.\n`;
}
if (allergies.includes('lactose')) {
plan += `- Use plant-based milk (almond, soy).\n`;
}

plan += `\n👉 FITNESS PLAN:\n`;
if (age < 30) {
plan += `- 4–5 days of strength training per week.\n- 2 days of HIIT/cardio (running, cycling).\n- Include core strengthening exercises.\n`;
} else {
plan += `- 3 days strength training + 2 days low-impact cardio (brisk walk, swimming).\n- Yoga/stretching at least 2 times per week.\n`;
}
if (diseases.toLowerCase().includes('hypertension')) {
plan += `- Avoid heavy weight lifting; prefer walking, yoga, light resistance bands.\n`;
}

plan += `\n👉 LIFESTYLE TIPS:\n`;
plan += `- Sleep 7–8 hours every night for muscle recovery and mental health.\n`;
plan += `- Practice mindfulness: 5 minutes meditation daily.\n`;
plan += `- Regular blood tests every 6 months.\n`;
plan += `- Limit alcohol and avoid smoking.\n`;

plan += `\n✨ Supplements Suggestion:\n- Multivitamins\n- Omega-3 capsules\n- Vitamin D (if indoors mostly)\n`;

plan += `\n🚀 Stay consistent and track your progress weekly!\n`;

document.getElementById('generated-plan').innerText = plan;
document.getElementById('popup-form').style.display = 'none';

const downloadBtn = document.getElementById('download-btn');
downloadBtn.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(plan);
downloadBtn.style.display = 'inline-block';
});

// ✨ Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const trailCount = 10;
let trails = [];

for (let i = 0; i < trailCount; i++) {
const trail = document.createElement('div');
trail.classList.add('trail');
document.body.appendChild(trail);
trails.push(trail);
}

let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
});

function animateCursor() {
cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
trails.forEach((trail, index) => {
const delay = index * 0.05;
setTimeout(() => {
trail.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}, delay * 1000);
});
requestAnimationFrame(animateCursor);
}
animateCursor();
