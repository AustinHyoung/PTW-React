import styled from 'styled-components';
import Icon from '@mdi/react';

export const UserIcon = styled(Icon)`
  color: #1e90ff;
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  top: 5px;
  left: 15px;
`;

export const ChatIcon = styled(Icon)`
  color: #1e90ff;
`;

export const EditCardIcon = styled(Icon)`
  padding: 0 3px;
  cursor: pointer;
  border-radius: 30px;
  &:hover {
    background-color: #d8dae1;
  }
`;

export const DeleteCardIcon = styled(Icon)`
  padding: 0 3px;
  cursor: pointer;
  border-radius: 30px;
  &:hover {
    background-color: #d8dae1;
  }
`;
