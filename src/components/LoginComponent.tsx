import React from "react";

const LoginComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          border: "1px solid red",
          borderRadius: 4,
          backgroundColor: "gray",
          flexDirection: "column",
          padding: 100,
        }}
      >
        <input type="text" />
        <input type="password" />
        <span>이메일 | 비밀번호 찾기</span>
        <span>회원가입</span>
        <button>로그인</button>
      </div>
    </div>
  );
};

export default LoginComponent;
