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
          justifyContent: 'center',
          padding: 20,
          width: '40%',
          height: '40%',
        }}
      >
        <h1 style={{ color: '#576574', textAlign: 'center' }}>Plan The Work</h1>
        <input type="text" value={email} onChange={changeEmail} style={{ margin: 5, padding: 10, border: '1px solid #535c68', borderRadius: 4 }} />
        <input type="password" value={password} onChange={changePassword} style={{ margin: 5, padding: 10, border: '1px solid #535c68', borderRadius: 4 }} />
        <div style={{ margin: 5 }}>
          <button onClick={doTestAll} style={{ width: '100%', padding: 10, borderRadius: 4, backgroundColor: '#2e86de', color: '#fff', cursor: 'pointer' }}>
            로그인
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
          <div style={{ padding: 5, margin: '0px 10px' }}>이메일 / 비밀번호 찾기</div>
          <div style={{ padding: 5, margin: '0px 10px' }}>회원가입</div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
