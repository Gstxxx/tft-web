import { Champion } from "../types/game";

export function getUpgradedStats(
  champion: Champion,
  newStars: 1 | 2 | 3
): Champion {
  const multiplier = newStars === 2 ? 1.8 : newStars === 3 ? 3.2 : 1;

  return {
    ...champion,
    uuid: crypto.randomUUID(), // Gerar novo UUID para o campeão upgraded
    health: Math.round(champion.health * multiplier),
    maxHealth: Math.round(champion.maxHealth * multiplier),
    attackDamage: Math.round(champion.attackDamage * multiplier),
    stars: newStars,
  };
}

export function findUpgradeableTrios(champions: Champion[]): Champion[][] {
  const groups = new Map<string, Champion[]>();

  // Agrupar campeões por nome e nível de estrelas
  champions.forEach((champ) => {
    const key = `${champ.name}-${champ.stars}`;
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)?.push(champ);
  });

  // Encontrar grupos de 3 que podem ser upgraded
  const upgradeable: Champion[][] = [];
  groups.forEach((group, key) => {
    // Verificar se temos 3 campeões do mesmo tipo e se não estão no nível máximo
    if (group.length >= 3 && group[0].stars < 3) {
      // Separar em grupos de 3
      while (group.length >= 3) {
        upgradeable.push(group.splice(0, 3));
      }
    }
  });

  return upgradeable;
}
