import React, { useState } from 'react';
import InputCard from './InputCard';

interface AddCardProps {
  handleOnAddCard: (title: string) => void;
}

const AddCard = ({ handleOnAddCard }: AddCardProps) => {
  const [open, setOpen] = useState(false);

  const handleOnConfirm = (title: string) => {
    handleOnAddCard(title);
  };

  return (
    <div style={{ width: '100%', marginTop: 5 }}>
      {open ? (
        <div>
          <InputCard content={'Add Card'} setOpen={setOpen} onConfirm={handleOnConfirm} placeholder={'Add Title'} multiline />
        </div>
      ) : (
        <div>
          <div style={{ padding: 5, background: '#EBECF0', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
            <div>+ Add a Card</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCard;
