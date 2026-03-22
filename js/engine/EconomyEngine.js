import { state } from "../core/state.js";

export function spendCoins(amount) {
    if (state.coins >= amount) {
        state.coins -= amount;
        return true;
    }
    return false;
}

export function addCoins(amount) {
    state.coins += amount;
}
