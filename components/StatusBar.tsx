'use client';

import { Player } from '@/lib/game';

interface StatusBarProps {
  currentPlayer: Player;
  winner: Player;
  isDraw: boolean;
}

export default function StatusBar({ currentPlayer, winner, isDraw }: StatusBarProps) {
  let message = '';
  let messageClass = '';

  if (winner) {
    message = winner === 'X' ? '🐱 Cats wins!' : '🐶 Dogs wins!';
    messageClass = winner === 'X' ? 'text-orange-500' : 'text-blue-500';
  } else if (isDraw) {
    message = "It's a draw! 🤝";
    messageClass = 'text-gray-600 dark:text-gray-400';
  } else {
    message = currentPlayer === 'X' ? "🐱 Cat's turn" : "🐶 Dog's turn";
    messageClass = currentPlayer === 'X' ? 'text-orange-500' : 'text-blue-500';
  }

  return (
    <div 
      aria-live="polite"
      className="text-center mb-6 transition-all duration-300"
    >
      <p className={`text-2xl sm:text-3xl font-bold ${messageClass} animate-pulse`}>
        {message}
      </p>
    </div>
  );
}
