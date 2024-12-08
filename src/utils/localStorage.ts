import { MiniGameTitles } from "../pages/MiniGamesCollection";

const COMPLETED_GAMES_PREFIX = "completedGames/";
export const setCompletedGame = (gameTitle: MiniGameTitles, level: number) => {
    localStorage.setItem(COMPLETED_GAMES_PREFIX + gameTitle, level.toString());
};
export const getCompletedGame = (gameTitle: MiniGameTitles) => {
    const level = localStorage.getItem(COMPLETED_GAMES_PREFIX + gameTitle);
    return level ? parseInt(level) : 0;
};

export const resetProgress = () => {
    localStorage.clear();
};