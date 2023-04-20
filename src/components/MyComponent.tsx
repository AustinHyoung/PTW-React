import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as S from '../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';
import axios from 'axios';
import { useQuery } from 'react-query';
import { setInfo, InfoProps } from '../redux/action/info-actions';
import { Link, useNavigate } from 'react-router-dom';

interface UpdateProps {
  email: string;
  nickname: string;
}

const MyComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.info.data);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [nickVal, setNickVal] = useState<any>(data?.nickname);
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [sideActive, setSideActive] = useState('default');
  const navigate = useNavigate();

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
  };

  const doDeleteUser = async () => {
    try {
      const response = await axios.delete('http://localhost:8080/apis/delete/user', { data: param });
      if (response.data.code === 200) {
        sessionStorage.clear();
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <S.FlexBox style={{ backgroundColor: 'rgb(241, 242, 246)' }}>
        <S.SetSide>
          <S.SetTitle>내 계정</S.SetTitle>
          <S.MVertical30>
            <S.mySideList onClick={() => setSideActive('default')} navActive={sideActive === 'default'}>
              회원 정보
            </S.mySideList>
            <S.mySideList onClick={() => setSideActive('id')} navActive={sideActive === 'id'}>
              계정
            </S.mySideList>
          </S.MVertical30>
        </S.SetSide>
        <S.VHr />
        {sideActive === 'default' && (
          <S.FlexColBox style={{ flex: 1 }}>
            <S.Flex style={{ padding: 40 }}>
              <div style={{ flex: 1 }}>
                <S.SetTitle>회원정보</S.SetTitle>
                <S.MVertical30>
                  <S.MVertical15 style={{ padding: '15px 0' }}>
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
                  </S.MVertical15>
                  <S.MVertical15>
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
                  </S.MVertical15>
                </S.MVertical30>
              </div>
              <S.FlexEnd style={{ flex: 1, padding: 10 }}>
                <Icon path={mdiAccountCircle} size={9} color="#1e90ff" />
              </S.FlexEnd>
            </S.Flex>
            <S.Hr />
            <div style={{ padding: 50, justifyContent: '', flex: 1 }}>
              <S.FlexEnd>
                <S.UpdateBtn onClick={nicknameUpdate} disabled={!btnIsActive} isActive={btnIsActive}>
                  저장
                </S.UpdateBtn>
              </S.FlexEnd>
            </div>
          </S.FlexColBox>
        )}
        {sideActive === 'id' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', padding: 40 }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>비밀번호</h2>
                <S.FlexEnd style={{ padding: '15px 0' }}>
                  <Link to="/my/change">
                    <S.DangerBtn>비밀번호 변경</S.DangerBtn>
                  </Link>
                </S.FlexEnd>
              </div>
            </div>
            <S.Hr />
            <div style={{ display: 'flex', padding: 40 }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>계정삭제</h2>
                <div
                  style={{
                    border: '1px solid rgba(9,30,66,0.6)',
                    borderRadius: 6,
                    fontSize: 13,
                    color: 'rgba(9,30,66,0.6)',
                    padding: 10,
                    marginTop: 15,
                    lineHeight: 1.7,
                    wordWrap: 'break-word',
                    whiteSpace: 'normal',
                  }}
                >
                  회원 탈퇴일로부터 계정과 닉네임을 포함한 계정 정보(이메일/닉네임)는 7일간 보관(잠김)되며, 7일 경과된 후에는 모든
                  개인 정보는 완전히 삭제되며 더 이상 복구할 수 없게 됩니다. 복구를 원하신다면{' '}
                  <span style={{ color: '#2e86de' }}>jhy2297@naver.com</span> 로 연락 주시기 바랍니다.
                </div>
                <S.FlexEnd style={{ padding: '15px 0' }}>
                  <S.DangerBtn onClick={doDeleteUser}>회원 탈퇴</S.DangerBtn>
                </S.FlexEnd>
              </div>
            </div>
          </div>
        )}
      </S.FlexBox>
    </>
  );
};

export default MyComponent;
