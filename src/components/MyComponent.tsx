import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as S from '../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/reducer';
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';
import axios from 'axios';
import { useQuery } from 'react-query';
import { setInfo } from '../reducer/storage';
import { InfoProps } from '../reducer/storage';
import { Link, useNavigate } from 'react-router-dom';

interface UpdateProps {
  email: string;
  nickname: string;
}

const MyComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.persistedReducer.data);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [nickVal, setNickVal] = useState<any>(data?.nickname);
  const [btnIsActive, setBtnIsActive] = useState(false);

  useEffect(() => {}, [nickVal, dispatch, data]);

  const param: UpdateProps = {
    email: data?.email as string,
    nickname: nickVal,
  };

  const nicknameUpdate = async () => {
    try {
      const response = await axios.put('http://localhost:8080/apis/nick/change', param);
      const infoParam: InfoProps = {
        email: response.data.email,
        nickname: response.data.nickname,
      };
      dispatch(setInfo(infoParam));

      alert('닉네임이 변경되었습니다');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const changeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickVal(e.target.value);
    if (e.target.value === data?.nickname) {
      setBtnIsActive(false);
    } else {
      setBtnIsActive(true);
    }
    console.log(nickVal);
    console.log(data?.nickname);
    console.log(btnIsActive);
  };

  const navigate = useNavigate();

  const [sideActive, setSideActive] = useState('default');

  return (
    <>
      <div style={{ height: '100%', backgroundColor: 'rgb(241, 242, 246)', display: 'flex' }}>
        <div style={{ width: 200, padding: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>내 계정</h2>
          <div style={{ margin: '30px 0' }}>
            <S.mySideList onClick={() => setSideActive('default')} navActive={sideActive === 'default'}>
              회원 정보
            </S.mySideList>
            <S.mySideList onClick={() => setSideActive('id')} navActive={sideActive === 'id'}>
              계정
            </S.mySideList>
          </div>
        </div>
        <S.VHr />
        {sideActive === 'default' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', padding: 40 }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>회원정보</h2>
                <div style={{ margin: '30px 0' }}>
                  <div style={{ padding: '15px 0' }}>
                    <div style={{ lineHeight: 2 }}>이메일</div>
                    <div style={{ width: '100%' }}>
                      <S.SetInput
                        style={{
                          border: '1px solid rgba(83,92,104,0.5)',
                          borderRadius: 4,
                          padding: 10,
                          width: '100%',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          fontSize: 16,
                        }}
                        type="text"
                        defaultValue={data?.email}
                        disabled
                      />
                    </div>
                  </div>
                  <div style={{ padding: '15px 0' }}>
                    <div style={{ lineHeight: 2 }}>닉네임</div>
                    <div style={{ width: '100%' }}>
                      <S.SetInput
                        ref={inputRef}
                        style={{
                          border: '1px solid rgba(83,92,104,0.5)',
                          borderRadius: 4,
                          padding: 10,
                          width: '100%',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          fontSize: 16,
                        }}
                        type="text"
                        value={nickVal}
                        onChange={changeNickname}
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
              <S.FEnd>
                <S.UpdateBtn onClick={nicknameUpdate} disabled={!btnIsActive} isActive={btnIsActive}>
                  저장
                </S.UpdateBtn>
              </S.FEnd>
            </div>
          </div>
        )}
        {sideActive === 'id' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', padding: 40 }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>비밀번호</h2>
                <S.FEnd style={{ padding: '15px 0' }}>
                  <Link to="/my/change">
                    <S.DeleteBtn>비밀번호 변경</S.DeleteBtn>
                  </Link>
                </S.FEnd>
              </div>
            </div>
            <S.Hr />
            <div style={{ display: 'flex', padding: 40 }}>
              <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>계정삭제</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyComponent;
