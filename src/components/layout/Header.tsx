import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import * as S from '../../styles/styles';
import * as Icons from '../../styles/iconStyles';
import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiAccountCircle, mdiMagnify } from '@mdi/js';
import { useQuery } from 'react-query';

const Header = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [userDropdown, setUserDropdown] = useState(false);
  const dropMenuRef = useRef<HTMLDivElement | null>(null);

  // const fetchUser = () => {
  //   return axios.get('http://localhost:8080/apis/myinfo');
  // };

  // const { data, isLoading, isError } = useQuery('my-info', fetchUser);

  // console.log(data, isLoading, isError);

  //Dropdown 클릭, 공백 클릭
  useEffect(() => {
    const onCheckClickOutside = (e: CustomEvent<MouseEvent>) => {
      if (userDropdown === true && dropMenuRef.current && !dropMenuRef.current.contains(e.target as Node)) {
        setUserDropdown(false);
      }
    };
    document.addEventListener('mousedown', onCheckClickOutside as EventListener);
    return () => {
      document.removeEventListener('mousedown', onCheckClickOutside as EventListener);
    };
  }, [userDropdown, dropMenuRef]);

  const doLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/apis/logout');
      console.log(response);
      sessionStorage.clear();
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <S.HeaderBox>
        <S.LeftContents>
          <li>Plan The Work</li>
        </S.LeftContents>
        <S.RightContents>
          <S.RightList style={{ position: 'relative' }}>
            <div onClick={() => inputRef.current?.focus()}>
              <Icons.SearchIcon path={mdiMagnify} size={1} />
            </div>
            <S.SearchInput ref={inputRef} />
          </S.RightList>
          <S.RightList style={{ padding: 6, cursor: 'pointer' }} onClick={() => setUserDropdown(true)}>
            <Icons.UserIcon path={mdiAccountCircle} size={1.5} />
          </S.RightList>
        </S.RightContents>
      </S.HeaderBox>
      {userDropdown ? (
        <S.DropBox ref={dropMenuRef}>
          <h2 style={{ padding: '0 16px', fontWeight: 400 }}>내 정보</h2>
          <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
            <Icon path={mdiAccountCircle} size={2} color={'#1e90ff'} />
            <div>
              <div>닉네임</div>
              <div>이메일</div>
            </div>
          </div>
          <S.DropMenu>내 정보 관리</S.DropMenu>
          <S.Hr />
          <S.DropMenu onClick={doLogout}>로그아웃</S.DropMenu>
        </S.DropBox>
      ) : null}
    </>
  );
};

export default Header;
