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
    <div className="flex gap-4">
      {/* Player's Board (Blue) */}
      <div className="w-[200px] bg-blue-900/20 p-4 rounded-lg">
        <div className="grid grid-cols-2 gap-2">
          {/* Back row - 5 hexes */}
          <div className="flex flex-col gap-2 mt-10">
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
          <div className="flex flex-col gap-2">
            {/* Front row - 6 hexes */}
            {Array.from({ length: 6 }).map((_, index) => {
              const x = index % 2;
              const y = Math.floor(index / 2) + 3; // Start after back row
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
      <div className="w-[200px] bg-red-900/20 p-4 rounded-lg">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2 ">
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
          <div className="flex flex-col gap-2 mt-10">
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

      {/* Bench Area */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4">Bench</h2>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={`bench-${index}`}
              className="bg-gray-800/50 rounded-lg aspect-square"
              onDrop={(e) => handleDrop(e, -1, index)}
              onDragOver={(e) => e.preventDefault()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
