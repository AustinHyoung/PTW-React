import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { CardsProps } from '../../utils/initData';
import { addCard, deleteCard, editCard } from '../../reducer/actions';
import ColumnHeader from './ColumnHeader';
import Card from './Card';
import AddCard from './AddCard';

interface ColumnsProps {
  id: string;
  title: string;
  cards: CardsProps[];
  index: number;
  handleOnDeleteColumn: () => void;
  handleOnEditColumn: (title: string) => void;
}

const Column = ({ id: columnId, title, cards, index, handleOnDeleteColumn, handleOnEditColumn }: ColumnsProps) => {
  const dispatch = useDispatch();

  const handleOnAddCard = (columnId: string) => (title: string) => dispatch(addCard({ title, columnId }));

  const handleOnDeleteCard = (columnId: string) => (cardId: string) => dispatch(deleteCard({ columnId, cardId }));

  const handleOnEditCard = (columnId: string) => (newCard: CardsProps) => dispatch(editCard({ columnId, newCard }));

  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            style={{
              ...provided.draggableProps.style,
              backgroundColor: '#e3e3e3',
              position: 'relative',
              display: 'inline-flex',
              maxHeight: '100%',
              flexDirection: 'column',
              boxSizing: 'border-box',
              maxWidth: 250,
              width: 250,
              margin: 2,
              padding: 2,
            }}
          >
            <ColumnHeader
              {...provided.dragHandleProps}
              title={title}
              onDelete={handleOnDeleteColumn}
              onEdit={handleOnEditColumn}
            />
            <Droppable droppableId={columnId} type="COLUMN">
              {(provided) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{ marginTop: 5, boxSizing: 'border-box', overflowY: 'auto', width: '100%', flex: 1 }}
                  >
                    {cards?.map((card, index) => {
                      return (
                        <Card
                          {...{
                            card,
                            index,
                            onDelete: handleOnDeleteCard(columnId),
                            onSave: handleOnEditCard(columnId),
                          }}
                          key={card.id}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
            <AddCard handleOnAddCard={handleOnAddCard(columnId)} />
          </div>
        );
      }}
    </Draggable>
  );
};

export default Column;
