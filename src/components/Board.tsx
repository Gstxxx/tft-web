import React from "react";
import { Champion as ChampionType } from "../types/game";
import { ChampionCard } from "./champion-button/ChampionCard";
import { LEVEL_UNIT_LIMITS } from "../constants/gameConstants";

interface BoardProps {
  board: (ChampionType | null)[][];
  onPlaceChampion: (x: number, y: number, champion: ChampionType) => void;
  level: number;
}

export function Board({ board, onPlaceChampion, level }: BoardProps) {
  const handleDrop = (e: React.DragEvent, x: number, y: number) => {
    e.preventDefault();
    const champion = JSON.parse(e.dataTransfer.getData("champion"));

    const currentUnits = board.flat().filter(Boolean).length;
    const maxUnits = LEVEL_UNIT_LIMITS[level as keyof typeof LEVEL_UNIT_LIMITS];

    if (currentUnits >= maxUnits) {
      return;
    }

    onPlaceChampion(x, y, champion);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-400">
        Units: {board.flat().filter(Boolean).length}/
        {LEVEL_UNIT_LIMITS[level as keyof typeof LEVEL_UNIT_LIMITS]}
      </div>
      <div className="grid grid-cols-7 gap-2 bg-blue-900/20 p-4 rounded-lg">
        {board.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className="w-40 h-32 bg-blue-900/30 rounded-lg flex items-center justify-center"
              onDrop={(e) => handleDrop(e, x, y)}
              onDragOver={handleDragOver}
            >
              {cell && <ChampionCard champion={cell} />}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
