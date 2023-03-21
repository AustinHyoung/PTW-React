import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { List, ListProps } from './index';

// const Data = [{ id: 'droppable-1' }, { id: 'droppable-2' }];

const DragDropContextComponent = ({ lists }: ListProps) => {
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
        {lists?.map((item) => {
          return (
            <div key={item.cards_list_no} style={{ width: 100, height: 100, border: '1px solid gray', margin: 10 }}>
              hi
            </div>
          );
        })}
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
