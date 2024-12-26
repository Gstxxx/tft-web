import { Champion as ChampionType } from "../../types/game";
import { ChampionTraits } from "./ChampionTraits";
import { ChampionTooltip } from "./ChampionTooltip";
import { Coins } from "lucide-react";
import { getChampionColor } from "./utils";

interface ChampionProps {
  readonly champion: ChampionType;
  readonly isDraggable?: boolean;
  readonly size?: "small" | "normal";
}

export function ChampionCard({
  champion,
  isDraggable = true,
  size = "normal",
}: ChampionProps) {
  const sizeClasses = size === "small" ? "w-20 h-16" : "w-40 h-32";

  return (
    <div className="group relative">
      <button
        type="button"
        draggable={isDraggable}
        onDragStart={(e) => {
          e.dataTransfer.setData("champion", JSON.stringify(champion));
        }}
        className={`
          relative ${sizeClasses}
          rounded-lg border
          flex flex-col items-center justify-center 
          transition-all duration-200
          hover:scale-105 hover:shadow-lg
          overflow-hidden
          ${getChampionColor(champion.cost)}
        `}
      >
        {/* Traits */}
        <div
          className={`absolute left-1 top-1 flex flex-col gap-1 z-10 ${
            size === "small" ? "scale-75 -translate-x-1" : ""
          }`}
        >
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
          <span
            className={`font-medium text-white drop-shadow-md ${
              size === "small" ? "text-[10px]" : "text-xs"
            }`}
          >
            {champion.name}
          </span>
          <div className="flex items-center gap-0.5">
            <Coins className={size === "small" ? "w-2 h-2" : "w-3 h-3"} />
            <span
              className={`font-medium text-yellow-400 ${
                size === "small" ? "text-[10px]" : "text-xs"
              }`}
            >
              {champion.cost}
            </span>
          </div>
        </div>
      </button>

      <ChampionTooltip champion={champion} />
    </div>
  );
}
