import { state } from "./state.js";

export function saveGame() {
    localStorage.setItem("quiz_lives", state.lives);
    localStorage.setItem("quiz_coins", state.coins);
    localStorage.setItem("quiz_lastLifeTime", state.lastLifeTime);
}

export function loadGame() {
    let savedLives = localStorage.getItem("quiz_lives");
    let savedCoins = localStorage.getItem("quiz_coins");
    let savedTime = localStorage.getItem("quiz_lastLifeTime");

    if (savedLives) state.lives = parseInt(savedLives);
    if (savedCoins) state.coins = parseInt(savedCoins);
    if (savedTime) state.lastLifeTime = parseInt(savedTime);

    recoverOfflineLives();
}

function recoverOfflineLives() {
    const now = Date.now();
    const passedMs = now - state.lastLifeTime;
    const livesToAdd = Math.floor(passedMs / state.LIFE_REGEN_TIME);

    if (livesToAdd > 0 && state.lives < state.MAX_LIVES) {
        state.lives = Math.min(state.lives + livesToAdd, state.MAX_LIVES);
        state.lastLifeTime = now - (passedMs % state.LIFE_REGEN_TIME);
        saveGame();
    }
}
