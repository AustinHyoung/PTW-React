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
  border: 2px solid #535c68;
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
