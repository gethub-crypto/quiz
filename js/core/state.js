export const state = {
    MAX_LIVES: 3,
    LIFE_REGEN_TIME: 30 * 60 * 1000,

    lives: 3,
    coins: 0,
    currentLevel: 1,
    questionIndex: 0,
    reward: 0,
    currentQuestionData: null,
    lastLifeTime: Date.now()
};
