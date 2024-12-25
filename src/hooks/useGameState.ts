import { useState } from "react";
import { Champion as ChampionType, GameState } from "../types/game";
import { SAMPLE_CHAMPIONS } from "../data/champions";
import { calculateGoldIncome } from "../utils/goldCalculator";
import { createEmptyBoard } from "../utils/boardUtils";
import { upgradeChampions } from "../utils/championUtils";
import {
  INITIAL_GOLD,
  XP_COST,
  PROBABILITIES,
} from "../constants/gameConstants";

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    players: [
      {
        id: "1",
        health: 100,
        gold: INITIAL_GOLD,
        level: 1,
        bench: [],
        board: createEmptyBoard(),
        winStreak: 0,
        interest: 0,
        baseIncome: 5,
      },
    ],
    currentRound: 1,
    phase: "planning",
    shop: SAMPLE_CHAMPIONS,
    shopLocked: false,
  });

  const currentPlayer = gameState.players[0];

  // All the handlers remain the same, just move them here
  const handleBuyChampion = (champion: ChampionType) => {
    if (currentPlayer.gold >= champion.cost && currentPlayer.bench.length < 9) {
      setGameState((prev) => ({
        ...prev,
        players: [
          {
            ...currentPlayer,
            gold: currentPlayer.gold - champion.cost,
            bench: [...currentPlayer.bench, { ...champion }],
          },
        ],
      }));
    }
  };

  const handleRefreshShop = () => {
    if (currentPlayer.gold >= 2 && !gameState.shopLocked) {
      // Get probabilities for current level
      const levelProbs =
        PROBABILITIES[currentPlayer.level as keyof typeof PROBABILITIES] ||
        PROBABILITIES[1];

      // Generate 5 new shop slots based on probabilities
      const newShop = Array(5)
        .fill(null)
        .map(() => {
          // Roll for tier
          const roll = Math.random() * 100;
          let cumulative = 0;
          let selectedTier = 1;

          for (let i = 0; i < levelProbs.length; i++) {
            cumulative += levelProbs[i];
            if (roll < cumulative) {
              selectedTier = i + 1;
              break;
            }
          }

          // Get champions of selected tier
          const tierChampions = SAMPLE_CHAMPIONS.filter(
            (c) => c.cost === selectedTier
          );
          const randomChamp =
            tierChampions[Math.floor(Math.random() * tierChampions.length)];

          return {
            ...randomChamp,
            id: crypto.randomUUID(),
            stars: 1 as const,
          };
        });

      setGameState((prev) => ({
        ...prev,
        shop: newShop,
        players: [
          {
            ...currentPlayer,
            gold: currentPlayer.gold - 2,
          },
        ],
      }));
    }
  };

  const handlePlaceChampion = (
    x: number,
    y: number,
    champion: ChampionType
  ) => {
    const benchIndex = currentPlayer.bench.findIndex(
      (c) => c.id === champion.id
    );
    if (benchIndex === -1) return;

    const newBoard = [...currentPlayer.board];
    newBoard[y] = [...newBoard[y]];
    newBoard[y][x] = champion;

    const newBench = [...currentPlayer.bench];
    newBench.splice(benchIndex, 1);

    setGameState((prev) => ({
      ...prev,
      players: [
        {
          ...currentPlayer,
          board: newBoard,
          bench: newBench,
        },
      ],
    }));
  };

  const handleEndRound = () => {
    setGameState((prev) => {
      const currentPlayer = prev.players[0];
      const newGold = currentPlayer.gold + calculateGoldIncome(currentPlayer);

      return {
        ...prev,
        currentRound: prev.currentRound + 1,
        players: [
          {
            ...currentPlayer,
            gold: newGold,
          },
        ],
      };
    });
  };

  const handleBuyXP = () => {
    if (currentPlayer.gold >= XP_COST) {
      setGameState((prev) => ({
        ...prev,
        players: [
          {
            ...currentPlayer,
            gold: currentPlayer.gold - XP_COST,
            level: currentPlayer.level + 1,
          },
        ],
      }));
    }
  };

  const handleUpdateBench = (newBench: ChampionType[]) => {
    console.log("handleUpdateBench called with:", newBench);
    const upgradedBench = upgradeChampions(newBench);
    console.log("After upgradeChampions:", upgradedBench);

    setGameState((prev) => {
      const newState = {
        ...prev,
        players: [
          {
            ...currentPlayer,
            bench: upgradedBench,
          },
        ],
      };
      console.log("New game state:", newState);
      return newState;
    });
  };

  const handleSellChampion = (champion: ChampionType) => {
    const sellValue = champion.cost * Math.pow(3, champion.stars - 1);

    setGameState((prev) => ({
      ...prev,
      players: [
        {
          ...currentPlayer,
          gold: currentPlayer.gold + sellValue,
          bench: currentPlayer.bench.filter((c) => c.id !== champion.id),
        },
      ],
    }));
  };

  const handleToggleShopLock = () => {
    setGameState((prev) => ({
      ...prev,
      shopLocked: !prev.shopLocked,
    }));
  };

  return {
    gameState,
    currentPlayer,
    handleBuyChampion,
    handleRefreshShop,
    handlePlaceChampion,
    handleEndRound,
    handleBuyXP,
    handleUpdateBench,
    handleSellChampion,
    handleToggleShopLock,
  };
}
