export function calculateGoldIncome(player: Player): number {
  // Base income is always 5
  let totalIncome = 5;

  // Interest calculation (0-5 gold based on intervals of 10)
  const interestGold = Math.floor(player.gold / 10);
  totalIncome += Math.min(interestGold, 5);

  // Win/Loss streak bonus (1-3 gold)
  if (player.winStreak >= 5) {
    totalIncome += 3;
  } else if (player.winStreak >= 4) {
    totalIncome += 2;
  } else if (player.winStreak >= 2) {
    totalIncome += 1;
  }

  // PvP Win bonus (1 gold)
  if (player.winStreak > 0) {
    totalIncome += 1;
  }

  return totalIncome;
} 