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

export const LoginBox = styled.div`
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
