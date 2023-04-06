// 리듀서에 적용할 state 정의
import { BoardsProps } from '../types';

export type BoardState = {
  data: BoardsProps;
};

export const initialState: BoardState = {
  data: {
    board_no: 0,
    title: '',
    cards_list: [
      {
        cards_list_no: 0,
        title: '',
        card: [
          {
            card_no: 0,
            contents: '',
          },
        ],
      },
    ],
  },
};
