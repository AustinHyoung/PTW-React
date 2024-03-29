import axios from 'axios';
import React, { useRef } from 'react';
import * as S from '../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

interface FormValue {
  email: string;
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}

const PwChangeForm = () => {
  const navigate = useNavigate();
  const data = useSelector((state: RootState) => state.info.data);
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
    param.email = data?.email as string;

    try {
      const response = await axios.put(`${process.env.API_URL}/apis/password/change`, param);
      if (response.data.code === 400) {
        alert(response.data.msg);
      }
      navigate('/my');
    } catch (err) {
      console.log(err);
    }
  };

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch('newPassword');

  return (
    <S.LoginDisplay backgroundColor="">
      <S.DefaultForm onSubmit={handleSubmit(onSubmitHandler)}>
        <h2 style={{ textAlign: 'center' }}>ProTrack</h2>
        <div>
          <div style={{ lineHeight: 2 }}>현재 비밀번호</div>
          <S.SetInput type="password" {...register('password', { required: true })} />
        </div>
        {errors.password && errors.password.type === 'required' ? (
          <S.ErrText style={{ marginTop: 5 }}>비밀번호를 입력해 주세요!</S.ErrText>
        ) : null}
        <div style={{ marginTop: 10 }}>
          <div style={{ lineHeight: 2 }}>새 비밀번호</div>
          <S.SetInput
            type="password"
            {...register('newPassword', { required: true, pattern: /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })}
          />
        </div>
        {errors.newPassword && errors.newPassword.type === 'required' ? (
          <S.ErrText style={{ marginTop: 5 }}>새 비밀번호를 입력해 주세요!</S.ErrText>
        ) : null}
        {errors.newPassword && errors.newPassword.type === 'pattern' ? (
          <S.ErrText style={{ marginTop: 5 }}>대문자, 특수문자, 숫자 한 자씩 포함해 주세요!</S.ErrText>
        ) : null}
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
          <S.ErrText style={{ marginTop: 5 }}>비밀번호를 다시 확인해 주세요</S.ErrText>
        ) : null}

        <S.LoginBtn style={{ width: '100%', margin: 0, marginTop: 30 }}>비밀번호 변경</S.LoginBtn>
      </S.DefaultForm>
    </S.LoginDisplay>
  );
};

export default PwChangeForm;
