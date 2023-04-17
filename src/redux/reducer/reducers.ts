import * as utils from '../../utils/initData';
import * as types from '../types';
import * as actions from '../action/actions';
import { BoardState, initialState } from '../state/state';

// const initialState1 = utils.initializeState();

// //action 객체 타입 준비
// type KanbanAction =
//   | ReturnType<typeof actions.addColumn>
//   | ReturnType<typeof actions.editColumn>
//   | ReturnType<typeof actions.deleteColumn>
//   | ReturnType<typeof actions.onDragEnd>
//   | ReturnType<typeof actions.addCard>
//   | ReturnType<typeof actions.deleteCard>
//   | ReturnType<typeof actions.editCard>;

// console.log('변형중', initialState);
// console.log('initaialState reducers print 오픈소스', initialState1.boards);
// console.log('initaialState reducers print 오픈소스', initialState1.boards[initialState1.currentBoard]);

// export const appReducer = (state = initialState1, action: KanbanAction) => {
//   switch (action.type) {
//     case types.ON_DRAG_END: {
//       const { destination, source, type } = action.payload;
//       const board = state.boards[state.currentBoard];

//       // DROP TYPE BOARD
//       if (type === 'BOARD') {
//         const [moved] = board.columns.splice(source.index, 1);
//         board.columns.splice(destination.index, 0, moved);
//       }
//       // DROP TYPE COLUMN
//       else if (type === 'COLUMN') {
//         // DIFFERENT COLUMNS
//         if (source.droppableId !== destination.droppableId) {
//           const sourceCards = board.columns.find((col) => col.id === destination.droppableId).cards;
//           const destinationCards = board.columns.find((col) => col.id === destination.droppableId).cards;

//           const [removed] = sourceCards.splice(source.index, 1);
//           destinationCards.splice(destination.index, 0, removed);
//           return { ...state };
//         }
//         // SAME COLUMN
//         else {
//           const columnCards = board.columns.find((col) => col.id === source.droppableId)?.cards;
//           const [moved] = columnCards.splice(source.index, 1);
//           columnCards.splice(destination.index, 0, moved);
//           return { ...state };
//         }
//       }

//       return { ...state };
//     }
//     case types.ADD_CARD: {
//       const { title, columnId } = action.payload;
//       const board = state.boards[state.currentBoard];
//       const column = board.columns.find((col) => col.id === columnId);
//       const newCard = utils.createCard(title);

//       column.cards.push(newCard);
//       return { ...state };
//     }

//     case types.ADD_COLUMN: {
//       const { title } = action.payload;
//       const board = state.boards[state.currentBoard];
//       const newColumn = utils.createColumn(title);
//       board.columns.push(newColumn);

//       return { ...state };
//     }
//     case types.DELETE_COLUMN: {
//       const { columnId } = action.payload;
//       const board = state.boards[state.currentBoard];
//       const newColumns = board.columns.filter((col) => col.id !== columnId);
//       board.columns = newColumns;

//       return { ...state };
//     }
//     case types.EDIT_COLUMN: {
//       const { columnId, title } = action.payload;
//       const board = state.boards[state.currentBoard];
//       const column = board.columns.find((col) => col.id === columnId);
//       column.title = title;

//       return { ...state };
//     }
//     case types.DELETE_CARD: {
//       const { columnId, cardId } = action.payload;
//       const board = state.boards[state.currentBoard];
//       const column = board.columns.find((col) => col.id === columnId);
//       const newCards = column.cards.filter((card) => card.id !== cardId);
//       column.cards = newCards;
//       return { ...state };
//     }
//     case types.EDIT_CARD: {
//       const { columnId, newCard } = action.payload;
//       const board = state.boards[state.currentBoard];
//       const column = board.columns.find((col) => col.id === columnId);
//       const card = column.cards.find((card) => card.id === newCard.id);

//       Object.assign(card, newCard);

//       return { ...state };
//     }
//     default: {
//       return state;
//     }
//   }
// };

//////////////////////////////////////////////////////////

type KanbansAction =
  | ReturnType<typeof actions.initBoard>
  | ReturnType<typeof actions.addsColumn>
  | ReturnType<typeof actions.editsColumn>
  | ReturnType<typeof actions.deletesColumn>
  | ReturnType<typeof actions.onDragEnds>
  | ReturnType<typeof actions.addsCard>
  | ReturnType<typeof actions.deletesCard>
  | ReturnType<typeof actions.editsCard>;

export const testReducer = (state: BoardState = initialState, action: KanbansAction): BoardState => {
  switch (action.type) {
    case types.INIT_BOARD: {
      return { ...state, data: action.payload };
    }
    case types.ON_DRAG_END: {
      const { destination, source, type } = action.payload;
      console.log('action.payload::', action.payload);
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
        if (source.droppableId !== destination.droppableId) {
          const sourceCards = board.cards_list.find((col) => col.cards_list_no === Number(source.droppableId)).card;
          const destinationCards = board.cards_list.find((col) => col.cards_list_no === Number(destination.droppableId)).card;
          const [removed] = sourceCards.splice(source.index, 1);
          destinationCards.splice(destination.index, 0, removed);
          return { ...state };
        }
        // SAME COLUMN
        else {
          const columnCards = board.cards_list.find((col) => col.cards_list_no === Number(source.droppableId)).card;
          const [moved] = columnCards.splice(source.index, 1);
          columnCards.splice(destination.index, 0, moved);
          return { ...state };
        }
      }

      return { ...state };
    }
    case types.ADD_CARD: {
      const { contents, columnId } = action.payload;
      const board = state.data;
      const column = board.cards_list.find((col) => col.cards_list_no === columnId);
      const newCard = utils.createCards(contents);

      column.card.push(newCard);
      return { ...state };
    }

    case types.ADD_COLUMN: {
      // const board = state.data;
      // const newColumn = utils.createColumns(action.payload);
      // board.cards_list.push(newColumn);

      return { ...state };
    }
    case types.DELETE_COLUMN: {
      const { columnId } = action.payload;
      const board = state.data;
      const newColumns = board.cards_list.filter((col) => col.cards_list_no !== columnId);
      board.cards_list = newColumns;

      return { ...state };
    }
    case types.EDIT_COLUMN: {
      const { columnId, title } = action.payload;
      const board = state.data;
      const column = board.cards_list.find((col) => col.cards_list_no === columnId);
      column.title = title;

      return { ...state };
    }
    case types.DELETE_CARD: {
      const { columnId, cardId } = action.payload;
      const board = state.data;
      const column = board.cards_list.find((col) => col.cards_list_no === columnId);
      const newCards = column.card.filter((card) => card.card_no !== cardId);
      column.card = newCards;
      return { ...state };
    }
    case types.EDIT_CARD: {
      const { columnId, newCard } = action.payload;
      const board = state.data;
      const column = board.cards_list.find((col) => col.cards_list_no === columnId);
      const card = column.card.find((card) => card.card_no === newCard.id);

      Object.assign(card, newCard);

      return { ...state };
    }
    default: {
      return state;
    }
  }
};
