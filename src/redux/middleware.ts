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

  const listOrder = store.getState().test.data.cards_list.map((item: any, index: number) => {
    return { list_order: item.list_order, change_list_order: index };
  });

  console.log('list_order', listOrder);

  console.groupEnd(); //그룹 끝

  switch (action.type) {
    case types.INCREASE:
      const param = {
        board_no: Number(action.payload?.id),
        count: store.getState().count.count,
      };

      console.log('param', param);
      putCount(param);

    case types.ON_DRAG_END:
      const dragEndParam = {
        board_no: Number(store.getState().test.data.board_no),
        title: store.getState().test.data.title,
        lists_order: listOrder,
      };
      console.log(dragEndParam);

      dragEndAPI(dragEndParam)
        .then((response) => {
          store.dispatch(initBoard(response.data));
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
  }
};

//var board_no = 0;

const putCount = async (param: any) => {
  try {
    const response = await axios.put('http://localhost:8080/apis/put/count', param);
    console.log('response', response.data.msg);
  } catch (err) {
    console.log(err);
  }
};

const dragEndAPI = async (param: any) => {
  return axios.put('http://localhost:8080/apis/set/position', param);
};
