import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import * as S from '../../styles/styles';
import * as Icons from '../../styles/iconStyles';
import { useNavigate } from 'react-router-dom';
import { mdiAccountCircle, mdiMagnify } from '@mdi/js';

const Header = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [userDropdown, setUserDropdown] = useState(false);
  const dropMenuRef = useRef<HTMLDivElement | null>(null);

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
          <div>23232</div>
          <div>23232</div>
          <div>23232</div>
          <div>23232</div>
          <div>23232</div>
          <div>23232</div>
          <div>23232</div>
          <div>23232</div>
          <div>23232</div>
        </S.DropBox>
      ) : null}
    </>
  );
};

export default Header;
