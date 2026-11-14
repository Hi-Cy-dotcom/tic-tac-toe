'use client';

import { useState, useEffect } from 'react';
import { Player, Board as BoardType, calculateWinner, isDraw } from '@/lib/game';
import Board from '@/components/Board';
import ScoreBoard from '@/components/ScoreBoard';
import StatusBar from '@/components/StatusBar';

export default function Home() {
  const [board, setBoard] = useState<BoardType>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ xWins: 0, oWins: 0, draws: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load scores from localStorage on mount (client-side only)
  useEffect(() => {
    const savedScores = localStorage.getItem('tictactoe-scores');
    if (savedScores) {
      try {
        setScores(JSON.parse(savedScores));
      } catch (e) {
        console.error('Failed to parse saved scores:', e);
      }
    }

    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('tictactoe-darkmode');
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Save scores to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tictactoe-scores', JSON.stringify(scores));
  }, [scores]);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('tictactoe-darkmode', String(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const winnerInfo = calculateWinner(board);
  const winner = winnerInfo?.winner || null;
  const draw = isDraw(board);
  const gameActive = !winner && !draw;

  const handleClick = (index: number) => {
    if (board[index] || !gameActive) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    // Check for winner/draw after move
    const newWinnerInfo = calculateWinner(newBoard);
    if (newWinnerInfo) {
      setScores(prev => ({
        ...prev,
        [newWinnerInfo.winner === 'X' ? 'xWins' : 'oWins']: prev[newWinnerInfo.winner === 'X' ? 'xWins' : 'oWins'] + 1
      }));
    } else if (isDraw(newBoard)) {
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
    }
  };

  const handleNewGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const handleResetScores = () => {
    setScores({ xWins: 0, oWins: 0, draws: 0 });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className="min-h-screen p-4 sm:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Header with dark mode toggle */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">
            🐱 vs 🐶
          </h1>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Scoreboard on the left */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <ScoreBoard
              xWins={scores.xWins}
              oWins={scores.oWins}
              draws={scores.draws}
              onResetScores={handleResetScores}
            />
          </div>

          {/* Game area on the right */}
          <div className="flex-1 w-full">
            <StatusBar
              currentPlayer={xIsNext ? 'X' : 'O'}
              winner={winner}
              isDraw={draw}
            />

            <Board
              squares={board}
              onSquareClick={handleClick}
              winningLine={winnerInfo?.line || null}
            />

            <button
              onClick={handleNewGame}
              className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg sm:text-xl"
            >
              New Game
            </button>

            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              Cats (🐱) go first • Click to play
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
