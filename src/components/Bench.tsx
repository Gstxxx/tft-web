import React, { useEffect } from "react";
import { Champion as ChampionType } from "../types/game";
import { ChampionCard } from "./champion-button/ChampionCard";
import {
  findUpgradeableTrios,
  getUpgradedStats,
} from "../utils/championUpgrade";

interface BenchProps {
  bench: ChampionType[];
  onUpdateBench: (newBench: ChampionType[]) => void;
}

export function Bench({ bench, onUpdateBench }: BenchProps) {
  const handleSellChampion = (champion: ChampionType) => {
    const newBench = bench.filter((c) => c.instanceId !== champion.instanceId);
    onUpdateBench(newBench);
  };

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
      <h2 className="text-lg font-semibold mb-4">Bench</h2>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {bench.map((champion, index) => (
          <div
            key={champion.instanceId || index}
            className="relative flex-shrink-0"
          >
            <ChampionCard champion={champion} />
            <button
              onClick={() => handleSellChampion(champion)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs"
            >
              X
            </button>
          </div>
        ))}
        {/* Empty bench slots */}
        {Array.from({ length: 9 - bench.length }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="w-40 h-32 bg-gray-700/20 rounded-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
