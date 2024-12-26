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
  const handleBuyChampion = (champion: ChampionType, index: number) => {
    if (gold >= champion.cost && benchLength < 9) {
      onBuyChampion(champion, index);
    }
  };

  const shopSlots = champions;

  return (
    <div className="bg-gray-800/50 p-2 sm:p-4 rounded-lg">
      {/* Shop Controls */}
      <div className="flex justify-between items-center mb-2 sm:mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onRefreshShop}
            disabled={gold < 2}
            className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 disabled:cursor-not-allowed rounded-lg text-xs sm:text-sm"
          >
            Refresh (2 Gold)
          </button>
          <button
            onClick={onToggleLock}
            className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm ${
              isLocked
                ? "bg-yellow-600 hover:bg-yellow-700"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            {isLocked ? "Unlock" : "Lock"}
          </button>
        </div>
        <div className="text-xs sm:text-sm text-gray-300">
          Level {level} Shop
        </div>
      </div>

      {/* Shop Grid */}
      <div className="grid grid-cols-5 gap-1 sm:gap-2">
        {shopSlots.map((champion, index) => (
          <div key={index} className="aspect-[4/5]">
            {champion && (
              <button
                onClick={() => handleBuyChampion(champion, index)}
                disabled={gold < champion.cost || benchLength >= 9}
                className="w-full h-full bg-gray-700/50 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
              >
                <ChampionCard
                  champion={champion}
                  isDraggable={false}
                  size="small"
                />
              </button>
            )}
            {!champion && (
              <div className="w-full h-full bg-gray-700/20 rounded-lg" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
