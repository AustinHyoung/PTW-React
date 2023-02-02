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
          borderRadius: 6,
          backgroundColor: '#c8d6e5',
          flexDirection: 'column',
          padding: 20,
          width: '40%',
          height: '40%',
        }}
      >
        <h1 style={{ color: '#576574', textAlign: 'center' }}>Plan The Work</h1>
        <input type="text" value={email} onChange={changeEmail} style={{ margin: 10, padding: 10, border: '1px solid #535c68', borderRadius: 4 }} />
        <input type="password" value={password} onChange={changePassword} style={{ margin: 10, padding: 10, border: '1px solid #535c68', borderRadius: 4 }} />

        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 12 }}>
          <span style={{ color: 'white' }}>이메일 / 비밀번호 찾기</span>
          <span style={{ color: 'white' }}>회원가입</span>
        </div>
        <div>
          <button onClick={doTestAll}>로그인</button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
