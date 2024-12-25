import React from 'react';
import { Champion as ChampionType } from '../types/game';

interface ChampionProps {
  champion: ChampionType;
  isDraggable?: boolean;
}

export function Champion({ champion, isDraggable = true }: ChampionProps) {
  return (
    <div
      draggable={isDraggable}
      onDragStart={(e) => {
        e.dataTransfer.setData('champion', JSON.stringify(champion));
      }}
      className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold cursor-move
        ${champion.cost === 1 ? 'bg-gray-500' :
          champion.cost === 2 ? 'bg-green-500' :
          champion.cost === 3 ? 'bg-blue-500' :
          champion.cost === 4 ? 'bg-purple-500' :
          'bg-yellow-500'}`}
    >
      {champion.name}
    </div>
  );
}