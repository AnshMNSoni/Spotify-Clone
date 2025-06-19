// for navbar on mobile
function toggleMenu() {
    document.getElementById('nav-items').classList.toggle('hidden');
}

// for progress bar tracking
const slider = document.getElementById("progress-bar");

function updateProgressFill() {
    const percent = (slider.value / slider.max) * 100;
    slider.style.setProperty('--range-progress', `${percent}%`);
}

slider.addEventListener("input", updateProgressFill);
updateProgressFill();