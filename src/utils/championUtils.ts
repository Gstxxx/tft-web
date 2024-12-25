import { Champion } from "../types/game";
import { SAMPLE_CHAMPIONS } from "../data/champions";

export function getRandomChampions(count: number = 5) {
  return [...SAMPLE_CHAMPIONS].sort(() => Math.random() - 0.5).slice(0, count);
}

export function upgradeChampions(bench: Champion[]) {
  let upgradedBench = [...bench];
  const processed = new Set<string>();

  console.log(
    "Starting upgrade process with bench:",
    bench.map((c) => `${c.name} (${c.stars}★)`)
  );

  // Process one star level at a time
  for (let stars = 1; stars < 3; stars++) {
    // Get all champions of current star level that haven't been processed
    const championsOfSameStar = upgradedBench.filter(
      (c) => c.stars === stars && !processed.has(c.id)
    );

    console.log(
      `Found ${championsOfSameStar.length} champions with ${stars} stars:`,
      championsOfSameStar.map((c) => c.name)
    );

    // Group by champion name
    const groups = championsOfSameStar.reduce((acc, champion) => {
      if (!acc[champion.name]) {
        acc[champion.name] = [];
      }
      acc[champion.name].push(champion);
      return acc;
    }, {} as Record<string, Champion[]>);

    // Check each group for possible upgrades
    for (const [name, group] of Object.entries(groups)) {
      console.log(`Checking ${name} group with ${group.length} champions`);

      if (group.length >= 3) {
        const baseChampion = group[0];
        const multiplier = stars === 1 ? 1.8 : 2.7; // 1★->2★: 1.8x, 2★->3★: 2.7x

        const upgradedChampion = {
          ...baseChampion,
          stars: stars + 1,
          health: Math.round(baseChampion.health * multiplier),
          maxHealth: Math.round(baseChampion.maxHealth * multiplier),
          attackDamage: Math.round(baseChampion.attackDamage * multiplier),
          ability: {
            ...baseChampion.ability,
            damage:
              baseChampion.ability.damage?.map((d) =>
                Math.round(d * multiplier)
              ) ?? [],
            effects: baseChampion.ability.effects?.map((effect) => {
              // Scale all numeric values in the effect string
              return effect.replace(/\d+(\.\d+)?/g, (match) => {
                const num = parseFloat(match);
                return Math.round(num * multiplier).toString();
              });
            }),
          },
          instanceId: crypto.randomUUID(),
        };

        // Remove the three champions used for upgrade
        upgradedBench = upgradedBench.filter(
          (c) => !group.slice(0, 3).some((g) => g.id === c.id)
        );

        upgradedBench.push(upgradedChampion as Champion);
        return upgradeChampions(upgradedBench);
      }
    }
  }

  console.log(
    "Final bench:",
    upgradedBench.map((c) => `${c.name} (${c.stars}★)`)
  );
  return upgradedBench;
}
