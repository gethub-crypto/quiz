import { state } from "../core/state.js";
import { generateQuestion } from "./QuestionEngine.js";
import { spendCoins, addCoins } from "./EconomyEngine.js";
import { loseLife } from "./LifeEngine.js";

export const GameEngine = {

    startLevel(level) {
        state.currentLevel = level;
        state.questionIndex = 0;
        return this.getNextQuestion();
    },

    getNextQuestion() {
        const total = (state.currentLevel % 10 === 0) ? 5 : 1;

        if (state.questionIndex >= total) {
            return { type: "LEVEL_COMPLETE" };
        }

        const q = generateQuestion();
        state.currentQuestionData = q;

        return {
            type: "QUESTION",
            data: q,
            index: state.questionIndex + 1,
            total
        };
    },

    answer(selectedIndex) {
        const correct = state.currentQuestionData.correct;

        if (selectedIndex === correct) {
            state.questionIndex++;
            return { type: "CORRECT" };
        }

        return { type: "WRONG" };
    },

    useCoinsContinue() {
        if (state.coins >= 50) {
            spendCoins(50);
            return true;
        }
        return false;
    },

    finishLevel() {
        const reward = (state.currentLevel % 10 === 0) ? 120 : 20;
        state.reward = reward;
        return reward;
    },

    nextLevel() {
        addCoins(state.reward);
        state.reward = 0;
    }
};
