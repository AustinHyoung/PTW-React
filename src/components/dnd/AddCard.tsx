import React, { useState } from 'react';
import InputCard from './InputCard';
import * as S from '../../styles/styles';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

interface AddCardProps {
  handleOnAddCard: (contents: string) => void;
}

const AddCard = ({ handleOnAddCard }: AddCardProps) => {
  const [open, setOpen] = useState(false);

  const handleOnConfirm = (contents: string) => {
    handleOnAddCard(contents);
  };

  return (
    <div style={{ width: '100%', marginTop: 5 }}>
      {open ? (
        <div>
          <InputCard
            content={'Add Card'}
            setOpen={setOpen}
            open={open}
            onConfirm={handleOnConfirm}
            placeholder={'Add Title'}
            multiline
          />
        </div>
      ) : (
        <div>
          <S.AddCardBtn onClick={() => setOpen(!open)}>
            <Icon path={mdiPlus} size={0.7} style={{ display: 'flex', alignItems: 'center', marginRight: 5 }} />
            <span>카드 추가</span>
          </S.AddCardBtn>
        </div>
      )}
    </div>
  );
};

export default AddCard;
