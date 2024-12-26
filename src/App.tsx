import React from "react";
import { Board } from "./components/Board";
import { Shop } from "./components/Shop";
import { ChampionCard } from "./components/champion-button/ChampionCard";
import { Bench } from "./components/Bench";
import { useGameState } from "./hooks/useGameState";
import { XP_COST } from "./constants/gameConstants";

function App() {
  const {
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
  } = useGameState();

  React.useEffect(() => {
    const originalLog = console.log;
    console.log = function (...args) {
      // First, call original console.log
      originalLog.apply(console, args);

      // Format objects for display
      const formattedArgs = args.map((arg) => {
        if (typeof arg === "object" && arg !== null) {
          return JSON.stringify(arg, null, 2);
        }
        return String(arg);
      });

      const logScreen = document.getElementById("logScreen");
      if (logScreen) {
        const logEntry = document.createElement("div");
        logEntry.textContent = formattedArgs.join(" ");
        // Add some styling to make it more readable
        logEntry.style.whiteSpace = "pre-wrap";
        logEntry.style.marginBottom = "4px";
        logScreen.appendChild(logEntry);
        logScreen.scrollTop = logScreen.scrollHeight;
      }
    };

    return () => {
      console.log = originalLog;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Teamfight Tactics</h1>
            <p className="text-gray-400">
              Round {gameState.currentRound} - {gameState.phase}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-red-900/50 rounded-lg">
              ❤️ {currentPlayer.health}
            </div>
            <div className="px-4 py-2 bg-blue-900/50 rounded-lg">
              ⭐ Level {currentPlayer.level}
            </div>
            <div className="px-4 py-2 bg-yellow-900/50 rounded-lg">
              🪙 {currentPlayer.gold}
            </div>
            <button
              onClick={handleBuyXP}
              disabled={currentPlayer.gold < XP_COST}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:cursor-not-allowed rounded-lg"
            >
              Buy XP (4 Gold)
            </button>
            <button
              onClick={handleEndRound}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
            >
              End Round
            </button>
          </div>
        </div>

        <Board
          board={currentPlayer.board}
          onPlaceChampion={handlePlaceChampion}
          level={currentPlayer.level}
        />

        <div className="bg-gray-800/50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Bench</h2>
          <div className="flex gap-2">
            {currentPlayer.bench.map((champion, index) => (
              <div key={index} className="relative">
                <ChampionCard champion={champion} />
                <button
                  onClick={() => handleSellChampion(champion)}
                  className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        <Shop
          key={gameState.shop.map((c) => c.id).join(",")}
          champions={gameState.shop}
          gold={currentPlayer.gold}
          level={currentPlayer.level}
          onBuyChampion={handleBuyChampion}
          onRefreshShop={handleRefreshShop}
          isLocked={gameState.shopLocked}
          onToggleLock={handleToggleShopLock}
          benchLength={currentPlayer.bench.length}
        />

        <Bench bench={currentPlayer.bench} onUpdateBench={handleUpdateBench} />
      </div>
      <div className="bg-gray-800/50 p-4 rounded-lg mt-4">
        <h2 className="text-lg font-semibold mb-2">Log Screen</h2>
        <div
          id="logScreen"
          className="h-40 overflow-y-auto bg-gray-900 p-2 rounded-lg text-white text-sm"
        ></div>
      </div>
    </div>
  );
}

export default App;
