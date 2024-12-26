import { Champion as ChampionType } from "../../types/game";
import { ChampionTraits } from "./ChampionTraits";
import { ChampionTooltip } from "./ChampionTooltip";
import { Coins } from "lucide-react";
import { getChampionColor } from "./utils";

interface ChampionProps {
  readonly champion: ChampionType;
  readonly isDraggable?: boolean;
  readonly size?: "small" | "normal";
  readonly onClick?: () => void;
}

export function ChampionCard({
  champion,
  isDraggable = true,
  onClick,
}: ChampionProps) {
  return (
    <div className="group relative w-full h-full min-w-[4rem]">
      <button
        type="button"
        draggable={isDraggable}
        onClick={onClick}
        onDragStart={(e) => {
          e.dataTransfer.setData("champion", JSON.stringify(champion));
        }}
        className={`
          relative w-full h-full
          rounded-lg border
          flex flex-col items-center justify-center 
          transition-all duration-200
          hover:scale-105 hover:shadow-lg
          overflow-hidden
          aspect-[4/5]
          ${getChampionColor(champion.cost)}
        `}
      >
        {/* Stars */}
        <div className="absolute top-1 right-1 flex gap-0.5 z-10">
          {Array.from({ length: champion.stars }).map((_, i) => (
            <span
              key={i}
              className="text-yellow-400 text-sm"
              style={{ textShadow: "0 0 2px rgba(0,0,0,0.8)" }}
            >
              ★
            </span>
          ))}
        </div>

        {/* Traits */}
        <div
          className={`
            absolute left-1 top-1 
            flex flex-col gap-0.5
            z-10 
            scale-[0.6] sm:scale-75 origin-top-left
            max-w-[150%]
          `}
        >
          <ChampionTraits traits={champion.traits} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <img
          src={`https://rerollcdn.com/characters/Skin/13/${champion.name}.png`}
          alt={champion.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        <div
          className={`
            absolute bottom-0 left-0 right-0 
            px-1 py-0.5
            flex justify-between items-center 
            ${getChampionColor(champion.cost)} 
            backdrop-blur-sm
          `}
        >
          <span
            className={`
              font-medium text-white drop-shadow-md 
              text-[8px] sm:text-[10px]
              truncate max-w-[70%]
            `}
          >
            {champion.name}
          </span>
          <div className="flex items-center gap-0.5">
            <Coins className="w-2 h-2" />
            <span className="font-medium text-yellow-400 text-[8px] sm:text-[10px]">
              {champion.cost}
            </span>
          </div>
        </div>
      </button>

      {/* Only show tooltip on larger screens */}
      <div className="hidden sm:block">
        <ChampionTooltip champion={champion} />
      </div>
    </div>
  );
}
