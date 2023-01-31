import axios from 'axios';
import React, { useState } from 'react';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const doLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/apis/login');
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          border: '1px solid red',
          borderRadius: 4,
          backgroundColor: 'gray',
          flexDirection: 'column',
          padding: 100,
        }}
      >
        <input type="text" value={email} onChange={changeEmail} />
        <input type="password" value={password} onChange={changePassword} />
        <span style={{ color: 'red' }}>이메일 | 비밀번호 찾기</span>
        <span style={{ color: 'red' }}>회원가입</span>
        <button onClick={doLogin}>로그인</button>
      </div>
    </div>
  );
};

export default LoginComponent;
