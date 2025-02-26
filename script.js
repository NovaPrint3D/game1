const startButton = document.getElementById("startBtn");
const ghost = document.getElementById("ghost");
const message = document.getElementById("message");
const scaryMessage = document.createElement("div");
scaryMessage.id = "scary";
document.body.appendChild(scaryMessage);

startButton.addEventListener("click", startGame);

function startGame() {
    message.textContent = "Oh, you’re in for a treat...";
    startButton.style.display = "none";
    
    setTimeout(() => {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#ddd";
        showCreepyMessage("Something is watching you...");
    }, 3000);

    setTimeout(() => {
        ghost.style.opacity = 1;
        ghost.style.transform = "translate(-50%, -50%)";
    }, 5000);

    setTimeout(() => {
        ghost.style.opacity = 0;
        startScaryEvent();
    }, 10000);
}

function showCreepyMessage(text) {
    scaryMessage.style.display = "block";
    scaryMessage.textContent = text;
}

function startScaryEvent() {
    setTimeout(() => {
        showCreepyMessage("You should not have clicked that...");
    }, 2000);

    setTimeout(() => {
        const horrorEffect = document.createElement('div');
        horrorEffect.style.position = 'fixed';
        horrorEffect.style.top = '0';
        horrorEffect.style.left = '0';
        horrorEffect.style.width = '100%';
        horrorEffect.style.height = '100%';
        horrorEffect.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        horrorEffect.style.color = 'red';
        horrorEffect.style.fontSize = '5rem';
        horrorEffect.style.display = 'flex';
        horrorEffect.style.justifyContent = 'center';
        horrorEffect.style.alignItems = 'center';
        horrorEffect.style.textShadow = '0 0 20px red';
        horrorEffect.style.zIndex = '9999';
        horrorEffect.textContent = 'YOU ARE NOT ALONE...';
        document.body.appendChild(horrorEffect);

        setTimeout(() => {
            horrorEffect.style.opacity = 0;
            setTimeout(() => {
                horrorEffect.remove();
            }, 1000);
        }, 3000);
    }, 15000);
}
