import React from 'react';
import * as S from '../styles/styles';
import { useSelector } from 'react-redux';
import { RootState } from 'src/reducer';
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';

const MyComponent = () => {
  const data = useSelector((state: RootState) => state.persistedReducer.data);
  return (
    <>
      <div style={{ height: '100%', backgroundColor: 'rgb(241, 242, 246)', display: 'flex' }}>
        <div style={{ width: 200, padding: 50 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>내 계정</h2>
          <div style={{ margin: '30px 0' }}>
            <div style={{ padding: 10, cursor: 'pointer', margin: '5px 0', lineHeight: 2 }}>회원 정보</div>
            <div style={{ padding: 10, cursor: 'pointer', margin: '5px 0', lineHeight: 2 }}>계정</div>
          </div>
        </div>
        <S.VHr />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', padding: 50 }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>회원정보</h2>
              <div style={{ margin: '30px 0' }}>
                <div style={{ padding: '15px 0' }}>
                  <div style={{ lineHeight: 2 }}>이메일</div>
                  <div style={{ width: '100%' }}>
                    <input
                      style={{
                        border: '1px solid rgba(83,92,104,0.5)',
                        borderRadius: 4,
                        padding: 10,
                        width: '100%',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>
                <div style={{ padding: '15px 0' }}>
                  <div style={{ lineHeight: 2 }}>닉네임</div>
                  <div style={{ width: '100%' }}>
                    <input
                      style={{
                        border: '1px solid rgba(83,92,104,0.5)',
                        borderRadius: 4,
                        padding: 10,
                        width: '100%',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: 10 }}>
              <Icon path={mdiAccountCircle} size={9} color="#1e90ff" />
            </div>
          </div>
          <S.Hr />
          <div style={{ padding: 50, justifyContent: 'flex-end', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                style={{
                  padding: '10px 30px',
                  backgroundColor: '#1e90ff',
                  borderRadius: 6,
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
