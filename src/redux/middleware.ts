import axios from 'axios';
import { Middleware, Store, Dispatch } from 'redux';
import * as types from './types';
import { matchPath, useLocation } from 'react-router-dom';
import { initBoard } from './action/actions';

export const middleWare: Middleware = (store) => (next) => (action) => {
  //action 타입으로 log를 그룹화함
  //다음 미들웨어 혹은 리듀서에게 전달
  console.log('default');
  console.group(action && action.type);
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  next(action);
  console.log('다음 상태', store.getState().test.data);

  console.groupEnd(); //그룹 끝

  switch (action.type) {
    case types.ON_DRAG_END: {
      const { destination, source, type, draggableId } = action.payload;
      console.log(destination, source, type, draggableId);

      if (type === 'BOARD') {
        const listOrder = store.getState().test.data.cards_list.map((item: any, index: number) => {
          return { list_order: item.list_order, change_list_order: index };
        });

        const dragEndBoardParam = {
          board_no: Number(store.getState().test.data.board_no),
          title: store.getState().test.data.title,
          lists_order: listOrder,
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
          source_card_list_no: Number(source.droppableId),
          source_card_order: source.index,
          destination_card_list_no: Number(destination.droppableId),
          destination_card_order: destination.index,
          card_no: Number(draggableId),
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
      const maxCardsListOrder = Math.max(...cardsListArray);
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
    default: {
      next(action);
    }
  }
};

const dragEndBoardAPI = async (param: any) => {
  return await axios.put('http://localhost:8080/apis/set/position', param);
};

const dragEndColumnAPI = async (param: any) => {
  return await axios.put('http://localhost:8080/apis/set/card/position', param);
};

const dragEndSameColumnAPI = async (param: any) => {
  return await axios.put('http://localhost:8080/apis/set/card/same/position', param);
};

const addColumnAPI = async (param: any) => {
  return await axios.post('http://localhost:8080/apis/add/cardslist', param);
};
