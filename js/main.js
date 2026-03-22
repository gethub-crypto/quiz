import { loadGame } from "./core/storage.js";
import { updateUI } from "./core/ui.js";
import { createLevels, showMap } from "./screens/map.js";
import { openShop } from "./screens/shop.js";
import { nextLevel, doubleReward } from "./screens/reward.js";
import { regenLife } from "./engine/LifeEngine.js";
import { state } from "./core/state.js";

window.openShop = openShop;
window.nextLevel = nextLevel;
window.doubleReward = doubleReward;

setInterval(() => {
    regenLife();
    updateUI();
}, state.LIFE_REGEN_TIME);

loadGame();
createLevels();
updateUI();
showMap();
