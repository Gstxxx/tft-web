"use client";
import React from "react";
import { Champion as ChampionType } from "../types/game";
import { ChampionCard } from "./champion-button/ChampionCard";

interface BoardProps {
  board: (ChampionType | null)[][];
  onPlaceChampion: (x: number, y: number, champion: ChampionType) => void;
  level: number;
}

export function Board({ board, onPlaceChampion, level }: BoardProps) {
  const handleDrop = (e: React.DragEvent, x: number, y: number) => {
    e.preventDefault();
    const champion = JSON.parse(e.dataTransfer.getData("champion"));
    onPlaceChampion(x, y, champion);
  };

  return (
    <div className="flex gap-2 sm:gap-4 h-full">
      {/* Player's Board (Blue) */}
      <div className="bg-blue-900/20 p-2 sm:p-4 rounded-lg flex-1">
        <div className="grid grid-cols-2 gap-1 sm:gap-2 h-full">
          {/* Back row - 5 hexes */}
          <div className="flex flex-col gap-1 sm:gap-2 mt-[10%]">
            {Array.from({ length: 5 }).map((_, index) => {
              const x = index % 2;
              const y = Math.floor(index / 2);
              const cell = board[y]?.[x];

              return (
                <div
                  key={`back-${x}-${y}`}
                  className="bg-blue-900/30 rounded-lg aspect-square"
                  onDrop={(e) => handleDrop(e, x, y)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {cell && <ChampionCard champion={cell} size="small" />}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            {/* Front row - 6 hexes */}
            {Array.from({ length: 6 }).map((_, index) => {
              const x = index % 2;
              const y = Math.floor(index / 2) + 3;
              const cell = board[y]?.[x];

              return (
                <div
                  key={`front-${x}-${y}`}
                  className="bg-blue-900/30 rounded-lg aspect-square"
                  onDrop={(e) => handleDrop(e, x, y)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {cell && <ChampionCard champion={cell} size="small" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enemy Board (Red) */}
      <div className="bg-red-900/20 p-2 sm:p-4 rounded-lg flex-1">
        <div className="grid grid-cols-2 gap-1 sm:gap-2 h-full">
          <div className="flex flex-col gap-1 sm:gap-2 ">
            {/* Front row - 6 hexes */}
            {Array.from({ length: 6 }).map((_, index) => {
              const x = index % 2;
              const y = Math.floor(index / 2) + 9; // Start after enemy back row
              const cell = board[y]?.[x];

              return (
                <div
                  key={`enemy-front-${x}-${y}`}
                  className="bg-red-900/30 rounded-lg aspect-square"
                  onDrop={(e) => handleDrop(e, x, y)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {cell && <ChampionCard champion={cell} size="small" />}
                </div>
              );
            })}
          </div>
          {/* Back row - 5 hexes */}
          <div className="flex flex-col gap-1 sm:gap-2 mt-[10%]">
            {Array.from({ length: 5 }).map((_, index) => {
              const x = index % 2;
              const y = Math.floor(index / 2) + 6; // Start after player board
              const cell = board[y]?.[x];

              return (
                <div
                  key={`enemy-back-${x}-${y}`}
                  className="bg-red-900/30 rounded-lg aspect-square"
                  onDrop={(e) => handleDrop(e, x, y)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {cell && <ChampionCard champion={cell} size="small" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
