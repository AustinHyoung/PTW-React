import axios from 'axios';
import React, { useState } from 'react';
import * as S from '../style/styles';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const param = {
    email: email,
    password: password,
  };

  const doLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/apis/login', param);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const doTestAll = async () => {
    try {
      const response = await axios.post('http://localhost:8080/apis/all');
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.LoginDisplay>
      <S.LoginBox>
        <S.IntroTitle>Plan The Work</S.IntroTitle>
        <S.IntroSubTitle>자신의 업무 진행도를 관리해보세요!</S.IntroSubTitle>
        <input type="text" placeholder="이메일" value={email} onChange={changeEmail} style={{ margin: 5, padding: 10, border: '1px solid #535c68', borderRadius: 4 }} />
        <input type="password" placeholder="비밀번호" value={password} onChange={changePassword} style={{ margin: 5, padding: 10, border: '1px solid #535c68', borderRadius: 4 }} />
        <div style={{ margin: 5 }}>
          <button onClick={doTestAll} style={{ width: '100%', padding: 10, borderRadius: 4, backgroundColor: '#2e86de', color: '#fff', cursor: 'pointer' }}>
            로그인
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
          <div style={{ padding: 5, margin: '0px 10px', cursor: 'pointer' }}>이메일 / 비밀번호 찾기</div>
          <div style={{ padding: 5, margin: '0px 10px', cursor: 'pointer' }}>회원가입</div>
        </div>
      </S.LoginBox>
    </S.LoginDisplay>
  );
};

export default LoginComponent;
