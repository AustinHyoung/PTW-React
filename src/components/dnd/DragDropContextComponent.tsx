import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { CardListProps } from './index';

// const Data = [{ id: 'droppable-1' }, { id: 'droppable-2' }];

const DragDropContextComponent = ({ lists, cards }: CardListProps) => {
  // const onDragEnd = (result: DropResult) => {
  //   if (!result.destination) {
  //     return;
  //   }
  //   const newItems = [...items];
  //   const [removedItem] = newItems.splice(result.source.index, 1);
  //   newItems.splice(result.destination.index, 0, removedItem);
  // };

  return (
    <>
      <div style={{ display: 'flex' }}>
        {lists?.map((list) => (
          <div key={list.cards_list_no} style={{ width: 300, height: 500, border: '1px solid gray', margin: 10 }}>
            <h2>{list.title}</h2>
            {cards
              .filter((card) => card.card_list_no === list.cards_list_no)
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
