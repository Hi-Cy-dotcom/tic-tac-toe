'use client';

import { Player } from '@/lib/game';
import Square from './Square';

interface BoardProps {
  squares: Player[];
  onSquareClick: (index: number) => void;
  winningLine: number[] | null;
}

export default function Board({ squares, onSquareClick, winningLine }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-md mx-auto p-4">
      {squares.map((square, index) => {
        const rowIndex = Math.floor(index / 3);
        const colIndex = index % 3;
        const isWinning = winningLine?.includes(index) || false;
        
        return (
          <Square
            key={index}
            value={square}
            onClick={() => onSquareClick(index)}
            isWinning={isWinning}
            rowIndex={rowIndex}
            colIndex={colIndex}
          />
        );
      })}
    </div>
  );
}
