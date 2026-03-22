import { state } from "../core/state.js";

export function loseLife() {
    state.lives--;

    if (state.lives <= 0) {
        return false; // game over
    }

    return true;
}

export function regenLife() {
    if (state.lives < state.MAX_LIVES) {
        state.lives++;
        state.lastLifeTime = Date.now();
    }
}
