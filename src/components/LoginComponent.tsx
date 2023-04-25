import axios from 'axios';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQuery } from 'react-query/types/react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from '../styles/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setInfo, InfoProps } from '../redux/action/info-actions';

interface FormValue {
  email: string;
  password: string;
}

const LoginComponent = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();

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
      if (response.data.code === 400) {
        alert(response.data.msg);
        return;
      }
      sessionStorage.setItem('session_id', JSON.stringify(response.data.session));
      const infoParam: InfoProps = {
        email: response.data.email,
        nickname: response.data.nickname,
      };
      dispath(setInfo(infoParam));
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const param2 = {
    email: 'jhy756@gmail.com',
  };

  const test = () => {
    try {
      const response = axios.post('http://localhost:8080/apis/mail/auth', param2);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.LoginDisplay backgroundColor="#fff">
      <S.LoginBox onSubmit={handleSubmit(onSubmitHandler)}>
        <S.IntroTitle>ProTrack</S.IntroTitle>
        <S.IntroSubTitle>자신의 업무 진행도를 관리해보세요!</S.IntroSubTitle>
        <S.LoginInput
          type="text"
          placeholder="이메일"
          {...register('email', {
            required: true,
            pattern: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
          })}
        />

        {errors.email && errors.email.type === 'required' ? <S.ErrText>이메일을 입력해 주세요!</S.ErrText> : null}
        {errors.email && errors.email.type === 'pattern' ? <S.ErrText>이메일 형식에 맞게 작성해 주세요!</S.ErrText> : null}
        <S.LoginInput
          type="password"
          placeholder="비밀번호"
          {...register('password', { required: true, pattern: /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })}
        />

        {errors.password && errors.password.type === 'required' ? <S.ErrText>비밀번호를 입력해 주세요!</S.ErrText> : null}
        {errors.password && errors.password.type === 'pattern' ? (
          <S.ErrText>대문자, 특수문자, 숫자 한 자씩 포함해 주세요!</S.ErrText>
        ) : null}

        <S.LoginBtn>로그인</S.LoginBtn>
        <S.EctBox>
          <Link to="/find">
            <S.EctLink>비밀번호 찾기</S.EctLink>
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
