import { v4 as uuid } from 'uuid';

export const initializeState = () => {
  const newBoard = createBoard();

  return { boards: { [newBoard.id]: newBoard }, currentBoard: newBoard.id, board: newBoard };
};

export interface Column {
  id: string;
  title: string;
  cards: Cards[];
}

export interface Cards {
  id: string;
  title: string;
}

export interface Board {
  id: string;
  title: string;
  columns: Column[];
}

const createBoard = (): Board => ({
  id: uuid(),
  title: 'Fresh Board',
  columns: [
    {
      id: uuid(),
      title: 'Todo',
      cards: [
        {
          id: uuid(),
          title: 'This is a card',
        },
        {
          id: uuid(),
          title: 'This is a card 2',
        },
        {
          id: uuid(),
          title: 'This is a card 3',
        },
      ],
    },
    { id: uuid(), title: 'In Progress', cards: [] },
    { id: uuid(), title: 'Done', cards: [] },
  ],
});

export const createCard = (title: string): Cards => ({
  id: uuid(),
  title,
});

export const createColumn = (title: string): Column => ({
  id: uuid(),
  title,
  cards: [],
});
