import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query/types/react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from '../styles/styles';

interface FormValue {
  email: string;
  auth_num: number;
  name: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

const RegistComponent = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<FormValue>();

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch('password');

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data);
    doRegist(data);
  };

  const doRegist = async (param: FormValue) => {
    try {
      const response = await axios.post(`${process.env.API_URL}/apis/regist`, param);
      if (response.data.code === 201) {
        navigate('/login');
        return;
      } else if (response.data.code === 401) {
        alert(response.data.msg);
        return;
      } else if (response.data.code === 409) {
        alert(response.data.msg);
        return;
      }

      alert('서버 에러');
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const mailAuth = async () => {
    const emailInput = document.getElementById('email') as HTMLInputElement;

    const param = {
      email: emailInput.value,
    };
    try {
      const response = await axios.post(`${process.env.API_URL}/apis/mail/auth`, param);
      if (response.data.code === 200) {
        alert('인증번호 전송 완료. 해당메일을 확인해 주세요.');
      } else if (response.data.code === 500) {
        alert('인증번호 전송 실패.');
      } else alert('관리자에게 문의해 주세요. jhy2297@naver.com');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.LoginDisplay backgroundColor="#fff">
      <S.LoginBox style={{ height: 550 }} onSubmit={handleSubmit(onSubmitHandler)}>
        <S.IntroTitle>ProTrack</S.IntroTitle>
        <S.IntroSubTitle>회원이 되어 사용해 보세요!</S.IntroSubTitle>

        {/* 이메일 입력란 */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <S.LoginInput
            id="email"
            style={{ flexGrow: 1 }}
            type="text"
            placeholder="이메일"
            {...register('email', {
              required: true,
              pattern: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
            })}
          />
          <div>
            <S.AuthBtn onClick={mailAuth}>인증번호 전송</S.AuthBtn>
          </div>
        </div>
        {errors.email && errors.email.type === 'required' ? <S.ErrText>이메일을 입력해 주세요.</S.ErrText> : null}
        {errors.email && errors.email.type === 'pattern' ? <S.ErrText>이메일 형식에 맞게 작성해 주세요.</S.ErrText> : null}

        {/* 이메일 인증번호 입력란 */}
        <S.LoginInput
          type="text"
          placeholder="인증번호"
          maxLength={6}
          {...register('auth_num', { required: true, pattern: /^[0-9]*$/ })}
        />
        {errors.auth_num && errors.auth_num.type === 'required' ? <S.ErrText>인증번호를 입력해 주세요.</S.ErrText> : null}
        {errors.auth_num && errors.auth_num.type === 'pattern' ? <S.ErrText>숫자만 작성해 주세요.</S.ErrText> : null}

        {/* 이름 입력란 */}
        <S.LoginInput
          type="text"
          placeholder="이름 / 한글,영문"
          {...register('name', { required: true, pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/ })}
        />
        {errors.name && errors.name.type === 'required' ? <S.ErrText>이름을 입력해 주세요.</S.ErrText> : null}
        {errors.name && errors.name.type === 'pattern' ? <S.ErrText>한글과 영문만 작성해 주세요.</S.ErrText> : null}

        {/* 닉네임 입력란 */}
        <S.LoginInput
          type="text"
          placeholder="닉네임 / 한글,영문,숫자"
          {...register('nickname', { required: true, pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/ })}
        />
        {errors.name && errors.name.type === 'required' ? <S.ErrText>닉네임을 입력해 주세요.</S.ErrText> : null}
        {errors.name && errors.name.type === 'pattern' ? <S.ErrText>한글, 영문, 숫자만 작성해 주세요.</S.ErrText> : null}

        {/* 비밀번호 입력란 */}
        <S.LoginInput
          type="password"
          placeholder="비밀번호 / 대문자,특수문자,숫자 최소 한개"
          {...register('password', { required: true, pattern: /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })}
        />
        {errors.name && errors.name.type === 'required' ? <S.ErrText>비밀번호를 입력해 주세요.</S.ErrText> : null}
        {errors.name && errors.name.type === 'pattern' ? <S.ErrText>비밀번호 형식에 맞게 작성해 주세요.</S.ErrText> : null}

        {/* 비밀번호 확인 입력란 */}
        <S.LoginInput
          type="password"
          placeholder="비밀번호 확인"
          {...register('passwordConfirm', {
            required: true,
            validate: (value) => value === passwordRef.current,
            pattern: /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
          })}
        />
        {errors.passwordConfirm && errors.passwordConfirm.type === 'required' ? (
          <S.ErrText>비밀번호를 입력해 주세요</S.ErrText>
        ) : null}
        {errors.passwordConfirm && errors.passwordConfirm.type === 'pattern' ? (
          <S.ErrText>비밀번호 형식에 맞게 작성해 주세요.</S.ErrText>
        ) : null}
        {errors.passwordConfirm && errors.passwordConfirm.type === 'validate' ? (
          <S.ErrText>비밀번호가 맞는지 다시 확인해 주세요.</S.ErrText>
        ) : null}

        <S.LoginBtn>회원가입</S.LoginBtn>
        <S.EctBox>
          <S.EctLink></S.EctLink>
          <Link to="/login">
            <S.EctLink>로그인</S.EctLink>
          </Link>
        </S.EctBox>
      </S.LoginBox>
    </S.LoginDisplay>
  );
};

export default RegistComponent;
