import { GameEngine } from "../engine/GameEngine.js";
import { updateUI, showScreen } from "../core/ui.js";

export function showReward() {
    const reward = GameEngine.finishLevel();

    document.getElementById("rewardCoins").innerText = reward;

    showScreen("reward");
}

export function nextLevel() {
    GameEngine.nextLevel();
    updateUI();
    showScreen("map");
}

export function doubleReward() {
    const el = document.getElementById("rewardCoins");
    let value = parseInt(el.innerText);

    value *= 2;
    el.innerText = value;
}
