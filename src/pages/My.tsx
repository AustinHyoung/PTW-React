import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/reducer';

const My = () => {
  const data = useSelector((state: RootState) => state.persistedReducer.data);

  return (
    <>
      <div style={{ height: '100%', backgroundColor: 'rgb(241, 242, 246)' }}>
        <div>{data?.nickname}</div>
        <div>{data?.email}</div>
      </div>
    </>
  );
};

export default My;
