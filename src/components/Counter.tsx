import React from 'react';

interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onNumIncrease: (payload: number) => void;
}

const Counter = ({ count, onIncrease, onDecrease, onNumIncrease }: CounterProps) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onNumIncrease(5)}>+5</button>
    </div>
  );
};

export default Counter;
