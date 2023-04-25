import React, { useEffect, useRef, useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import * as S from '../../styles/styles';

interface InputCardProps {
  setOpen: (open: boolean) => void;
  open: boolean;
  content: string;
  onConfirm: (contents: string) => void;
  placeholder: string;
  multiline: boolean;
}

export default function InputCard({ setOpen, open, content, onConfirm, placeholder, ...rest }: InputCardProps) {
  const [contents, setContents] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contents.trim()) return;
    onConfirm(contents);
    setOpen(false);
    setContents('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div style={{ width: '100%' }}>
        <S.BoardEditInput
          ref={inputRef}
          style={{ fontSize: 15, width: '100%' }}
          onChange={handleOnChange}
          placeholder={placeholder}
          value={contents}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', margin: '6px 0', alignItems: 'center' }}>
        <div>
          <S.AddCardsListBtn type="submit">{content}</S.AddCardsListBtn>
        </div>
        <span onClick={() => setOpen(false)} style={{ cursor: 'pointer' }}>
          <Icon path={mdiClose} size={1} color="#ecf0f1" />
        </span>
      </div>
    </form>
  );
}
