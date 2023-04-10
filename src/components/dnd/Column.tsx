import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { CardProps } from '../../redux/types';
import { addCard, deleteCard, editCard } from '../../redux/action/actions';
import ColumnHeader from './ColumnHeader';
import Card from './Card';
import AddCard from './AddCard';

interface Props {
  cards_list_no: number;
  title: string;
  card: CardProps[];
  list_order: number;
  handleOnDeleteColumn: () => void;
  handleOnEditColumn: (title: string) => void;
}

const Column = ({ cards_list_no, title, card, list_order, handleOnDeleteColumn, handleOnEditColumn }: Props) => {
  const dispatch = useDispatch();
  // dnd의 id는 string만 됨
  const strCardsListNo = String(cards_list_no);

  //const handleOnAddCard = (cards_list_no: number) => (title: string) => dispatch(addCard({ title, columnId }));

  //const handleOnDeleteCard = (cards_list_no: number) => (cardId: string) => dispatch(deleteCard({ columnId, cardId }));

  //const handleOnEditCard = (cards_list_no: number) => (newCard: CardProps) => dispatch(editCard({ columnId, newCard }));

  return (
    <Draggable draggableId={strCardsListNo} index={list_order}>
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
              border: '2px solid skyblue',
            }}
          >
            <ColumnHeader
              {...provided.dragHandleProps}
              title={title}
              onDelete={handleOnDeleteColumn}
              onEdit={handleOnEditColumn}
            />
            {/* <Droppable droppableId={strCardsListNo} type="COLUMN">
              {(provided) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{ marginTop: 5, boxSizing: 'border-box', overflowY: 'auto', width: '100%', flex: 1 }}
                  >
                    {card?.map((cards, index) => {
                      return (
                        // <Card
                        //   {...{
                        //     cards,
                        //     index,
                        //     onDelete: handleOnDeleteCard(cards_list_no),
                        //     onSave: handleOnEditCard(cards_list_no),
                        //   }}
                        //   key={cards.card_no}
                        // />
                        <div>123123</div>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable> */}
            {/* <AddCard handleOnAddCard={handleOnAddCard(cards_list_no)} /> */}
          </div>
        );
      }}
    </Draggable>
  );
};

export default Column;
