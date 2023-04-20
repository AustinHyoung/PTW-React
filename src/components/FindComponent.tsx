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
  const [findPw, setFindPw] = useState('');
  const [findChk, setFindChk] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    doPasswordFind(data);
  };

  const doPasswordFind = async (param: FormValue) => {
    try {
      const response = await axios.post('http://localhost:8080/apis/mail/auth', param);
      if (response.data.code === 204) {
        setFindPw(response.data.msg);
        return;
      }
      setFindPw(response.data.password);
      setFindChk(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.LoginDisplay backgroundColor="#fff">
      <S.LoginBox style={{ height: 350 }} onSubmit={handleSubmit(onSubmitHandler)}>
        <S.IntroTitle>ProTrack</S.IntroTitle>
        <S.IntroSubTitle>비밀번호 찾기</S.IntroSubTitle>

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
        {findChk ? (
          <S.ErrText style={{ textAlign: 'center' }}>비밀번호는 {findPw} 입니다.</S.ErrText>
        ) : (
          <S.ErrText style={{ textAlign: 'center' }}>{findPw}</S.ErrText>
        )}
        <S.LoginBtn>비밀번호 찾기</S.LoginBtn>
        <S.EctBox>
          <Link to="/regist">
            <S.EctLink>회원가입</S.EctLink>
          </Link>
          <Link to="/login">
            <S.EctLink>로그인</S.EctLink>
          </Link>
        </S.EctBox>
      </S.LoginBox>
    </S.LoginDisplay>
  );
};

export default FindComponent;
