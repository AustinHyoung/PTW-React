import { Popover } from '@material-ui/core';
import styled from 'styled-components';

interface Login {
  backgroundColor: string;
}

interface ActiveProps {
  isActive: boolean;
}

interface NavActiveProps {
  navActive: boolean;
}

export const LoginDisplay = styled.div<Login>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
`;

export const LoginBox = styled.form`
  display: flex;
  border-radius: 6px;
  background-color: #c8d6e5;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 400px;
  height: 400px;
`;

export const IntroTitle = styled.div`
  color: #576574;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin: 10px;
`;

export const IntroSubTitle = styled.div`
  color: #576574;
  text-align: center;
  margin: 10px;
  font-size: 15px;
`;

export const LoginInput = styled.input`
  margin: 5px;
  padding: 10px;
  border: 1px solid #535c68;
  border-radius: 4px;
  &:hover {
    border-color: #5e9fdd;
  }
  &:focus {
    border-color: #2e86de;
  }
`;

export const LoginBtn = styled.button`
  margin: 5px;
  padding: 10px;
  border-radius: 4px;
  background-color: #418dd6;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0969c6;
  }
  font-family: inherit;
`;

export const EctBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 0 5px;
`;

export const EctLink = styled.div`
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const ErrText = styled.div`
  color: red;
  font-size: 11px;
  padding: 0 5px 5px 5px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid rgb(110, 110, 110, 0.3);
  background-color: #ffffff;
  left: 0;
  top: 0;
  height: 60px;
`;

export const LeftContents = styled.ul`
  padding: 6px 12px;
  display: flex;
  align-items: center;
`;

export const RightContents = styled.ul`
  display: flex;
  align-items: center;
`;

export const RightList = styled.li`
  display: flex;
`;

export const SearchInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 0 8px;
  padding: 0 8px 0 40px;
  height: 32px;
  width: 200px;
  font-size: 14px;
  &:hover {
    background-color: #dfe4ea;
  }
  &:focus {
    width: 350px;
    background-color: #ffffff;
  }
`;

export const DropBox = styled.div`
  position: absolute;
  right: 3px;
  top: 55px;
  background-color: #eef4f4;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  box-shadow: -1px 1px 10px 4px rgba(0, 0, 0, 0.1);
  width: 230px;
  font-size: 12px;
  line-height: 20px;
  padding: 5px 0;
  z-index: 99;
`;

export const DropMenu = styled.div`
  padding: 10px 16px;
  cursor: pointer;

  :hover {
    background-color: #d8e8e8;
  }
`;

export const MyInfo = styled.div`
  padding: 20px;
`;

export const SideMenu = styled.div`
  width: 250px;
  background-color: inherit;
  padding: 4px;
  border-right: 1px solid rgba(255, 255, 255, 0.17);
`;

export const SideChat = styled.div`
  width: 300px;
  background-color: #ced6e0;
  padding: 6px;
`;

export const IconBtn = styled.button`
  cursor: pointer;
  border-radius: 3px;
  background-color: inherit;
  &:hover {
    background-color: rgba(0, 0, 0, 0.16);
  }
`;

export const MainDisplay = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MainColor = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(180deg, rgba(4, 125, 247, 1) 3%, rgba(62, 139, 218, 1) 10%, rgba(116, 185, 255, 1) 100%);
`;

export const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.17);
`;

export const FlexBox = styled.div`
  display: flex;
  height: 100%;
`;

export const Flex = styled.div`
  display: flex;
`;

export const DndBox = styled.div`
  flex: 1;
  overflow: auto;
  padding: 6px;
`;

export const Hr = styled.div`
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
  margin: 10px 0;
`;

export const VHr = styled.div`
  border-right: 1px solid rgba(9, 30, 66, 0.13);
`;

export const DropTitle = styled.h2`
  padding: 0 16px;
  font-weight: 400;
`;

export const FlexAlign = styled.div`
  display: flex;
  align-items: center;
`;

export const UpdateBtn = styled.button<ActiveProps>`
  padding: 10px 30px;
  background-color: ${(props) => (props.isActive ? '#1e90ff' : '#75BAFD')};
  border-radius: 6px;
  color: #fff;
  cursor: ${(props) => (props.isActive ? 'pointer' : 'default')};
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  :hover {
    background-color: ${(props) => props.isActive && '#2980b9'};
  }
`;

