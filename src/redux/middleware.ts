import axios from 'axios';
import { Middleware, Store, Dispatch } from 'redux';
import * as types from './types';
import { matchPath, useLocation } from 'react-router-dom';

export const middleWare: Middleware = (store) => (next) => (action) => {
  //action 타입으로 log를 그룹화함
  //다음 미들웨어 혹은 리듀서에게 전달
  console.log('default');
  console.group(action && action.type);
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  next(action);
  console.log('다음 상태', store.getState());
  const path = store.getState().path;
  console.log('path', path);
  const param = {
    count: store.getState().count.count,
  };
  //putCount(param);
  console.log(param);
  console.groupEnd(); //그룹 끝
};

const putCount = async (param: any) => {
  try {
    const response = await axios.put('http://localhost:8080/apis/put/count', param);
    console.log('response', response.data.msg);
  } catch (err) {
    console.log(err);
  }
};
