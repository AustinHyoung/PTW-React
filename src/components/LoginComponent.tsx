import axios from 'axios';
import React, { useState } from 'react';
import * as S from '../styles/styles';

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
    <S.LoginDisplay backgroundColor="#fff">
      <S.LoginBox>
        <S.IntroTitle>Plan The Work</S.IntroTitle>
        <S.IntroSubTitle>자신의 업무 진행도를 관리해보세요!</S.IntroSubTitle>
        <S.LoginInput type="text" placeholder="이메일" value={email} onChange={changeEmail} />
        <S.LoginInput type="password" placeholder="비밀번호" value={password} onChange={changePassword} />
        <S.LoginBtn onClick={doTestAll}>로그인</S.LoginBtn>
        <S.EctBox>
          <S.EctLink>이메일 / 비밀번호 찾기</S.EctLink>
          <S.EctLink>회원가입</S.EctLink>
        </S.EctBox>
      </S.LoginBox>
    </S.LoginDisplay>
  );
};

export default LoginComponent;
