"use client";
import { Board } from "./components/Board";
import { Shop } from "./components/Shop";
import { ChampionCard } from "./components/champion-button/ChampionCard";
import { useGameState } from "./hooks/useGameState";
import { XP_COST } from "./constants/gameConstants";
import { Bench } from "./components/Bench";

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
    handleUpdateBench,
  } = useGameState();

  return (
    <div className="h-screen bg-gray-900 text-white p-2 sm:p-4 lg:p-6 flex flex-col">
      <div className="h-full max-w-7xl mx-auto space-y-2 sm:space-y-4">
        {/* Stats Bar */}
        <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm bg-gray-800/50 p-2 rounded-lg">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 h-[calc(100%-3rem)]">
          {/* Left Side - Board */}
          <div className="h-full">
            <Board
              board={currentPlayer.board}
              onPlaceChampion={handlePlaceChampion}
              level={currentPlayer.level}
            />
          </div>

          {/* Right Side - Shop and Bench */}
          <div className="flex flex-col gap-2 sm:gap-4 h-full">
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
            <div className="bg-gray-800/50 p-2 sm:p-4 rounded-lg flex-1">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-base sm:text-lg font-semibold">Bench</h2>
                <button
                  onClick={handleBuyXP}
                  disabled={currentPlayer.gold < XP_COST}
                  className="px-2 sm:px-4 py-1 sm:py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-900 disabled:cursor-not-allowed rounded-lg text-xs"
                >
                  Buy XP ({XP_COST} Gold)
                </button>
              </div>
              <div className="grid grid-cols-3 gap-1 h-[calc(100%-2.5rem)]">
                {currentPlayer.bench.map((champion, index) => (
                  <div key={index} className="relative aspect-square">
                    <ChampionCard champion={champion} size="small" />
                    <button
                      onClick={() => handleSellChampion(champion)}
                      className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
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
            <Bench
              bench={currentPlayer.bench}
              onUpdateBench={handleUpdateBench}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
