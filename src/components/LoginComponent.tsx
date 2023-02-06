import axios from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as S from '../styles/styles';

interface FormValue {
  email: string;
  password: string;
}

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    doLogin(data);
  };

  const doLogin = async (param: FormValue) => {
    try {
      const response = await axios.post('http://localhost:8080/apis/login', param);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.LoginDisplay backgroundColor="#fff">
      <S.LoginBox onSubmit={handleSubmit(onSubmitHandler)}>
        <S.IntroTitle>Plan The Work</S.IntroTitle>
        <S.IntroSubTitle>자신의 업무 진행도를 관리해보세요!</S.IntroSubTitle>

        <S.LoginInput type="text" placeholder="이메일" {...register('email', { required: true, pattern: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/ })} />

        {errors.email && errors.email.type === 'required' ? <S.ErrText>이메일을 입력해 주세요!</S.ErrText> : null}
        {errors.email && errors.email.type === 'pattern' ? <S.ErrText>이메일 형식에 맞게 작성해 주세요!</S.ErrText> : null}
        <S.LoginInput type="password" placeholder="비밀번호" {...register('password', { required: true, pattern: /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })} />

        {errors.password && errors.password.type === 'required' ? <S.ErrText>비밀번호를 입력해 주세요!</S.ErrText> : null}
        {errors.password && errors.password.type === 'pattern' ? <S.ErrText>대문자, 숫자, 특수문자 각각 한 개씩 사용해 주세요!</S.ErrText> : null}

        <S.LoginBtn>로그인</S.LoginBtn>
        <S.EctBox>
          <Link to="/find">
            <S.EctLink>이메일 / 비밀번호 찾기</S.EctLink>
          </Link>
          <Link to="/regist">
            <S.EctLink>회원가입</S.EctLink>
          </Link>
        </S.EctBox>
      </S.LoginBox>
    </S.LoginDisplay>
  );
};

export default LoginComponent;
