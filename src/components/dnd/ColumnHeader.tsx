import React, { useState } from 'react';
import { ClickAwayListener } from '@material-ui/core';

interface ColumnTitleProps {
  title: string;
  onDelete: () => void;
  onEdit: (title: string) => void;
}

const ColumnTitle = ({ title, onDelete, onEdit, ...rest }: ColumnTitleProps) => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleTitleEditor = () => {
    setInputValue(title);
    setIsInputOpen(true);
  };

  const handleSubmit = () => {
    setInputValue('');
    setIsInputOpen(false);
    if (inputValue.trim() !== title.trim()) onEdit(inputValue);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'left',
      }}
      {...rest}
    >
      {!isInputOpen ? (
        <div style={{ flex: 1, display: 'flex' }}>
          <span style={{ wordBreak: 'break-all' }} onClick={toggleTitleEditor}>
            {title}
          </span>
        </div>
      ) : (
        <ClickAwayListener onClickAway={handleSubmit}>
          <form onSubmit={handleSubmit}>
            <input
              style={{ background: '#fff', maxHeight: '100%', boxSizing: 'border-box', paddingLeft: 5, borderRadius: 6 }}
              value={inputValue}
              onChange={onChange}
            />
          </form>
        </ClickAwayListener>
      )}
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};

export default ColumnTitle;
