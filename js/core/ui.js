import { state } from "./state.js";
import { saveGame } from "./storage.js";

export function updateUI() {
    document.getElementById("lives").innerText = state.lives;
    document.getElementById("coins").innerText = state.coins;
    saveGame();
}

export function showScreen(id) {
    document.querySelectorAll(".screen").forEach(el => {
        el.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}
