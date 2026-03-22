import { spendCoins } from "../engine/EconomyEngine.js";
import { state } from "../core/state.js";
import { updateUI } from "../core/ui.js";

export function openShop() {
    let choice = prompt("1 remove answers (120)");

    if (choice === "1") {
        if (!spendCoins(120)) return alert("Нет монет");

        let buttons = document.querySelectorAll(".answer");
        let removed = 0;

        buttons.forEach((btn, i) => {
            if (i !== state.currentQuestionData.correct && removed < 2) {
                btn.style.display = "none";
                removed++;
            }
        });
    }

    updateUI();
}
