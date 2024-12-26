interface TraitsProps {
  traits: {
    origin: string[];
    class: string[];
  };
}

export function ChampionTraits({ traits }: TraitsProps) {
  return (
    <>
      {traits.origin.map((trait) => (
        <div
          key={trait}
          className="bg-blue-500/30 px-1.5 py-0.5 rounded text-[10px] font-medium text-white backdrop-blur-sm"
        >
          {trait}
        </div>
      ))}
      {traits.class.map((trait) => (
        <div
          key={trait}
          className="bg-purple-500/30 px-1.5 py-0.5 rounded text-[10px] font-medium text-white backdrop-blur-sm"
        >
          {trait}
        </div>
      ))}
    </>
  );
}