export const mySideList = styled.div<NavActiveProps>`
  padding: 10px;
  cursor: pointer;
  margin: 5px 0;
  line-height: 1.5;
  border-radius: 6px;
  background-color: ${(props) => (props.navActive ? '#dfe4ea' : '')};

  :hover {
    background-color: #dfe4ea;
  }
`;

export const DangerBtn = styled.button`
  padding: 10px 30px;
  background-color: #e74c3c;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: #c0392b;
  }
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  width: 200px;
`;

export const SetInput = styled.input`
  border: 1px solid rgba(83, 92, 104, 0.5);
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 16px;
  :hover {
    border: 1px solid rgba(83, 92, 104);
  }
  :focus {
    border: 1px solid rgba(83, 92, 104);
  }
`;

export const DefaultForm = styled.form`
  flex-direction: column;
  padding: 20px;
  width: 400px;
`;

export const SetSide = styled.div`
  width: 200px;
  padding: 40px;
`;
export const SetTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
`;

export const MVertical30 = styled.div`
  margin: 30px 0;
`;

export const MVertical15 = styled.div`
  margin: 15px 0;
`;

export const FlexEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BoardItem = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;
  white-space: pre-line;
  cursor: pointer;
`;

export const StyledPopover = styled(Popover)`
  .MuiPopver-root {
    background: rgba(0, 0, 0, 0.4);
  }

  .MuiPopover-paper {
    display: flex;
    flex-direction: column;
    gap: 5;
    max-width: 400;
    padding: 10px;
  }
`;

export const CardSaveBtn = styled.button`
  background-color: #1e90ff;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  font-size: 15px;
  padding: 6px 16px;
  &:hover {
    background-color: rgba(30, 144, 255, 0.7);
  }
  justify-self: flex-start;
`;

export const CardSaveBtnBox = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 10px;
`;

export const DroppableBoard = styled.div`
  display: flex;
  height: 100%;
  overflow-y: hidden;
`;

export const CardsListSpace = styled.div`
  height: 100%;
  display: inline-block;
  vertical-align: top;
`;

export const AddColumnSpace = styled.div`
  margin-left: 4px;
`;

export const DraggableColumn = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  position: relative;
  display: inline-flex;
  max-height: 100%;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 250px;
  width: 250px;
  margin: 0 4px;
  padding: 8px;
  box-shadow: 0px 1px 3px -1px rgba(9, 30, 66, 0.79);
  -webkit-box-shadow: 0px 1px 3px -1px rgba(9, 30, 66, 0.79);
  -moz-box-shadow: 0px 1px 3px -1px rgba(9, 30, 66, 0.79);
`;

export const DroppableColumn = styled.div`
  margin-top: 5px;
  box-sizing: border-box;
  overflow-y: auto;
  width: 100%;
  flex: 1;
`;

export const DraggableCard = styled.div`
  height: auto;
  background-color: #fff;
  text-align: left;
  margin-bottom: 8px;
  border-radius: 3px;
  box-shadow: 0px 1px 3px -1px rgba(9, 30, 66, 0.79);
  -webkit-box-shadow: 0px 1px 3px -1px rgba(9, 30, 66, 0.79);
  -moz-box-shadow: 0px 1px 3px -1px rgba(9, 30, 66, 0.79);
  &:hover {
    background-color: #f5f5f7;
  }
`;

export const BoardDelete = styled.div`
  border-radius: 4px;
  padding: 10px;
  color: #fff;
  &:hover {
    background-color: rgba(255, 255, 255, 0.16);
  }
`;

export const AddCardBtn = styled.div`
  padding: 5px;
  background-color: #ebecf0;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    background-color: #d8dae1;
  }
`;

export const EditCardBtn = styled.div`
  padding: 0 3px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #e1e3e9;
  }
`;

export const DeleteCardBtn = styled.div`
  padding: 0 3px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #e1e3e9;
  }
`;

export const DeleteColumnBtn = styled.div`
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #d8dae1;
  }
`;

export const AddColumnBtn = styled.div`
  width: 230px;
  padding: 10px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.16);
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const AddColumnBtnInput = styled.div`
  width: 230px;
  padding: 10px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.16);
`;

export const BoardEditInput = styled.input`
  background-color: #fff;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 3px;
  font-size: 16px;
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const AddCardsListBtn = styled.button`
  background-color: #2ecc71;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
  margin-right: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(46, 204, 113, 0.7);
  }
`;

export const AuthBtn = styled.div`
  margin: 5px;
  padding: 11px;
  font-size: 13px;
  border-radius: 4px;
  background-color: #418dd6;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0969c6;
  }
  font-family: inherit;
`;
