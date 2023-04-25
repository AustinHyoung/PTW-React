import React, { useState } from 'react';
import InputCard from './InputCard';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import * as S from '../../styles/styles';

interface AddColumnProps {
  handleOnAddColumn: (title: string) => void;
}

const AddColumn = ({ handleOnAddColumn }: AddColumnProps) => {
  const [open, setOpen] = useState(false);

  const handleOnConfirm = (title: string) => {
    handleOnAddColumn(title);
  };

  return (
    <>
      {open ? (
        // 컬럼 추가 버튼 이후 input 생성
        <S.AddColumnBtnInput>
          <div>
            <InputCard
              multiline={false}
              content={'리스트 추가'}
              open={open}
              setOpen={setOpen}
              onConfirm={handleOnConfirm}
              placeholder={'리스트 제목'}
              color={'#ecf0f1'}
            />
          </div>
        </S.AddColumnBtnInput>
      ) : (
        // 컬럼 추가 버튼
        <S.AddColumnBtn>
          <div>
            <div
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color: '#FFF' }}
              onClick={() => setOpen(!open)}
            >
              <Icon path={mdiPlus} size={0.7} style={{ display: 'flex', alignItems: 'center', marginRight: 5 }} />
              <span>리스트 추가</span>
            </div>
          </div>
        </S.AddColumnBtn>
      )}
    </>
  );
};

export default AddColumn;
