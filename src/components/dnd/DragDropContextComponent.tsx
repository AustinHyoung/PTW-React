import axios from 'axios';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { setList } from '../../reducer/listReducer';
import { setCard } from '../../reducer/cardReducer';
import { CardListProps } from './index';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';

const DragDropContextComponent = ({ lists, cards }: CardListProps) => {
  console.log('redux store list', lists);
  console.log('redux store card', cards);

  // const onDragEnd = (result: DropResult) => {
  //   if (!result.destination) {
  //     return;
  //   }
  //   const newItems = [...items];
  //   const [removedItem] = newItems.splice(result.source.index, 1);
  //   newItems.splice(result.destination.index, 0, removedItem);
  // };

  // const updateBtn = async () => {
  //   try {
  //     const response = await axios.put('http://localhost:8080/apis/card/change')
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <>
      <div style={{ display: 'flex' }}>
        {lists?.map((list) => (
          <div key={list.cards_list_no} style={{ width: 300, height: 500, border: '1px solid gray', margin: 10 }}>
            <h2>{list.title}</h2>
            {cards
              ?.filter((card) => card.card_list_no === list.cards_list_no)
              .map((card) => (
                <div key={card.card_no} style={{ width: 230, height: 100, border: '1px solid red', margin: 5 }}>
                  {card.contents}
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: 'flex' }}>
          {Data.map((v) => {
            return (
              <Droppable droppableId={v.id}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} style={{ border: '1px solid blue' }}>
                    {items.slice(0, 2).map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{ border: '1px solid red' }}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext> */}
    </>
  );
};

export default DragDropContextComponent;
