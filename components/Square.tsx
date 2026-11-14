'use client';

import { Player } from '@/lib/game';

interface SquareProps {
  value: Player;
  onClick: () => void;
  isWinning: boolean;
  rowIndex: number;
  colIndex: number;
}

export default function Square({ value, onClick, isWinning, rowIndex, colIndex }: SquareProps) {
  const getAriaLabel = () => {
    const position = `Row ${rowIndex + 1}, Column ${colIndex + 1}`;
    if (value === 'X') return `${position}, Cat`;
    if (value === 'O') return `${position}, Dog`;
    return `${position}, empty`;
  };

  const getIcon = () => {
    if (value === 'X') return '🐱';
    if (value === 'O') return '🐶';
    return null;
  };

  return (
    <button
      onClick={onClick}
      disabled={value !== null}
      aria-label={getAriaLabel()}
      className={`
        relative w-full aspect-square rounded-xl
        bg-white dark:bg-gray-700
        shadow-md hover:shadow-lg
        transition-all duration-200
        flex items-center justify-center
        text-5xl sm:text-6xl md:text-7xl
        border-2 border-transparent
        ${value === null 
          ? 'hover:border-blue-300 dark:hover:border-blue-600 cursor-pointer' 
          : 'cursor-default'
        }
        ${isWinning 
          ? 'bg-yellow-200 dark:bg-yellow-600 animate-pulse-glow border-yellow-400 dark:border-yellow-500' 
          : ''
        }
        ${value === 'X' ? 'text-orange-500' : ''}
        ${value === 'O' ? 'text-blue-500' : ''}
      `}
    >
      {value && (
        <span className="animate-pop-in select-none">
          {getIcon()}
        </span>
      )}
    </button>
  );
}
