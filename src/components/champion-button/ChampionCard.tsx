import { Champion as ChampionType } from "../../types/game";
import { ChampionTraits } from "./ChampionTraits";
import { ChampionTooltip } from "./ChampionTooltip";
import { Coins } from "lucide-react";
import { getChampionColor } from "./utils";

interface ChampionProps {
  readonly champion: ChampionType;
  readonly isDraggable?: boolean;
}

export function ChampionCard({ champion, isDraggable = true }: ChampionProps) {
  return (
    <div className="group relative">
      <button
        type="button"
        draggable={isDraggable}
        onDragStart={(e) => {
          e.dataTransfer.setData("champion", JSON.stringify(champion));
        }}
        className={`
          relative w-40 h-32 
          rounded-lg border
          flex flex-col items-center justify-center 
          transition-all duration-200
          hover:scale-105 hover:shadow-lg
          overflow-hidden
          ${getChampionColor(champion.cost)}
        `}
      >
        {/* Traits */}
        <div className="absolute left-1 top-1 flex flex-col gap-1 z-10">
          <ChampionTraits traits={champion.traits} />
        </div>

        {/* Champion Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <img
          src={`https://rerollcdn.com/characters/Skin/13/${champion.name}.png`}
          alt={champion.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Bottom Info Bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 px-2 py-1 flex justify-between items-center ${getChampionColor(
            champion.cost
          )} backdrop-blur-sm`}
        >
          <span className="text-xs font-medium text-white drop-shadow-md">
            {champion.name}
          </span>
          <div className="flex items-center gap-0.5">
            <Coins className="w-3 h-3 text-yellow-400" />
            <span className="text-xs font-medium text-yellow-400">
              {champion.cost}
            </span>
          </div>
        </div>
      </button>

      <ChampionTooltip champion={champion} />
    </div>
  );
}
