import { useState, useCallback } from "react";
import { Champion as ChampionType } from "../types/game";
import { ChampionCard } from "./champion-button/ChampionCard";

interface ShopProps {
  readonly champions: ChampionType[];
  readonly gold: number;
  readonly level: number;
  readonly onBuyChampion: (champion: ChampionType) => void;
  readonly onRefreshShop: () => void;
  readonly isLocked: boolean;
  readonly onToggleLock: () => void;
  readonly benchLength: number;
}

export function Shop({
  champions,
  gold,
  level,
  onBuyChampion,
  onRefreshShop,
  isLocked,
  onToggleLock,
  benchLength,
}: ShopProps) {
  const PROBABILITIES = {
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

  const getRandomChampionForLevel = useCallback(() => {
    const levelProbs =
      PROBABILITIES[level as keyof typeof PROBABILITIES] || PROBABILITIES[1];

    // Roll for tier
    const roll = Math.random() * 100;
    let cumulative = 0;

    for (let i = 0; i < levelProbs.length; i++) {
      cumulative += levelProbs[i];
      if (roll < cumulative) {
        const tierChamps = champions.filter((c) => c.cost === i + 1);
        if (tierChamps.length === 0) continue;
        const selectedChamp =
          tierChamps[Math.floor(Math.random() * tierChamps.length)];
        return {
          ...selectedChamp,
          id: `${selectedChamp.name.toLowerCase()}-${crypto.randomUUID()}`,
          stars: 1 as const,
        };
      }
    }

    // Fallback to any champion if no tier was selected
    return {
      ...champions[Math.floor(Math.random() * champions.length)],
      id: crypto.randomUUID(),
      stars: 1 as const,
    };
  }, [champions, level]);

  const [shopSlots, setShopSlots] = useState<(ChampionType | null)[]>(() =>
    Array(5)
      .fill(null)
      .map(() => getRandomChampionForLevel())
  );

  const handleBuyChampion = (champion: ChampionType, slotIndex: number) => {
    if (gold >= champion.cost) {
      setShopSlots((prev) => {
        const newSlots = [...prev];
        newSlots[slotIndex] = null;
        return newSlots;
      });
      onBuyChampion(champion);
    }
  };

  return (
    <div className="bg-gray-800/50 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Shop</h2>
        <div className="flex gap-2">
          <button
            onClick={onToggleLock}
            className={`px-4 py-2 rounded-lg ${
              isLocked
                ? "bg-yellow-600 hover:bg-yellow-700"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            {isLocked ? "🔒" : "🔓"}
          </button>
          <button
            onClick={onRefreshShop}
            disabled={gold < 2 || isLocked}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 disabled:cursor-not-allowed rounded-lg"
          >
            Refresh (2 Gold)
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        {shopSlots.map((champion, index) => (
          <div key={index} className="w-40">
            {champion && (
              <button
                onClick={() => handleBuyChampion(champion, index)}
                disabled={gold < champion.cost || benchLength >= 9}
                className="w-full bg-gray-700/50 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
              >
                <ChampionCard
                  champion={champion}
                  isDraggable={false}
                  size="normal"
                />
              </button>
            )}
            {!champion && (
              <div className="w-full h-32 bg-gray-700/20 rounded-lg" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
