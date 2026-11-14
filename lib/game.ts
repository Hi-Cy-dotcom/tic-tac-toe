export type Player = 'X' | 'O' | null;
export type Board = Player[];

export interface WinnerInfo {
  winner: Player;
  line: number[];
}

export function calculateWinner(board: Board): WinnerInfo | null {
  const lines: number[][] = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }

  return null;
}

export function isDraw(board: Board): boolean {
  return board.every((cell) => cell !== null) && !calculateWinner(board);
}
