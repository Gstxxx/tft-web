import { Champion } from "../../types/game";

interface TooltipProps {
  champion: Champion;
}

export function ChampionTooltip({ champion }: TooltipProps) {
  return (
    <div
      className="absolute invisible group-hover:visible 
                top-full mt-2 left-1/2 -translate-x-1/2
                bg-gray-900/95 p-3 rounded-lg 
                text-white text-xs
                whitespace-pre-wrap w-56 z-10
                shadow-xl border border-gray-700"
    >
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div>
          <span className="text-gray-400">Health: </span>
          {champion.health}/{champion.maxHealth}
        </div>
        <div>
          <span className="text-gray-400">Attack: </span>
          {champion.attackDamage}
        </div>
        <div>
          <span className="text-gray-400">Attack Speed: </span>
          {champion.attackSpeed}
        </div>
        <div>
          <span className="text-gray-400">Mana: </span>
          {champion.mana.current}/{champion.mana.max}
        </div>
      </div>

      <div className="font-bold text-sm mb-2">{champion.ability.name}</div>
      <div className="text-gray-300">{champion.ability.description}</div>

      {champion.experimentBonus && (
        <div className="mt-2 text-yellow-400">{champion.experimentBonus}</div>
      )}
    </div>
  );
}