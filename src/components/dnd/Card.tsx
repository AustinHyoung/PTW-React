import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { CardsProps } from '../../redux/types';
import EditCard from './EditCard';

interface CardProps {
  card: CardsProps;
  index: number;
  onDelete: (cardId: string) => void;
  onSave: (newCard: CardsProps) => void;
}

const Card = ({ card, index, onDelete, onSave }: CardProps) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOnDelete = () => onDelete(card.id);

  const handleOpenEdit = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);

  const handleCloseEdit = () => setAnchorEl(null);

  const handleOnSave = (newCard: CardsProps) => {
    setAnchorEl(null);
    onSave(newCard);
  };
  return (
    <>
      <Draggable draggableId={card.id} index={index}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                ...provided.draggableProps.style,
                height: 'auto',
                background: 'ivory',
                textAlign: 'left',
                marginBottom: 5,
              }}
            >
              <div style={{ boxSizing: 'border-box', display: 'flex', padding: 5 }}>
                <div style={{ flex: 1, wordBreak: 'break-all', whiteSpace: 'normal' }}>{card.title}</div>
                <div>
                  <div style={{ display: 'flex', gap: 3 }}>
                    <button onClick={handleOpenEdit}>수정</button>
                    <button onClick={handleOnDelete}>삭제</button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Draggable>
      {anchorEl && <EditCard anchorEl={anchorEl} onClose={handleCloseEdit} card={card} onSave={handleOnSave} />}
    </>
  );
};

export default Card;
