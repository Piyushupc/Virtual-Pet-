let hunger = 50;
let happiness = 50;

function updateStatus() {
    document.getElementById('hunger-level').textContent = hunger;
    document.getElementById('happiness-level').textContent = happiness;
}

function feedPet() {
    hunger = Math.max(hunger - 10, 0);
    updateStatus();
}

function playWithPet() {
    happiness = Math.min(happiness + 10, 100);
    updateStatus();
}

updateStatus();
