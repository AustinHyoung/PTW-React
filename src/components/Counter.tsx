import React from 'react';
import { useParams } from 'react-router-dom';
import { PathPayload } from '../redux/types';

interface CounterProps {
  count: number;
  onIncrease: ({ id }: PathPayload) => void;
  onDecrease: () => void;
  onNumIncrease: (payload: number) => void;
}

const Counter = ({ count, onIncrease, onDecrease, onNumIncrease }: CounterProps) => {
  const { id } = useParams();
  console.log('counter componnet path', id);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => onIncrease({ id: id })}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onNumIncrease(5)}>+5</button>
    </div>
  );
};

export default Counter;
