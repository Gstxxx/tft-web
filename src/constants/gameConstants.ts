export const LEVEL_UNIT_LIMITS = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
} as const; 

export const INITIAL_BOARD_SIZE = 7;
export const INITIAL_GOLD = 500;
export const XP_COST = 4;
export const XP_AMOUNT = 4;

export const PROBABILITIES = {
  1: [100, 0, 0, 0, 0],
  2: [100, 0, 0, 0, 0],
  3: [75, 25, 0, 0, 0],
  4: [55, 30, 15, 0, 0],
  5: [45, 33, 20, 2, 0],
  6: [30, 40, 25, 5, 0],
  7: [19, 30, 40, 10, 1],
  8: [18, 27, 32, 20, 3],
  9: [15, 20, 25, 30, 10],
  10: [5, 10, 20, 40, 25],
  11: [1, 2, 12, 50, 35],
};