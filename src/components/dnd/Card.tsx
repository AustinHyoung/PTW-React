import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { CardProps } from '../../redux/types';
import EditCard from './EditCard';
import * as S from '../../styles/styles';
import * as Icons from '../../styles/iconStyles';
import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiPencilOutline } from '@mdi/js';

interface Props {
  cards: CardProps;
  index: number;
  onDelete: (cardNo: number, cardOrder: number) => void;
  onSave: (newCard: CardProps) => void;
}

const Card = ({ cards, onDelete, onSave, index }: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const strCardNo = String(cards.card_no);

  const handleOnDelete = () => onDelete(cards.card_no, cards.card_order);

  const handleOpenEdit = (e: React.MouseEvent<HTMLDivElement>) => setAnchorEl(e.currentTarget);

  const handleCloseEdit = () => setAnchorEl(null);

  const handleOnSave = (newCard: CardProps) => {
    setAnchorEl(null);
    onSave(newCard);
  };
  return (
    <>
      <Draggable draggableId={'Card-' + strCardNo} index={index}>
        {(provided, snapshot) => {
          return (
            <S.DraggableCard
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                ...provided.draggableProps.style,
              }}
            >
              <div style={{ boxSizing: 'border-box', display: 'flex', padding: 5 }}>
                <div style={{ flex: 1, wordBreak: 'break-all', whiteSpace: 'normal' }}>{cards.contents}</div>
                <div>
                  <div style={{ display: 'flex', gap: 3 }}>
                    <S.EditCardBtn onClick={handleOpenEdit}>
                      <Icon path={mdiPencilOutline} size={0.7} />
                    </S.EditCardBtn>
                    <S.DeleteCardBtn onClick={handleOnDelete}>
                      <Icon path={mdiTrashCanOutline} size={0.7} />
                    </S.DeleteCardBtn>
                  </div>
                </div>
              </div>
            </S.DraggableCard>
          );
        }}
      </Draggable>
      {anchorEl && <EditCard anchorEl={anchorEl} onClose={handleCloseEdit} cards={cards} onSave={handleOnSave} />}
    </>
  );
};

export default Card;
