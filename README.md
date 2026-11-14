# Cats vs Dogs Tic-Tac-Toe

A polished Tic-Tac-Toe game built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Features a fun cats vs dogs theme with smooth animations and dark mode support.

![Screenshot Placeholder](./screenshot.png)

## Features

### Core Gameplay
- **Two-player mode**: Cats (🐱) and Dogs (🐶) alternate turns on a 3×3 board
- **Win detection**: Automatically detects wins across 3 rows, 3 columns, and 2 diagonals
- **Draw detection**: Recognizes when the board is full with no winner
- **Game locking**: Board becomes unclickable once a game ends
- **New Game button**: Resets the board for a fresh round while preserving scores

### Bonus Features
- **Scoreboard**: Tracks Cats wins, Dogs wins, and Draws across multiple rounds
- **Reset Scores**: Separate button to reset the scoreboard to zero
- **Winning highlight**: The three winning cells pulse and glow when someone wins
- **Score persistence**: Scores are saved in localStorage and persist across browser sessions
- **Dark mode**: Toggle between light and dark themes with a single click

### Theme & Design
- **Cats vs Dogs theme**: Replaces X and O with 🐱 and 🐶 emoji icons
- **Smooth animations**: Marks pop in with a scale animation, winning cells pulse
- **Responsive layout**: Works beautifully on mobile and desktop with large tap targets
- **Google Font**: Uses Fredoka font for a playful, friendly appearance
- **Tailwind CSS**: Fully styled with utility classes for a modern look

### Accessibility
- **ARIA labels**: Each square has descriptive labels like "Row 1, Column 2, Cat"
- **Live regions**: Status updates are announced to screen readers
- **Keyboard navigation**: All interactive elements are keyboard accessible
- **High contrast**: Good color contrast in both light and dark modes

## Tech Stack

- **Next.js 14.2.5** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Tailwind CSS 3.4.6** - Styling
- **next/font** - Google Fonts integration (Fredoka)

## Project Structure

```
tictactoe/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main game component with state management
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Board.tsx           # Game board component
│   ├── Square.tsx          # Individual square component
│   ├── ScoreBoard.tsx      # Scoreboard component
│   └── StatusBar.tsx       # Game status display component
├── lib/
│   └── game.ts             # Game logic (calculateWinner, isDraw)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── README.md               # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## How to Play

1. Cats (🐱) always go first
2. Click any empty square to place your mark
3. Players alternate turns
4. First to get three in a row (horizontal, vertical, or diagonal) wins
5. If the board fills up with no winner, it's a draw
6. Click "New Game" to play again (scores are preserved)
7. Click "Reset Scores" to clear the scoreboard
8. Toggle dark mode with the moon/sun button in the top right

## Code Quality

- **Client component**: Game logic uses `"use client"` directive with React hooks
- **Pure functions**: Win-checking logic is separated in `lib/game.ts`
- **Component composition**: UI split into small, reusable components
- **TypeScript**: Full type safety throughout the codebase
- **No unnecessary dependencies**: Only uses core Next.js and React packages
