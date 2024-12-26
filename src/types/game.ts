export interface Ability {
  name: string;
  description: string;
  manaCost: {
    initial: number;
    total: number;
  };
  damage?: number[];
  healing?: number[];
  shield?: number[];
  effects?: string[];
  passive?: string;
  duration?: number;
}

export interface Champion {
  uuid: string;
  id: string;
  name: string;
  cost: number;
  health: number;
  maxHealth: number;
  attackDamage: number;
  attackSpeed: number;
  mana: {
    current: number;
    max: number;
  };
  traits: {
    origin: string[];
    class: string[];
  };
  stars: 1 | 2 | 3;
  ability: Ability;
  experimentBonus?: string;
  instanceId?: string;
}

export interface Player {
  id: string;
  health: number;
  gold: number;
  level: number;
  bench: Champion[];
  board: (Champion | null)[][];
  winStreak: number;
  interest: number;
  baseIncome: number;
}

export interface GameState {
  players: Player[];
  currentRound: number;
  phase: "planning" | "combat";
  shop: Champion[];
  shopLocked: boolean;
}
