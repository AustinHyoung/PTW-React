import * as types from '../types';
import * as actions from '../action/actions';
import { BoardState, initialState } from '../state/state';

type TrackAction =
  | ReturnType<typeof actions.initBoard>
  | ReturnType<typeof actions.addColumn>
  | ReturnType<typeof actions.editColumn>
  | ReturnType<typeof actions.deleteColumn>
  | ReturnType<typeof actions.onDragEnd>
  | ReturnType<typeof actions.addCard>
  | ReturnType<typeof actions.deleteCard>
  | ReturnType<typeof actions.editCard>;

export const trackReducer = (state: BoardState = initialState, action: TrackAction): BoardState => {
  switch (action.type) {
    case types.INIT_BOARD: {
      return { ...state, data: action.payload };
    }
    case types.ON_DRAG_END: {
      const { destination, source, type } = action.payload;
      const board = state.data;

      // DROP TYPE BOARD
      // source.index = 잡은 아이템의 현재 index
      // moved = 잡은 아이템의 내부 데이터
      // destination.index = 잡은 아이템을 놓은 후의 index
      if (type === 'BOARD') {
        const [moved] = board.cards_list.splice(source.index, 1);
        board.cards_list.splice(destination.index, 0, moved);
      }
      // DROP TYPE COLUMN
      else if (type === 'COLUMN') {
        // DIFFERENT COLUMNS
        const sourceDroppableIdArr = source.droppableId.split('-');
        const destinationDroppableIdArr = destination.droppableId.split('-');

        if (source.droppableId !== destination.droppableId) {
          const sourceCards = board.cards_list.find((col) => col.cards_list_no === Number(sourceDroppableIdArr[1])).card;
          const destinationCards = board.cards_list.find(
            (col) => col.cards_list_no === Number(destinationDroppableIdArr[1]),
          ).card;
          const [removed] = sourceCards.splice(source.index, 1);
          destinationCards.splice(destination.index, 0, removed);
          return { ...state };
        }
        // SAME COLUMN
        else {
          const columnCards = board.cards_list.find((col) => col.cards_list_no === Number(sourceDroppableIdArr[1])).card;
          const [moved] = columnCards.splice(source.index, 1);
          columnCards.splice(destination.index, 0, moved);
          return { ...state };
        }
      }

      return { ...state };
    }

    case types.ADD_COLUMN: {
      return { ...state };
    }
    case types.DELETE_COLUMN: {
      return { ...state };
    }
    case types.EDIT_COLUMN: {
      return { ...state };
    }

    case types.ADD_CARD: {
      return { ...state };
    }
    case types.DELETE_CARD: {
      return { ...state };
    }
    case types.EDIT_CARD: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
