import { mdiChat, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { ClickAwayListener } from '@material-ui/core';
import { useQueries, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import * as Icons from '../styles/iconStyles';
import * as S from '../styles/styles';
import DragDropContextComponent from './dnd/DragDropContextComponent';
import LeftSide from './layout/LeftSide';
import RightSide from './layout/RightSide';
import { editBoardTitle, initBoard } from '../redux/action/actions';

const BoardComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardTitle = useSelector((state: RootState) => state.track.data.title);
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [leftSide, setLeftSide] = useState(false);
  const [rightSide, setRightSide] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isInputOpen && inputRef.current) {
      inputRef.current.select();
    }
  }, [isInputOpen]);

  const editTitleAPI = async (inputValue: string) => {
    const param = {
      board_no: id,
      title: inputValue,
    };
    try {
      await axios.put(`${process.env.API_URL}/apis/edit/title`, param);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleTitleEditor = () => {
    setInputValue(boardTitle);
    setIsInputOpen(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setInputValue('');
    setIsInputOpen(false);

    if (inputValue.trim() !== boardTitle.trim()) {
      dispatch(editBoardTitle(inputValue));
      editTitleAPI(inputValue);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <S.MainDisplay>
        <S.MainColor>
          <S.BoardHeader>
            <div>
              <S.IconBtn onClick={() => setLeftSide((leftSide) => !leftSide)}>
                <Icon path={mdiMenu} size={1} color="#fff" />
              </S.IconBtn>
            </div>
            {!isInputOpen ? (
              <div style={{ color: '#fff', fontSize: 20, cursor: 'default' }} onClick={toggleTitleEditor}>
                {boardTitle}
              </div>
            ) : (
              <ClickAwayListener onClickAway={handleSubmit}>
                <form onSubmit={handleSubmit}>
                  <S.BoardEditInput ref={inputRef} value={inputValue} onChange={onChange} />
                </form>
              </ClickAwayListener>
            )}

            <div>
              {/* <S.IconBtn onClick={() => setRightSide((rightSide) => !rightSide)}>
                <Icons.ChatIcon path={mdiChat} size={1} />
              </S.IconBtn> */}
            </div>
          </S.BoardHeader>
          <S.FlexBox>
            {leftSide && <LeftSide />}
            <S.DndBox>
              <DragDropContextComponent id={id} />
            </S.DndBox>
            {/* {rightSide && <RightSide />} */}
          </S.FlexBox>
        </S.MainColor>
      </S.MainDisplay>
    </>
  );
};

export default BoardComponent;
