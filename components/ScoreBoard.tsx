'use client';

interface ScoreBoardProps {
  xWins: number;
  oWins: number;
  draws: number;
  onResetScores: () => void;
}

export default function ScoreBoard({ xWins, oWins, draws, onResetScores }: ScoreBoardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-md mx-auto mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
        Scoreboard
      </h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center">
          <span className="text-3xl mb-1">🐱</span>
          <span className="text-2xl sm:text-3xl font-bold text-orange-500">{xWins}</span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Cats</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl mb-1">🤝</span>
          <span className="text-2xl sm:text-3xl font-bold text-gray-500">{draws}</span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Draws</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl mb-1">🐶</span>
          <span className="text-2xl sm:text-3xl font-bold text-blue-500">{oWins}</span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Dogs</span>
        </div>
      </div>
      <button
        onClick={onResetScores}
        className="mt-4 w-full py-2 px-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
      >
        Reset Scores
      </button>
    </div>
  );
}
