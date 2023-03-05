import React from 'react';
import { useDispatch } from 'react-redux';
import { changeItemStatus, removeItem } from '../redux/reducer/todoSlice';
import { StyledTitle, WrapperToDo } from './ToDo.styles';

interface IToDo {
  id: number | string;
  title: string;
  completed: boolean;
}

export const ToDo = ({ title, id, completed }: IToDo) => {
  const dispatch = useDispatch();

  return (
    <WrapperToDo>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(changeItemStatus({ id }))}
      />
      <StyledTitle defaultChecked={completed}>{title}</StyledTitle>
      <p
        style={{ cursor: 'pointer', color: 'red' }}
        onClick={() => dispatch(removeItem({ id }))}
      >
        X
      </p>
    </WrapperToDo>
  );
};
