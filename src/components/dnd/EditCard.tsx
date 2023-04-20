import React, { useState } from 'react';
import { CardProps } from '../../redux/types';
import * as S from '../../styles/styles';

interface EditCardProps {
  anchorEl: any;
  onClose: () => void;
  cards: CardProps;
  onSave: (newCard: CardProps) => void;
}

const EditCard = ({ anchorEl, onClose, cards, onSave }: EditCardProps) => {
  const [contents, setContents] = useState(cards.contents);

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const handleOnSave = () => {
    if (!contents.trim()) return;
    onSave({
      ...cards,
      contents,
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
          value={contents}
          onChange={onContentChange}
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
