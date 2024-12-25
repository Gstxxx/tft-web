import React, { useEffect } from "react";
import { Champion as ChampionType } from "../types/game";
import { Champion } from "./Champion";
import {
  findUpgradeableTrios,
  getUpgradedStats,
} from "../utils/championUpgrade";

interface BenchProps {
  bench: ChampionType[];
  onUpdateBench: (newBench: ChampionType[]) => void;
}

export function Bench({ bench, onUpdateBench }: BenchProps) {
  useEffect(() => {
    // Check for possible upgrades whenever bench changes
    const upgradeableTrios = findUpgradeableTrios(bench);

    if (upgradeableTrios.length > 0) {
      const newBench = [...bench];

      upgradeableTrios.forEach((trio) => {
        // Remove the three champions used for upgrade
        trio.forEach((champion) => {
          const index = newBench.findIndex(
            (c) => c.instanceId === champion.instanceId
          );
          if (index !== -1) {
            newBench.splice(index, 1);
          }
        });

        // Add the upgraded champion
        const upgradedChampion = getUpgradedStats(
          trio[0],
          (trio[0].stars + 1) as 2 | 3
        );
        newBench.push(upgradedChampion);
      });

      onUpdateBench(newBench);
    }
  }, [bench]);

  return (
    <div className="bg-gray-800/50 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Bench</h2>
      <div className="flex gap-2">
        {bench.map((champion, index) => (
          <div key={champion.instanceId || index} className="relative">
            <Champion champion={champion} />
            <div className="absolute top-0 right-0 text-yellow-400 text-xs">
              {"⭐".repeat(champion.stars)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
