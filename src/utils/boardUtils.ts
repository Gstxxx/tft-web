import { ChampionType } from "../types/game";
import { INITIAL_BOARD_SIZE } from "../constants/gameConstants";

export function createEmptyBoard(): (ChampionType | null)[][] {
  return Array(INITIAL_BOARD_SIZE)
    .fill(null)
    .map(() => Array(INITIAL_BOARD_SIZE).fill(null));
} 