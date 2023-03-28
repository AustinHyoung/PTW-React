import React, { useState } from 'react';
import { CardsProps } from '../../utils/initData';
import * as S from '../../styles/styles';

interface EditCardProps {
  anchorEl: any;
  onClose: () => void;
  card: CardsProps;
  onSave: (newCard: CardsProps) => void;
}

const EditCard = ({ anchorEl, onClose, card, onSave }: EditCardProps) => {
  const [title, setTitle] = useState(card.title);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOnSave = () => {
    if (!title.trim()) return;
    onSave({
      ...card,
      title,
    });
  };
  return (
    <>
      <S.StyledPopover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={true}
        onClose={onClose}
      >
        <input
          style={{ padding: 5, border: '1px solid lightgray', margin: 5, boxSizing: 'border-box', borderRadius: 6 }}
          value={title}
          onChange={onTitleChange}
          placeholder="Card title"
        />
        <div style={{ display: 'flex', padding: 5, boxSizing: 'border-box', zIndex: 9999 }}>
          <S.CardSaveBtn onClick={handleOnSave}>Save</S.CardSaveBtn>
        </div>
      </S.StyledPopover>
    </>
  );
};

export default EditCard;
