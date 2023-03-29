import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { RootState } from '../reducer';

export const initializeState = () => {
  const newBoard = createBoard();

  return { boards: { [newBoard.id]: newBoard }, currentBoard: newBoard.id, board: newBoard };
};

export interface ColumnProps {
  id: string;
  title: string;
  cards: CardsProps[];
}

export interface CardsProps {
  id: string;
  title: string;
}

export interface BoardProps {
  id: string;
  title: string;
  columns: ColumnProps[];
}

const createBoard = (): BoardProps => ({
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

export const createCard = (title: string): CardsProps => ({
  id: uuid(),
  title,
});

export const createColumn = (title: string): ColumnProps => ({
  id: uuid(),
  title,
  cards: [],
});

export const getBoardById = (state: RootState, boardId: string): BoardProps | undefined => {
  return state.app.boards[boardId];
};
