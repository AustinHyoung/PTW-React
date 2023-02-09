import axios from 'axios';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query/types/react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from '../styles/styles';

interface FormValue {
  email: string;
  name: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

const FindComponent = () => {
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
    doRegist(data);
  };

  const doRegist = async (param: FormValue) => {
    try {
      const response = await axios.post('http://localhost:8080/apis/regist', param);
      console.log(response);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.LoginDisplay backgroundColor="#fff">
      <S.LoginBox style={{ height: 550 }} onSubmit={handleSubmit(onSubmitHandler)}>
        <S.IntroTitle>Plan The Work</S.IntroTitle>
        <S.IntroSubTitle>회원이 되어 사용해 보세요!</S.IntroSubTitle>

        <S.LoginInput type="text" placeholder="이메일" {...register('email', { required: true, pattern: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/ })} />
        <S.LoginInput type="text" placeholder="이름" {...register('name', { required: true, pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/ })} />
        <S.ErrText style={{ color: 'black' }}>문자만 가능해요!</S.ErrText>
        <S.LoginInput type="text" placeholder="닉네임" {...register('nickname', { required: true, pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/ })} />
        <S.ErrText style={{ color: 'black' }}>문자와 숫자만 가능해요!</S.ErrText>
        <S.LoginInput type="password" placeholder="비밀번호" {...register('password', { required: true, pattern: /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })} />
        <S.ErrText style={{ color: 'black' }}>최소 대문자, 특수문자, 숫자 한 자씩 포함해 주세요</S.ErrText>
        <S.LoginInput
          type="password"
          placeholder="비밀번호 확인"
          {...register('passwordConfirm', { required: true, validate: (value) => value === passwordRef.current, pattern: /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })}
        />
        {errors.passwordConfirm && errors.passwordConfirm.type === 'validate' ? <S.ErrText>비밀번호를 다시 확인해 주세요</S.ErrText> : null}

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

export default FindComponent;
