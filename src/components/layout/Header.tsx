import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import * as S from '../../styles/styles';
import * as Icons from '../../styles/iconStyles';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiAccountCircle, mdiMagnify } from '@mdi/js';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Header = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [userDropdown, setUserDropdown] = useState(false);
  const dropMenuRef = useRef<HTMLDivElement | null>(null);

  // user info
  const data = useSelector((state: RootState) => state.info.data);

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

  const routeMy = () => {
    setUserDropdown(false);
    navigate('/my', { replace: true });
  };

  return (
    <>
      <S.HeaderBox>
        <S.LeftContents>
          <li onClick={() => navigate('/', { replace: true })} style={{ cursor: 'default', fontSize: 24 }}>
            Plan The Work
          </li>
        </S.LeftContents>
        <S.RightContents>
          <S.RightList style={{ position: 'relative' }}>
            <div onClick={() => inputRef.current?.focus()}>
              <Icons.SearchIcon path={mdiMagnify} size={1} />
            </div>
            <S.SearchInput ref={inputRef} />
          </S.RightList>
          <S.RightList style={{ margin: '6px 12px', cursor: 'pointer' }} onClick={() => setUserDropdown(true)}>
            <Icons.UserIcon path={mdiAccountCircle} size={1.5} />
          </S.RightList>
        </S.RightContents>
      </S.HeaderBox>
      {userDropdown ? (
        <S.DropBox ref={dropMenuRef}>
          <S.DropTitle>내 정보</S.DropTitle>
          <S.FlexAlign style={{ padding: 10 }}>
            <Icon path={mdiAccountCircle} size={2} color={'#1e90ff'} style={{ marginRight: 8 }} />
            <div>
              <div>{data?.nickname}</div>
              <div style={{ color: '#B3BAC5' }}>{data?.email}</div>
            </div>
          </S.FlexAlign>
          <S.DropMenu onClick={routeMy}>내 정보 관리</S.DropMenu>
          <S.Hr />
          <S.DropMenu onClick={doLogout}>로그아웃</S.DropMenu>
        </S.DropBox>
      ) : null}
    </>
  );
};

export default Header;
