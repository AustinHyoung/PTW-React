import axios from 'axios';
import React, { useRef } from 'react';
import * as S from '../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormValue {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}

const PwChangeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    doPasswordChange(data);
  };

  const doPasswordChange = async (param: FormValue) => {
    try {
      const response = await axios.post('http://localhost:8080/apis/login', param);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch('newPassword');

  return (
    <S.LoginDisplay backgroundColor="">
      <S.DefaultForm onSubmit={handleSubmit(onSubmitHandler)}>
        <h2 style={{ textAlign: 'center' }}>Plan The Work</h2>
        <div>
          <div style={{ lineHeight: 2 }}>현재 비밀번호</div>
          <S.SetInput type="password" {...register('password', { required: true })} />
        </div>
        <div style={{ marginTop: 10 }}>
          <div style={{ lineHeight: 2 }}>새 비밀번호</div>
          <S.SetInput
            type="password"
            placeholder="최소 특수문자, 대 소문자 한자씩"
            {...register('newPassword', { required: true, pattern: /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <div style={{ lineHeight: 2 }}>새 비밀번호 확인</div>
          <S.SetInput
            type="password"
            {...register('newPasswordConfirm', {
              required: true,
              validate: (value) => value === passwordRef.current,
              pattern: /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
            })}
          />
        </div>
        {errors.newPasswordConfirm && errors.newPasswordConfirm.type === 'validate' ? (
          <S.ErrText>비밀번호를 다시 확인해 주세요</S.ErrText>
        ) : null}

        <S.LoginBtn style={{ width: '100%', margin: 0, marginTop: 30 }}>비밀번호 변경</S.LoginBtn>
      </S.DefaultForm>
    </S.LoginDisplay>
  );
};

export default PwChangeForm;
