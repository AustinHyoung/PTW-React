import React, { useState } from 'react';

interface InputCardProps {
  setOpen: (open: boolean) => void;
  content: string;
  onConfirm: (contents: string) => void;
  placeholder: string;
  multiline: boolean;
}

export default function InputCard({ setOpen, content, onConfirm, placeholder, ...rest }: InputCardProps) {
  const [contents, setContents] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contents.trim()) return;
    onConfirm(contents);
    setOpen(false);
    setContents('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div style={{ width: '100%' }}>
        <input onChange={handleOnChange} placeholder={placeholder} value={contents} />
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
