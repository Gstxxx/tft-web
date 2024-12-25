import { Champion } from "../types/game";

export function getUpgradedStats(champion: Champion, newStars: 1 | 2 | 3): Champion {
  const multiplier = newStars === 2 ? 1.8 : newStars === 3 ? 3.2 : 1;
  
  return {
    ...champion,
    health: Math.round(champion.health * multiplier),
    maxHealth: Math.round(champion.maxHealth * multiplier),
    attackDamage: Math.round(champion.attackDamage * multiplier),
    stars: newStars,
    instanceId: crypto.randomUUID(), // Generate new instance ID for upgraded unit
  };
}

export function findUpgradeableTrios(champions: Champion[]): Champion[][] {
  const groups = new Map<string, Champion[]>();
  
  // Group champions by name and star level
  champions.forEach(champ => {
    const key = `${champ.name}-${champ.stars}`;
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)?.push(champ);
  });
  
  // Find groups of 3 that can be upgraded
  const upgradeable: Champion[][] = [];
  groups.forEach((group) => {
    if (group.length >= 3 && group[0].stars < 3) {
      // Split into groups of 3
      while (group.length >= 3) {
        upgradeable.push(group.splice(0, 3));
      }
    }
  });
  
  return upgradeable;
} 