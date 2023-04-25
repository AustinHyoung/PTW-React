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
        <div style={{ textAlign: 'center', marginBottom: 10, fontSize: 16 }}>카드 내용 변경</div>
        <S.BoardEditInput value={contents} onChange={onContentChange} placeholder="카드 내용" />
        <S.CardSaveBtnBox>
          <S.CardSaveBtn onClick={handleOnSave}>저장</S.CardSaveBtn>
        </S.CardSaveBtnBox>
      </S.StyledPopover>
    </>
  );
};

export default EditCard;
