import React from 'react';
import { StyledButton } from './ToDoButton.styles';

interface IToDoButton {
  children: React.ReactNode;
  onClick: () => void;
}

export const ToDoButton = (props: IToDoButton) => {
  return <StyledButton {...props}></StyledButton>;
};
