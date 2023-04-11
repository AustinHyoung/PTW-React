import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { CardProps } from '../../redux/types';
import { addCard, deleteCard, editCard } from '../../redux/action/actions';
import ColumnHeader from './ColumnHeader';
import Card from './Card';
import AddCard from './AddCard';
import * as S from '../../styles/styles';

interface Props {
  cardsListNo: number;
  title: string;
  card: CardProps[];
  listOrder: number;
  handleOnDeleteColumn: () => void;
  handleOnEditColumn: (title: string) => void;
}

const Column = ({ cardsListNo, title, card, listOrder, handleOnDeleteColumn, handleOnEditColumn }: Props) => {
  const dispatch = useDispatch();
  // dnd의 id는 string만 됨
  const strCardsListNo = String(cardsListNo);

  const handleOnAddCard = (cardsListNo: number) => (title: string) => dispatch(addCard(title, cardsListNo));

  const handleOnDeleteCard = (cardsListNo: number) => (cardNo: number) => dispatch(deleteCard(cardsListNo, cardNo));

  const handleOnEditCard = (cardsListNo: number) => (newCard: CardProps) => dispatch(editCard(cardsListNo, newCard));

  return (
    <Draggable draggableId={strCardsListNo} index={listOrder}>
      {(provided) => {
        return (
          <S.DraggableColumn
            {...provided.draggableProps}
            ref={provided.innerRef}
            style={{
              ...provided.draggableProps.style,
            }}
          >
            <ColumnHeader
              {...provided.dragHandleProps}
              title={title}
              onDelete={handleOnDeleteColumn}
              onEdit={handleOnEditColumn}
            />
            <Droppable droppableId={strCardsListNo} type="COLUMN">
              {(provided) => {
                return (
                  <S.DroppableColumn {...provided.droppableProps} ref={provided.innerRef}>
                    {card?.map((cards) => {
                      return (
                        <Card
                          {...{
                            cards,

                            onDelete: handleOnDeleteCard(cardsListNo),
                            onSave: handleOnEditCard(cardsListNo),
                          }}
                          key={cards.card_no}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </S.DroppableColumn>
                );
              }}
            </Droppable>
            <AddCard handleOnAddCard={handleOnAddCard(cardsListNo)} />
          </S.DraggableColumn>
        );
      }}
    </Draggable>
  );
};

export default Column;
