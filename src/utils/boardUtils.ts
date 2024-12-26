import { ChampionType } from "../types/game";
import { INITIAL_BOARD_SIZE } from "../constants/gameConstants";

export function createEmptyBoard(): (ChampionType | null)[][] {
  return Array(11)
    .fill(null)
    .map(() => Array(2).fill(null));
}
