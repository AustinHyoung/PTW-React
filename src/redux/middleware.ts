import axios from 'axios';
import { Middleware, Store, Dispatch } from 'redux';
import * as types from './types';
import { matchPath, useLocation } from 'react-router-dom';
import { initBoard } from './action/actions';

export const middleWare: Middleware = (store) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case types.ON_DRAG_END: {
      const { destination, source, type, draggableId } = action.payload;

      const draggableIdArr = draggableId.split('-');
      const sourceDroppableIdArr = source.droppableId.split('-');
      const destinationDroppableIdArr = destination.droppableId.split('-');

      if (type === 'BOARD') {
        const dragEndBoardParam = {
          board_no: Number(store.getState().test.data.board_no),
          title: store.getState().test.data.title,
          source_list_order: source.index,
          destination_list_order: destination.index,
          cards_list_no: Number(draggableIdArr[1]),
        };

        dragEndBoardAPI(dragEndBoardParam)
          .then((response) => {
            store.dispatch(initBoard(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (type === 'COLUMN') {
        const dragEndColumnParam = {
          board_no: Number(store.getState().test.data.board_no),
          title: store.getState().test.data.title,
          source_card_list_no: Number(sourceDroppableIdArr[1]),
          source_card_order: source.index,
          destination_card_list_no: Number(destinationDroppableIdArr[1]),
          destination_card_order: destination.index,
          card_no: Number(draggableIdArr[1]),
        };

        if (source.droppableId !== destination.droppableId) {
          dragEndColumnAPI(dragEndColumnParam)
            .then((response) => {
              store.dispatch(initBoard(response.data));
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          dragEndSameColumnAPI(dragEndColumnParam)
            .then((response) => {
              store.dispatch(initBoard(response.data));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
      break;
    }
    case types.ADD_COLUMN: {
      const cardsListArray = store.getState().test.data.cards_list.map((list: any) => list.list_order);

      let maxCardsListOrder;
      if (cardsListArray.length === 0) {
        maxCardsListOrder = 0;
      } else {
        maxCardsListOrder = Math.max(...cardsListArray);
      }

      const addColumnParam = {
        board_no: Number(store.getState().test.data.board_no),
        board_title: store.getState().test.data.title,
        title: action.payload,
        list_order: maxCardsListOrder + 1,
      };
      addColumnAPI(addColumnParam)
        .then((response) => {
          console.log('addcolumn response', response);
          store.dispatch(initBoard(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case types.EDIT_COLUMN: {
      const editColumnParam = {
        board_no: Number(store.getState().test.data.board_no),
        cards_list_no: action.payload.cardListNo,
        board_title: store.getState().test.data.title,
        title: action.payload.title,
      };

      editColumnAPI(editColumnParam)
        .then((response) => {
          store.dispatch(initBoard(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case types.DELETE_COLUMN: {
      const deleteColumnParam = {
        board_no: Number(store.getState().test.data.board_no),
        cards_list_no: action.payload.cardListNo,
        board_title: store.getState().test.data.title,
        list_order: action.payload.listOrder,
      };

      deleteColumnAPI(deleteColumnParam)
        .then((response) => {
          console.log(response);
          store.dispatch(initBoard(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case types.ADD_CARD: {
      const column = store.getState().test.data.cards_list.find((col: any) => col.cards_list_no === action.payload.cardsListNo);
      const cardArray = column.card.map((card: any) => card.card_order);

      let maxCardOrder;
      if (cardArray.length === 0) {
        maxCardOrder = 0;
      } else {
        maxCardOrder = Math.max(...cardArray);
      }

      const addCardParam = {
        board_no: Number(store.getState().test.data.board_no),
        card_list_no: action.payload.cardsListNo,
        board_title: store.getState().test.data.title,
        card_order: maxCardOrder + 1,
        contents: action.payload.contents,
      };

      addCardAPI(addCardParam)
        .then((response) => {
          store.dispatch(initBoard(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    // case types.EDIT_CARD: {
    // }
    // case types.DELETE_CARD: {
    // }
    default: {
      next(action);
    }
  }
};

// drag & drop
const dragEndBoardAPI = async (param: any) => {
  return await axios.put('http://localhost:8080/apis/set/position', param);
};

const dragEndColumnAPI = async (param: any) => {
  return await axios.put('http://localhost:8080/apis/set/card/position', param);
};

const dragEndSameColumnAPI = async (param: any) => {
  return await axios.put('http://localhost:8080/apis/set/card/same/position', param);
};

// cardsList
const addColumnAPI = async (param: any) => {
  return await axios.post('http://localhost:8080/apis/add/cardslist', param);
};

const editColumnAPI = async (param: any) => {
  return await axios.put('http://localhost:8080/apis/edit/cardslist', param);
};

const deleteColumnAPI = async (param: any) => {
  return await axios.delete('http://localhost:8080/apis/delete/cardslist', { data: param });
};

// card
const addCardAPI = async (param: any) => {
  return await axios.post('http://localhost:8080/apis/add/card', param);
};

const editCardAPI = async (param: any) => {
  return await axios.put('http://localhost:8080/apis/edit/card', param);
};

const deleteCardAPI = async (param: any) => {
  return await axios.delete('http://localhost:8080/apis/delete/card', { data: param });
};
