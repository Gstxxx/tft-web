"use client";
import { Board } from "./components/Board";
import { Shop } from "./components/Shop";
import { ChampionCard } from "./components/champion-button/ChampionCard";
import { useGameState } from "./hooks/useGameState";
import { XP_COST } from "./constants/gameConstants";

function App() {
  const {
    gameState,
    currentPlayer,
    handleBuyChampion,
    handleRefreshShop,
    handlePlaceChampion,
    handleBuyXP,
    handleSellChampion,
    handleToggleShopLock,
  } = useGameState();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Stats Bar */}
        <div className="flex gap-4 text-sm">
          <div>Life: {currentPlayer.health}</div>
          <div>Gold: {currentPlayer.gold}</div>
          <div>Level: {currentPlayer.level}</div>
          <div>
            Streak:{" "}
            {currentPlayer.winStreak > 0
              ? `win ${currentPlayer.winStreak}`
              : "none"}
          </div>
        </div>

        {/* Main Game Area */}
        <div className="grid grid-cols-[2fr,1fr] gap-8">
          {/* Left Side - Board */}
          <div className="space-y-4">
            <Board
              board={currentPlayer.board}
              onPlaceChampion={handlePlaceChampion}
              level={currentPlayer.level}
            />
          </div>

          {/* Right Side - Bench and Shop */}
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Bench</h2>
              <div className="grid grid-cols-3 gap-2">
                {currentPlayer.bench.map((champion, index) => (
                  <div key={index} className="relative">
                    <ChampionCard champion={champion} size="small" />
                    <button
                      onClick={() => handleSellChampion(champion)}
                      className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    >
                      X
                    </button>
                  </div>
                ))}
                {/* Empty bench slots */}
                {Array.from({ length: 9 - currentPlayer.bench.length }).map(
                  (_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="bg-gray-700/20 rounded-lg aspect-square"
                    />
                  )
                )}
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <button
                onClick={handleBuyXP}
                disabled={currentPlayer.gold < XP_COST}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-900 disabled:cursor-not-allowed rounded-lg"
              >
                Buy XP ({XP_COST} Gold)
              </button>
              <button
                onClick={handleRefreshShop}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                Refresh
              </button>
            </div>

            <Shop
              champions={gameState.shop}
              gold={currentPlayer.gold}
              level={currentPlayer.level}
              onBuyChampion={handleBuyChampion}
              onRefreshShop={handleRefreshShop}
              isLocked={gameState.shopLocked}
              onToggleLock={handleToggleShopLock}
              benchLength={currentPlayer.bench.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
