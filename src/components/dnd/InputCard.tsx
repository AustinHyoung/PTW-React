import React, { useState } from 'react';

interface InputCardProps {
  setOpen: (open: boolean) => void;
  content: string;
  onConfirm: (title: string) => void;
  placeholder: string;
  multiline: boolean;
}

export default function InputCard({ setOpen, content, onConfirm, placeholder, ...rest }: InputCardProps) {
  const [title, setTitle] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const hanldeOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    onConfirm(title);
    setOpen(false);
    setTitle('');
  };

  return (
    <form onSubmit={hanldeOnSubmit}>
      <div style={{ width: '100%' }}>
        <input onChange={handleOnChange} placeholder={placeholder} value={title} />
      </div>
      <div style={{ width: '100%', display: 'flex', margin: '6px 0', alignItems: 'center' }}>
        <div>
          <button type="submit" style={{ background: 'red', color: '#fff' }}>
            {content}
          </button>
        </div>
        <span onClick={() => setOpen(false)}>CLOSE BTN</span>
      </div>
    </form>
  );
}
