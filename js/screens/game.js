import { GameEngine } from "../engine/GameEngine.js";
import { updateUI, showScreen } from "../core/ui.js";
import { showReward } from "./reward.js";
import { loseLife } from "../engine/LifeEngine.js";

export function startLevel(level) {
    const result = GameEngine.startLevel(level);

    document.getElementById("levelTitle").innerText = "Level " + level;

    showScreen("game");
    render(result);
}

function render(result) {
    if (result.type === "LEVEL_COMPLETE") {
        showReward();
        return;
    }

    if (result.type === "QUESTION") {
        document.getElementById("question").innerText = result.data.question;

        let answersDiv = document.getElementById("answers");
        answersDiv.innerHTML = "";

        result.data.answers.forEach((a, i) => {
            let btn = document.createElement("button");
            btn.className = "answer";
            btn.innerText = a;
            btn.onclick = () => onAnswer(i);
            answersDiv.appendChild(btn);
        });
    }
}

function onAnswer(index) {
    const result = GameEngine.answer(index);

    if (result.type === "CORRECT") {
        render(GameEngine.getNextQuestion());
        return;
    }

    // WRONG
    let useCoins = confirm("Продолжить за 50 монет?");
    if (useCoins && GameEngine.useCoinsContinue()) {
        updateUI();
        return;
    }

    let alive = loseLife();
    updateUI();

    if (!alive) {
        alert("Game Over");
        location.reload();
    }
}
