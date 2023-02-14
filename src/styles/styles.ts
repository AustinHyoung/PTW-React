import styled from 'styled-components';

interface Login {
  backgroundColor: string;
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

export const MainContent = styled.div`
  display: flex;
  height: calc(100% - 50px);
  width: 100%;
  background-color: #f1f2f6;
  padding-top: 50px;
  margin: auto;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  align-items: center;
  border-bottom: 1px solid rgb(110, 110, 110, 0.3);
  height: 50px;
  background-color: #ffffff;
  left: 0;
  top: 0;
`;

export const LeftContents = styled.ul`
  padding: 6px;
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
  box-shadow: -1px 1px 10px 4px rgba(0, 0, 0, 0.3);
  width: 230px;
  font-size: 12px;
  line-height: 20px;
  padding: 5px 0;
`;

export const DropMenu = styled.div`
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: #d8e8e8;
  }
`;
