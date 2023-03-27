import React, { useState } from 'react';
import InputCard from './InputCard';

interface AddColumnProps {
  handleOnAddColumn: (title: string) => void;
}

const AddColumn = ({ handleOnAddColumn }: AddColumnProps) => {
  const [open, setOpen] = useState(false);

  const handleOnConfirm = (title: string) => {
    handleOnAddColumn(title);
  };

  return (
    <div style={{ width: 250 }}>
      {open ? (
        // 컬럼 추가 버튼 이후 input 생성
        <div>
          <InputCard
            multiline={false}
            content={'Add Column'}
            setOpen={setOpen}
            onConfirm={handleOnConfirm}
            placeholder={'Column Title'}
          />
        </div>
      ) : (
        // 컬럼 추가 버튼
        <div>
          <div style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)}>
            <div>+ Add a Column</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddColumn;
